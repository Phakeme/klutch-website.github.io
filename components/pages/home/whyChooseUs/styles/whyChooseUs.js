import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 300px;
  background-color: var(--color-white);
  color: var(--color-black);
  padding: 60px;
  @media (max-width: 1230px) {
    border-top: 1px solid var(--color-black);
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 80px;
`;

export const Content = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 700px){
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  padding: 10px;
`;

export const GridItemInner = styled.div`
  display: flex;
`;

export const Info = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

export const Card = styled.div`
  display: flex;
`;
