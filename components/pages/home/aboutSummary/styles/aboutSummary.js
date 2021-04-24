import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  /* grid-template-rows: repeat(1fr, 1fr, 1fr); */
  /* min-height: 646px; */
  //margin: 60px 0;
  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

export const Item = styled.div`
  padding: 60px;
  width: 50%;
  min-height: 500px;
  color: black;
  /* background-color: red !important; */
  @media (max-width: 850px) {
    width: 100%;
  }
`;
