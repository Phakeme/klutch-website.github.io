import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 30px 33px 30px;
  height: 48px;
  color: white;
  max-width: fit-content;
  margin: auto;
  cursor: pointer;
  background-color: var(--color-pink);

  :hover {
    background-color: var(--color-pink-dark);
  }

  > h3 {
    padding: 0;
    font-weight: 100;
    margin: 0;
  }
`;
