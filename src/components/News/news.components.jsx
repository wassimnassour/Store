import React from "react";
import { NewsContainer, InputContainer } from "./news.style";
const News = (props) => {
  return (
    <NewsContainer>
      <h4>SIGN UP FOR UPDATES</h4>
      <p>Sign up for exclusive early sale access and tailored new arrivals</p>
      <InputContainer>
        <input type="email" placeholder="Your email address" />
        <button>Join</button>
      </InputContainer>
    </NewsContainer>
  );
};

export default News;
