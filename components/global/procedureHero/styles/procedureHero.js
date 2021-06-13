import styled from "styled-components";

export const Wrapper = styled.main`
height: 450px;
background-color: var(--color-white);
color: var(--color-black);
`;

export const Inner = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 100%;
`

export const Section = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`


export const TextBox = styled.div`
  padding: 0 0 0 60px;
`

export const H1 = styled.h1`
  font-size: 50px;
  font-weight: 500;
`

export const P = styled.p`
  font-size: 20px;
  font-weight: 300;
`

export const Image = styled.img`
  max-height: 450px;
  width: auto;
  object-fit: 'contain'
`