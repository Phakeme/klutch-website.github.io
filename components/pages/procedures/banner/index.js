import React, { useState, createContext, useContext } from "react";

const ToggleContext = createContext();

import { Container } from "../../../global/container/";
import {
  Title,
  Button,
  ButtonFrame,
  Wrapper,
  BodyReconstructive,
  BodyCosmetics,
} from "./styles/banner";

export default function Banner({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState("cosmetics");
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Container {...restProps}>{children}</Container>;
    </ToggleContext.Provider>
  );
}

Banner.Wrapper = function BannerWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Banner.Title = function BannerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Banner.ButtonFrame = function BannerButtonFrame({ children, ...restProps }) {
  return <ButtonFrame {...restProps}>{children}</ButtonFrame>;
};

Banner.Button = function BannerButton({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Button
      onClick={() => setToggleShow((toggleShow) => (toggleShow = "cosmetics"))}
      {...restProps}
    >
      {children}
    </Button>
  );
};

Banner.Button2 = function BannerButton2({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Button
      onClick={() =>
        setToggleShow((toggleShow) => (toggleShow = "reconstructive"))
      }
      {...restProps}
    >
      {children}
    </Button>
  );
};

Banner.BodyCosmetics = function BannerBodyCosmetics({
  children,
  ...restProps
}) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return toggleShow === "cosmetics" ? (
    <BodyCosmetics {...restProps}>{children}</BodyCosmetics>
  ) : null;
};

Banner.BodyReconstructive = function BannerBodyReconstructive({
  children,
  ...restProps
}) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return toggleShow === "reconstructive" ? (
    <BodyReconstructive {...restProps}>{children}</BodyReconstructive>
  ) : null;
};
