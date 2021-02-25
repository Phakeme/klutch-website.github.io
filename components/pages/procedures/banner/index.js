import React from "react";

import { Container } from "../../../global/container/";
import { Title, Inner, Wrapper } from "./styles/banner";

export default function Banner({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Banner.Wrapper = function BannerWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Banner.Title = function BannerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Banner.Inner = function BannerInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

// Banner.Nav = function BannerNav({ children, ...restProps }) {
//   return <Nav {...restProps}>{children}</Nav>;
// };

// Banner.Logo = function BannerLogo({ children, ...restProps }) {
//   return <Logo {...restProps}>{children}</Logo>;
// };

// Banner.NavItems = function BannerNavItems({ children, ...restProps }) {
//   return <NavItems {...restProps}>{children}</NavItems>;
// };

// Banner.LinkItem = function BannerLinkItem({ children }) {
//   return <LinkItem>{children}</LinkItem>;
// };
