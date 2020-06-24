import React from "react";
import { SignInContainer, FormWrapper } from "./signup.style";
import { FormInput } from "../index";
import {
  createProfileAccount,
  createProfileAccountStart,
  selectCurrentUser,
} from "../../redux/index";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { createStructuredSelector } from "reselect";
import { Redirect } from "react-router-dom";

const SignUp = ({
  createProfileAccount,
  currentUser,
  createProfileAccountStart,
}) => {
  const initialValues = {
    name: "",
    password: "",
    email: "",
    ConfirmPassword: "",
  };
  const submit = (values) => {
    const { email, password, name } = values;
    createProfileAccount({ email, password, name });
    createProfileAccountStart();
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("name is required "),
    email: Yup.string()
      .required("email is required")
      .email("invlaid Format email"),

    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    ConfirmPassword: Yup.string()
      .required("password is required ")
      .oneOf([Yup.ref("password"), null], "passWord should match 202020"),
  });
  const errors = {
    name: "",
    password: "",
    email: "",
    ConfirmPassword: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: submit,
    validationSchema,
    errors,
  });
  return (
    <SignInContainer onSubmit={formik.handleSubmit}>
      {currentUser ? <Redirect to="/" /> : null}
      <FormWrapper>
        <h1> Sign Up </h1>

        <FormInput
          name="name"
          type="text"
          label="Name"
          value={formik.values.name}
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
          {...formik.getFieldProps("name")}
        />

        <FormInput
          name="email"
          type="email"
          label="Email"
          value={formik.values.email}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
          {...formik.getFieldProps("email")}
        />

        <FormInput
          name="password"
          type="password"
          label="password"
          value={formik.values.password}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          {...formik.getFieldProps("password")}
        />

        <FormInput
          name="Confirmpassword"
          type="password"
          label="Confirm password"
          value={formik.values.ConfirmPassword}
          error={
            formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
              ? formik.errors.ConfirmPassword
              : null
          }
          {...formik.getFieldProps("ConfirmPassword")}
        />

        <button type="submit" className="submit-button">
          Sign Up
        </button>
        <span>
          I have Account ?{" "}
          <a href="/signin" className="signup-link">
            Sign In{" "}
          </a>
        </span>
      </FormWrapper>
    </SignInContainer>
  );
};

const mapDispatchToProps = {
  createProfileAccount: (userInfo) => createProfileAccount(userInfo),
  createProfileAccountStart,
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
