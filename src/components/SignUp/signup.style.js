import styled from "styled-components";

export const SignInContainer = styled.div`
  height: 76vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const SignInWrapper = styled.form`
  display: flex;
  flex-direction: column;

  width: 400px;
  margin: auto;
  padding: 1rem;
  height: auto;
  color: black;
  box-shadow: 0px 0px 2px 0.1px gray;
  h1 {
    text-align: center;
    margin: 1.8rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    background: black;
    margin: 0.6rem 0;
    padding: 0.8rem;
    color: white;
    font-size: 1rem;
    border: none;
    cursor: pointer;
  }
  span {
    margin: 0.4rem auto;
    text-align: center;
    color: grey;
    a {
      text-decoration: none;
      color: #0073ff;
    }
  }
`;
