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
  /* padding-top: 10px; */
  /* height: 100%; */
  text-align: center;
  margin: auto;
  width: 60%;
  padding-bottom: 10px;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 50px;
  letter-spacing: 1px;
  font-weight: 800;
  /* margin-top: 13px; */
  margin-bottom: 18px;
`;

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  /* min-height: 245px; */
  width: auto;
  background-color: white;
`;

export const Card = styled.div`
  padding: 30px;
  height: 100%;
  /* min-height: 245px; */
  /* background-color: #d26f8f; */
`;

export const Links = styled.div`
  background-color: blueviolet;
`;

export const SubHeading = styled.h3`
  /* background-color: blueviolet; */
  font-size: 28px;
  line-height: 40px;
  /* margin-top: 0; */
`;

export const Button = styled.div`
  padding: 10px 30px 33px 30px;
  height: 48px;
  max-width: fit-content;
  margin: auto;
  cursor: pointer;
  background-color: var(--color-pink);

  :hover {
    background-color: var(--color-pink-dark);
  }

  > h3 {
    padding: 0;
    margin: 0;
  }
`;
