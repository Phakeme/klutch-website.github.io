import React from "react";
import { Container } from "../global/container/index";
import {
  Nav,
  SocialLinks,
  Inner,
  Logo,
  LinkItem,
  Address,
  Tell,
  Icons,
  NavItems,
  SocialDetails,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Inner = function HeaderInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Header.SocialLinks = function HeaderSocialLinks({ children, ...restProps }) {
  return <SocialLinks {...restProps}>{children}</SocialLinks>;
};

Header.SocialDetails = function HeaderSocialDetails({
  children,
  ...restProps
}) {
  return <SocialDetails {...restProps}>{children}</SocialDetails>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.NavItems = function HeaderNavItems({ children, ...restProps }) {
  return <NavItems {...restProps}>{children}</NavItems>;
};

Header.LinkItem = function HeaderLinkItem({ children }) {
  return <LinkItem>{children}</LinkItem>;
};

Header.Address = function HeaderAddress({ children }) {
  return <Address>{children}</Address>;
};

Header.Tell = function HeaderTell({ children }) {
  return <Tell>{children}</Tell>;
};

Header.Icons = function HeaderIcons({ children }) {
  return <Icons>{children}</Icons>;
};
