import styled from "styled-components";

export const Wrapper = styled.main`
  height: 425px;
  padding: 30px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("/walter-otto-PT70CT6mATQ-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TextWrapper = styled.div`
  padding-top: 70px;
  height: 100%;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 44px;
  letter-spacing: 1px;
  font-weight: 400;
`;

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  min-height: 245px;
  width: auto;
  /* background-color: #d26f8f; */
`;

export const Card = styled.div`
  padding: 30px;
  height: 100%;
  /* min-height: 245px; */
  background-color: #d26f8f;
`;

export const Links = styled.div`
  background-color: blueviolet;
`;
