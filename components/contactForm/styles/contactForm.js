import styled from "styled-components";

export const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  /* grid-gap: 30px; */
  min-height: 300px;
  background-color: #fff;
  color: #000;
  /* background-color: var(--color-pink); */
  margin-top: 70px;
`;

export const Item = styled.div`
  padding: 60px;
  span {
    color: var(--color-pink);
  }
`;

export const Image = styled.div`
  height: 100%;
  min-height: 300px;
`;

// export const Card = styled.footer`
//   font-size: 20px;
//   display: flex;

//   :not(:last-child) {
//     border-right: 1px solid black;
//   }
// `;
