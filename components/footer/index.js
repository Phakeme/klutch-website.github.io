import React from "react";
import { Container } from "../global/container";
import { Wrapper, Inner, Card, Text, H4 } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Inner = function FooterInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Footer.Card = function FooterCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.H4 = function FooterH4({ children, ...restProps }) {
  return <H4 {...restProps}>{children}</H4>;
};
