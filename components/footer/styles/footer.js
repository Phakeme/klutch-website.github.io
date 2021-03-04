import styled from "styled-components";

export const Wrapper = styled.footer`
  /* height: 200px; */
  background-color: #fff;
  color: #000;
  /* background-color: var(--color-pink); */
  margin-top: 70px;
  padding: 30px;
`;

export const Inner = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px 30px 0 30px;
  /* background-color: var(--color-pink); */
  /* background-color: red; */
  /* margin-top: 70px; */
  /* min-height: 200px; */
`;

export const Card = styled.footer`
  font-size: 20px;
  display: flex;

  :not(:last-child) {
    border-right: 1px solid black;
  }
`;
