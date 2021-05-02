import React from "react";
import { Container } from "../../../global/container/";
import { Wrapper, Item, TextBox } from "./styles/procedures";

export default function ProceHero({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

ProceHero.Wrapper = function ProceHeroWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

ProceHero.TextBox = function ProceHeroTextBox({ children, ...restProps }) {
    return <TextBox {...restProps}>{children}</TextBox>;
};

