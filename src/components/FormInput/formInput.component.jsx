import React from "react";
import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from "./formInput.style";
const FormInput = ({ label, value, ...otheprops }) => {
  console.log(value.length);
  return (
    <GroupContainer>
      <FormInputContainer {...otheprops} />
      {label ? (
        <FormInputLabel className={value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
