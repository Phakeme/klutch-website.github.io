import React from "react";
import { Container } from "../global/container";
import {
  Wrapper,
  Inner,
  Div,
  Form,
  Item,
  Image,
  InputField,
  Textarea,
  Error,
} from "./styles/contactForm";

export default function ContactForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ContactForm.Wrapper = function ContactFormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

ContactForm.Inner = function ContactFormInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

ContactForm.Form = function ContactFormForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

ContactForm.Div = function ContactFormDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

ContactForm.Item = function ContactFormItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

ContactForm.Image = function ContactFormItemImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

ContactForm.InputField = function ContactFormItemInputField({
  children,
  ...restProps
}) {
  return <InputField {...restProps}>{children}</InputField>;
};

ContactForm.Error = function ContactFormItemError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

ContactForm.Textarea = function ContactFormItemTextarea({
  children,
  ...restProps
}) {
  return <Textarea {...restProps}>{children}</Textarea>;
};
