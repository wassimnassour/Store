import React from "react";
import ReactLoading from "react-loading";
import { LoadingWrapper } from "./loading.style";
import { Redirect } from "react-router-dom";
const Loading = () => {
  return (
    <LoadingWrapper>
      <ReactLoading type="spin" color="red" height="84px" width="104px" />
    </LoadingWrapper>
  );
};

export default Loading;
