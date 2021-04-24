import styled from "styled-components";

export const Container = styled.div`
  margin-left: 30px;
`;

export const Wrapper = styled.div`
  @media only screen and (max-width: 933px) {
    display: none;
  }
`;

export const Details = styled.div``;

export const Title = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
`;

export const Inner = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
`;

export const Icon = styled.div`
  color: var(--color-pink);
  font-size: 25px;
`;

export const Info = styled.div`
  > p {
    margin-top: 10px;
  }
  > span {
    color: var(--color-pink);
    font-weight: bold;
  }
`;
