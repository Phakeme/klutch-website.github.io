import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  padding: 30px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?cs=srgb&dl=pexels-cottonbro-3997989.jpg&fm=jpg");
  background-size: cover;
  background-repeat: no-repeat;

  > h1 {
    padding-top: 0;
    margin-top: 0;
  }
`;

export const TextWrapper = styled.div`
  justify-content: center;
  text-align: start;
  margin: auto;
  width: 80%;
  padding-bottom: 10px;
  @media (max-width: 650px) {
    width: 90%;
  }
`;

export const H1 = styled.h1`
  color: white;
  font-size: 50px;
  letter-spacing: 1px;
  font-weight: 100;
  margin-bottom: 18px;
  @media (max-width: 650px) {
    font-size: 40px;
  }
`;

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  width: auto;
  /* background-color: white; */
`;

export const Card = styled.div`
  padding: 30px;
  height: 100%;
`;

export const Links = styled.div`
  /* background-color: blueviolet; */
`;

export const SubHeading = styled.h3`
  font-size: 28px;
  line-height: 40px;
  font-weight: 100;
  @media (max-width: 650px) {
    font-size: 18px;
  }
  /* margin-top: 0; */
`;
