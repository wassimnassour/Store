import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 18px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 0.8rem 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
  .error {
    margin-top: 5px;
    font-size: 0.875rem;
    color: #db1802;
    font-weight: 400;
    padding-left: 5px;
    position: absolute;
    top: 75%;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 10px;
  display: block;
  width: 96%;
  border: none;
  border-radius: 0;
  border: 1px solid ${subColor};
  margin: 1rem auto;

  border-radius: 0;
  box-shadow: none;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
/*    ${shrinkLabelStyles}
*/  }
`;

export const FormInputLabel = styled.label`
  color: black;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: -10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
