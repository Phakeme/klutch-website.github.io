import React from "react";
import { ContainerWrapper } from "./styles/container";

export const Container = ({ children, ...restProps }) => {
  return <ContainerWrapper {...restProps}>{children}</ContainerWrapper>;
};
