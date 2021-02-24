import styled from "styled-components";

export const Wrapper = styled.div`
  height: 425px;
  padding: 30px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?cs=srgb&dl=pexels-cottonbro-3997989.jpg&fm=jpg");
  background-size: cover;
  /* background-position: 0px -10px; */
  background-repeat: no-repeat;
`;

export const TextWrapper = styled.div`
  padding-top: 10px;
  height: 100%;
  width: 50%;
  /* background-color: red; */
`;

export const H1 = styled.h1`
  color: white;
  font-size: 70px;
  letter-spacing: 1px;
  font-weight: 800;
  margin-top: 13px;
  margin-bottom: 18px;
`;

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* min-height: 245px; */
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

export const SubHeading = styled.h3`
  /* background-color: blueviolet; */
  font-size: 28px;
  margin-top: 0;
`;
