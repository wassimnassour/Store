import React, { useState } from "react";
import { SignInContainer, SignInWrapper } from "./signup.style";
import { FormInput } from "../index";
const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");

  return (
    <SignInContainer>
      <SignInWrapper>
        <h1> Sign Up </h1>

        <FormInput
          name="Name"
          type="text"
          label="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <FormInput
          name="Confirmpassword"
          type="password"
          label="Confirm password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="submit-button">Sign Up</button>
        <span>
          I have Account ?{" "}
          <a href="/signin" className="signup-link">
            Sign In{" "}
          </a>
        </span>
      </SignInWrapper>
    </SignInContainer>
  );
};

export default SignUp;
