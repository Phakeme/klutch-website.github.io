import styled from "styled-components";

export const Inner = styled.header`
  /* background-color: blueviolet; */
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 129px;
  color: white;
  padding: 0 30px;
  /* width: 100%; */
`;

export const SocialLinks = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const NavItems = styled.div`
  display: flex;
`;

export const LinkItem = styled.div`
  padding: 15px;
  margin-left: 15px;
  font-size: 14px;
  text-transform: uppercase;
  height: 48px;
  :hover {
    background-color: #d26f8f;
  }
`;
