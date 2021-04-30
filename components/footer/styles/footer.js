import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: #fff;
  color: #000;
  padding: 30px;
  width: 100%;
`;

export const Inner = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  width: auto;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;