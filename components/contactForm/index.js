import React from "react";
import { Container } from "../global/container";
import { Wrapper, Item, Image } from "./styles/contactForm";

export default function ContactForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ContactForm.Wrapper = function ContactFormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

ContactForm.Item = function ContactFormItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

ContactForm.Image = function ContactFormItemImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
