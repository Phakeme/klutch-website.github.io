import styled from "styled-components";

export const Div = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(600px, 1fr)); */
  /* grid-template-columns: 2fr 1fr; */
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
  width: 100%;
  /* grid-template-columns: repeat(auto-fill, minmax(600px, 1fr)); */
  grid-template-columns: 2fr 1fr;
  margin-top: 20px;
  @media (max-width: 930px){
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 750px){
    grid-template-columns:  1fr;
  }
`;

export const Form = styled.form`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(600px, 1fr)); */
  /* grid-template-columns: 1fr 1fr; */
  /* grid-gap: 30px; */
`;

export const Inner = styled.div`
/* background-color: red; */
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 30px; */
  @media (max-width: 930px){
    grid-template-columns: 1fr;
  }
`;

export const InputArea = styled.div`
/* background-color: red; */
  display: grid;
  width: 100%;
  grid-template-columns: 1fr  1fr;
  grid-template-rows: 1fr  1fr;
  grid-gap: 30px;
  @media (max-width: 930px){
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  span {
    color: var(--color-pink);
  }
`;

export const Image = styled.div`
  height: 100%;
  min-height: 300px;
`;

export const InputField = styled.div`
  height: 50px;
  @media (max-width: 930px){
    margin-top: 0;
  }
`;

export const Textarea = styled.div`
  margin: 30px 0 30px 0;
`;

export const Error = styled.div`
  color: var(--color-pink);
`;
