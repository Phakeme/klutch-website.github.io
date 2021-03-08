import React from "react";
import { Container } from "../global/container";
import { Wrapper, Inner, Card } from "./styles/contactForm";

export default function ContactForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ContactForm.Wrapper = function ContactFormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

ContactForm.Inner = function ContactFormInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

ContactForm.Card = function ContactFormCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};
