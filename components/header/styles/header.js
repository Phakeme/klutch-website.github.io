import styled from "styled-components";

export const Inner = styled.header``;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 129px;
  color: white;
  padding: 0 30px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const SocialDetails = styled.div`
  color: var(--color-black);
  font-size: 13px;
  display: flex;

  > div {
    margin-right: 20px;
    display: flex;
    justify-content: center;

    align-items: center;
    > span {
      margin-left: 10px;
    }
  }
`;

export const Logo = styled.img`
  width: 350px;
`;

export const NavItems = styled.ul`
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
