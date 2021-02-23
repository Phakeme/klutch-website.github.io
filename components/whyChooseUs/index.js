import React from "react";
import { Container } from "../global/container";
import { Wrapper } from "./styles/whyChooseUs";

export default function WhyChooseUs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

WhyChooseUs.Wrapper = function WhyChooseUsWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
