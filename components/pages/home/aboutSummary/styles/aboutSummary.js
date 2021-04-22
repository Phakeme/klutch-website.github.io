import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  min-height: 646px;
  margin: 60px 0;
`;

export const Item = styled.div`
  padding: 60px;
  min-height: 646px;
  color: black;
`;
