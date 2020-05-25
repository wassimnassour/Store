import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`


height: 5vh;
left: 120px;
top: 40px;
display: flex;
justify-content: space-around;
align-items: center;
background:
    transparent;

}
`;

export const Li = styled(Link)`

font-size: 0.9rem;

line-height: 20px;

margin-right: 2rem;

list-style: none;

text-decoration: none;
font-family: 'Noto Serif', serif;color:

    white;
    cursor: pointer;


}`;
export const Logo = styled.h1`
	font-size: 35px;
	line-height: 70px;
	color: white;
	font-family: "Noto Serif", serif;
`;

export const HeaderButton = styled.button`
	cursor: pointer;

	background: transparent;

	border: none;

	font-size: 0.9rem;

	color: white;

	margin: ;

	font-size: 0.9rem;

	line-height: 20px;

	margin-right: 2rem;

	list-style: none;

	-webkit-text-decoration: none;

	text-decoration: none;

	font-family: "Noto Serif", serif;

	color: white;

	font-weight: 400;
	& > span {
		margin-right: 0.3rem;
	}
`;
