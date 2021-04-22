import React from "react";
import { Container } from "../../../global/container";
import {
  Wrapper,
  Showcase,
  Links,
  TextWrapper,
  H1,
  Card,
  Button,
  SubHeading,
} from "./styles/hero";

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Wrapper = function HeroWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Hero.Showcase = function HeroShowcase({ children, ...restProps }) {
  return <Showcase {...restProps}>{children}</Showcase>;
};

Hero.Card = function HeroCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Hero.TextWrapper = function HeroTextWrapper({ children, ...restProps }) {
  return <TextWrapper {...restProps}>{children}</TextWrapper>;
};

Hero.H1 = function HeroH1({ children, ...restProps }) {
  return <H1 {...restProps}>{children}</H1>;
};

Hero.SubHeading = function HeroSubHeading({ children, ...restProps }) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

Hero.Links = function HeroLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};
