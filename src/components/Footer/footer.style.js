import styled from "styled-components";
export const FooterContainer = styled.footer`
	max-width:1500px;
display: flex;
flex-direction: column;
	height: 400px;
	margin: auto;
`;


export const FooterWrapper = styled.div`

display: flex;
justify-content: space-around;

& > h1{
	font-size:1rem;


}
& > ul{
	padding-left: 0;
list-style: none;

}
`
export const FooterInfo = styled.div`



& > h1{
	font-size:1rem;


}
& > ul{
	padding-left: 0;
list-style: none;

}& > ul > li{
font-size: 12px;
line-height: 12px;
margin: 1.5rem 0;



color: #000F08;

}
`