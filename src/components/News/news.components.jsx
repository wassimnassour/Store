import React from "react";
import { NewsContainer, Input } from "./news.style";
const News = (props) => {
	return (
		<NewsContainer>
			<h4>SIGN UP FOR UPDATES</h4>
			<p>
				Sign up for exclusive early sale access and tailored new
				arrivals
			</p>
			<Input>
				<div className="s">
					<input type="email" placeholder="Your email address" />
					<button>Join</button>
				</div>
			</Input>
		</NewsContainer>
	);
};

export default News;
