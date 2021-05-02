import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

export const Item = styled.div`
  padding: 60px;
  width: 50%;
  min-height: 500px;
  color: black;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Text = styled.p`
text-align: justify;
`;
