import styled from "styled-components";

export const Inner = styled.header``;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 100px;
  color: white;
  padding: 0 30px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  @media only screen and (max-width: 600px) {
    display: none !important;
  }
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
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const NavItems = styled.ul`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-content: center;
  min-width: 423.24px;
  > li {
    cursor: pointer;
    :hover {
      background-color: var(--color-white);
      color: var(--color-pink);
    }
  }
  @media only screen and (max-width: 870px) {
    display: none;
  }
`;

export const LinkItem = styled.div`
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  :hover {
    background-color: #9c526a;
  }
`;

export const LinkItemActive = styled.div`
  padding: 15px;
  font-size: 14px;
  background-color: #d26f8f;
  text-transform: uppercase;
  height: 48px;
  :hover {
    background-color: #d26f8f;
  }
`;

export const Address = styled.div`
  display: flex;
  @media only screen and (max-width: 1200px) {
    display: none !important;
  }
`;

export const Tell = styled.div``;

export const Icons = styled.div``;
