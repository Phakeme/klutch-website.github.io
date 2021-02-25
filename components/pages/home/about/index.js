import React from "react";
import { Container } from "../../../global/container/";
import { Wrapper, Item } from "./styles/about";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Wrapper = function AboutWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

About.Item = function AboutItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
