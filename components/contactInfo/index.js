import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Details,
  Inner,
  Icon,
  Info,
  Grid,
} from "./styles/contactInfo";

export default function ContactInfo({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ContactInfo.Wrapper = function ContactInfoWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

ContactInfo.Inner = function ContactInfoInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

ContactInfo.Details = function ContactInfoDetails({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>;
};

ContactInfo.Title = function ContactInfoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ContactInfo.Grid = function ContactInfoGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};

ContactInfo.Icon = function ContactInfoIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

ContactInfo.Info = function ContactInfoInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
