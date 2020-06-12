import React, { useState } from "react";
import { SignInContainer, SignInWrapper } from "./signin.style";
import { FormInput } from "../index";
const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <SignInContainer>
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
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="submit-button">Login</button>
        <button>Sign In With gooogle </button>
        <span>
          Dont have Account ?{" "}
          <a href="/signup" className="signup-link">
            Sign Up
          </a>
        </span>
      </SignInWrapper>
    </SignInContainer>
  );
};

export default SignIn;
