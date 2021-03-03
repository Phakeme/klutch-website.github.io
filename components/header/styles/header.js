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

export const NavItems = styled.ul`
  /* background-color: blue; */
  width: fit-content;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const LinkItem = styled.li`
  padding: 15px;
  align-items: center;
  margin-left: 15px;
  font-size: 14px;
  text-transform: uppercase;
  /* height: 48px; */
  :hover {
    background-color: #d26f8f;
  }
`;

export const LinkItemActive = styled.div`
  padding: 15px;
  margin-left: 15px;
  font-size: 14px;
  background-color: #d26f8f;
  text-transform: uppercase;
  height: 48px;
  :hover {
    background-color: #d26f8f;
  }
`;
