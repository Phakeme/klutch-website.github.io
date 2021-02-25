import React from "react";
import { Container } from "../../../global/container/";
import {
  Wrapper,
  Content,
  Title,
  Grid,
  GridItem,
  GridItemInner,
  Icon,
  Card,
  Info,
} from "./styles/whyChooseUs";

export default function WhyChooseUs({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

WhyChooseUs.Wrapper = function WhyChooseUsWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

WhyChooseUs.Title = function WhyChooseUsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

WhyChooseUs.Content = function WhyChooseUsContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

WhyChooseUs.Grid = function WhyChooseUsGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};

WhyChooseUs.GridItem = function WhyChooseUsGridItem({
  children,
  ...restProps
}) {
  return <GridItem {...restProps}>{children}</GridItem>;
};

WhyChooseUs.GridItemInner = function WhyChooseUsGridItemInner({
  children,
  ...restProps
}) {
  return <GridItemInner {...restProps}>{children}</GridItemInner>;
};

WhyChooseUs.Info = function WhyChooseUsInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

WhyChooseUs.Icon = function WhyChooseUsIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

WhyChooseUs.Card = function WhyChooseUsCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};
