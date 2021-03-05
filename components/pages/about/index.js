import React from "react";
import { Container } from "../../../components/global/container/";
import { Wrapper, TextSection, ImageSection } from "./styles/about";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Wrapper = function AboutWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

About.TextSection = function AboutTextSection({ children, ...restProps }) {
  return <TextSection {...restProps}>{children}</TextSection>;
};

About.ImageSection = function AboutImageSection({ children, ...restProps }) {
  return <ImageSection {...restProps}>{children}</ImageSection>;
};
