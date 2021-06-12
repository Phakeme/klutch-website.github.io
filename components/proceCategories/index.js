import React from "react";
import { Container } from "../global/container";
import { Wrapper, Inner, Card, Text, H4 } from "./styles/categories";

export default function Categories({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Categories.Wrapper = function CategoriesWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Categories.Inner = function CategoriesInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Categories.Card = function CategoriesCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Categories.Text = function CategoriesText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Categories.H4 = function CategoriesH4({ children, ...restProps }) {
  return <H4 {...restProps}>{children}</H4>;
};

Categories.Icon = function CategoriesIcon(props) {
  return (
    <div style={{
      fontSize: "2rem",
      color: "#f584a9"
    }}>{props.icon}</div>
  );
};
