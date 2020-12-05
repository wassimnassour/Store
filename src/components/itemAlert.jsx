import React from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SelectAdded, RemoveALert } from "../redux/index";
const ItemAlert = ({ added, RemoveALert }) => {
  if (!added) {
    return null;
  }
  setTimeout(()=>{RemoveALert()} , 2600)
  return (
    <ItemAlertContainer>
      A new item has been added to your Shopping Cart
      <button onClick={RemoveALert}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </ItemAlertContainer>
  );
};
const mapDispatchToProps = {
  RemoveALert,
};
const mapstateToProps = createStructuredSelector({
  added: SelectAdded,
});

const ItemAlertContainer = styled.div`
  position: absolute;
  background: #32cd32;
  max-width: 600px;
  padding: 10px;
  height: 57px;
  top: 88%;
  right: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 8px;
  button {
    margin-left: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 25px;
    border: 1px solid;
    padding: 5px;
  }
`;
export default connect(mapstateToProps, mapDispatchToProps)(ItemAlert);
