import styled from "styled-components";

export const Div = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(600px, 1fr)); */
  grid-template-columns: 2fr 1fr;
  padding: 60px;
  width: 100%;
  min-height: 300px;
  /* background-color: #fff; */
  color: #000;
  background-color: var(--color-white);

  span {
    color: var(--color-pink);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(600px, 1fr)); */
  grid-template-columns: 2fr 1fr;
  /* padding: 60px; */
  /* width: 100%; */
  /* min-height: 300px; */
  /* background-color: #fff; */
  /* color: #000; */
  /* background-color: var(--color-white); */
  /* margin-top: 70px; */
`;

export const Form = styled.form`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(600px, 1fr)); */
  /* grid-template-columns: 1fr 1fr; */
  /* grid-gap: 30px; */
  /* background-color: red; */
`;

export const Inner = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(600px, 1fr)); */
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export const Item = styled.div`
  /* background-color: red; */
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
