import React, { useState } from "react";
import { SignInContainer, SignInWrapper } from "./signin.style";
import { FormInput } from "../index";
import {
  SignInWithEMailStart,
  SignInWithGoogleSucces,
} from "../../redux/User/user.action";
import { connect } from "react-redux";
const SignIn = ({ SignInWithEMailStart, SignInWithGoogleSucces }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log("irts wormk");
    SignInWithEMailStart();
  };
  return (
    <SignInContainer onSubmit={submit}>
      <SignInWrapper>
        <h1> WelCome Back </h1>

        <FormInput
          name="email"
          type="email"
          label="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={Password}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          className="submit-button"
          onClick={() => SignInWithEMailStart()}
        >
          Login
        </button>
        <button>Sign In With gooogle </button>
        <span>
          Dont have Account ?{" "}
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </span>
      </SignInWrapper>
      09+
    </SignInContainer>
  );
};
const mapDispatchToProps = {
  SignInWithEMailStart,
};
export default connect(null, mapDispatchToProps)(SignIn);
