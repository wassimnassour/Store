import React from "react";
import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from "./formInput.style";
const FormInput = ({ label, value, error, ...otheprops }) => {
  return (
    <GroupContainer>
      <FormInputContainer {...otheprops} />
      {label ? <FormInputLabel>{label}</FormInputLabel> : null}
      <div className="error">{error}</div>
    </GroupContainer>
  );
};
// className={value.length ? "shrink" : ""}
export default FormInput;
