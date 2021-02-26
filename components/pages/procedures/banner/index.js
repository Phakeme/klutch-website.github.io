import React, { useState, createContext, useContext } from "react";

const ToggleContext = createContext();

import { Container } from "../../../global/container/";
import { Title, Button, ButtonFrame, Wrapper } from "./styles/banner";

export default function Banner({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Banner.Wrapper = function BannerWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Banner.Title = function BannerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Banner.ButtonFrame = function BannerButtonFrame({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <ButtonFrame {...restProps}>{children}</ButtonFrame>
    </ToggleContext.Provider>
  );
};

Banner.Button = function BannerButton({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Button
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
    </Button>
  );
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
