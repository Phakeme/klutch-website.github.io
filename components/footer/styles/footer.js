import styled from "styled-components";

export const Wrapper = styled.footer`
  /* height: 200px; */
  background-color: #fff;
  color: #000;
  /* background-color: var(--color-pink); */
  margin-top: 70px;
  padding: 30px;
  width: 100%;
`;

export const Inner = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  width: auto;
  /* background-color: red; */
`;

export const Card = styled.div`
  font-size: 20px;
  display: flex;
  height: 100%;

  :not(:last-child) {
    border-right: 1px solid black;
  }
`;

// export const Card = styled.div`
//   padding: 30px;
//   height: 100%;
//   /* min-height: 245px; */
//   background-color: #d26f8f;
// `;
