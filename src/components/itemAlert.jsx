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
  // send action to remove  alert after 1s 
  setTimeout(()=>{RemoveALert()} , 1400)
  return (
    <ItemAlertContainer>
   A new item has been added to your Shopping Cart.

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
    position: static;  background: #53fa53;
  width: 100%;
  padding: 6px;
  height: auto;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
 
  
  button {
    margin-left: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    border: 1px solid;
    padding: 5px;
  }
  @media (max-width:800px){
    font-size:14px;
    height: 37px;

  }
`;
export default connect(mapstateToProps, mapDispatchToProps)(ItemAlert);
