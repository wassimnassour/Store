import React from "react";
import { SignInContainer, SignInWrapper } from "./signin.style";
import { FormInput } from "../index";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  SignInWithEmailStart,
  SignInWithGoogleStart,
  selectCurrentUser,
} from "../../redux/index";
import { connect } from "react-redux";
import { auth } from "../../Firebase/firebase";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

const SignIn = ({
  SignInWithEmailStart,
  currentUser,
  SignInWithGoogleStart,
  dispatch,
}) => {
  console.log(currentUser);
  const initialValues = {
    password: "",
    email: "",
  };
  const submit = (values) => {
    const { email, password } = values;
    SignInWithEmailStart({ email, password });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("invlaid Format email"),

    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });
  const errors = {
    password: "",
    email: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: submit,
    validationSchema,
    errors,
  });
  return (
    <SignInContainer onSubmit={formik.handleSubmit}>
      <SignInWrapper>
        <h1> WelCome Back </h1>
        {currentUser ? <Redirect to="/" /> : null}
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

        <button className="submit-button" type="submit">
          Login
        </button>
        <button
          type="button"
          onClick={() => {
            SignInWithGoogleStart();
          }}
        >
          Sign In With gooogle{" "}
        </button>
        <span>
          Dont have Account ?{" "}
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </span>
      </SignInWrapper>

      <button onClick={() => auth.signOut()}>Sign Out</button>
    </SignInContainer>
  );
};
const mapDispatchToProps = {
  SignInWithEmailStart: (user) => SignInWithEmailStart(user),
  SignInWithGoogleStart,
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
