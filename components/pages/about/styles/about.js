import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-gap: 30px;
  min-height: 425px;
  background-color: var(--color-white);
  color: var(--color-black);
  padding: 60px;
  @media (max-width: 870px){
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const TextSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: justify;
  grid-gap: 10px;

  > div {
    > h3 {
      margin-top: 0;
    }
  }
  @media (max-width: 870px){
    padding: 0 30px ;
  }
`;

export const ImageSection = styled.div`
  height: 600px;
  background: url("https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?cs=srgb&dl=pexels-anthony-shkraba-5214949.jpg&fm=jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;
