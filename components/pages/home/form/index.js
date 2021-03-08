import React from "react";
import { Container } from "../global/container";
import { Wrapper, Image } from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Wrapper = function FormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
