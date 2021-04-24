import React from "react";
import { Container } from "../../../global/container/";
import { Wrapper, Item } from "./styles/aboutSummary";

export default function AboutSummary({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

AboutSummary.Wrapper = function AboutSummaryWrapper({
  children,
  ...restProps
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

AboutSummary.Item = function AboutSummaryItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
