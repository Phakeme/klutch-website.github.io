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
  grid-template-columns: auto auto auto auto;
  /* grid-gap: 1px; */
  height: 300px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: red;
`;

export const Text = styled.p`
margin: 0 0 0 30px;
`;

export const H4 = styled.h4`
margin-left:30px;
`;
