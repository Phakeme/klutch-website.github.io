import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: var(--color-black); */
  background-color: blue;
  color: var(--color-white);
  /* padding: 30px; */
  /* width: 100%; */
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-gap: 1px; */
  height: 300px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 10px;
`;

export const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  opacity: 0;
  :hover{
  border: 1px solid white;
  opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 0.3s;
  }
  @keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`;

export const Text = styled.h3`
text-transform: uppercase;

`;

export const H4 = styled.h4`
margin-left:30px;
`;
