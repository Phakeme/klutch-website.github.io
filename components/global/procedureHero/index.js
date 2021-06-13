import React from 'react'
import { Container } from "../container/";
import { Wrapper, Inner, Section, TextBox, H1, P, Image } from './styles/procedureHero'

export default function ProceHero({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

ProceHero.Wrapper = function ProceHeroWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

ProceHero.Inner = function ProceHeroInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>;
};

ProceHero.Section = function ProceHeroSection({ children, ...restProps }) {
    return <Section {...restProps}>{children}</Section>;
};

ProceHero.TextBox = function ProceHeroTextBox({ children, ...restProps }) {
    return <TextBox {...restProps}>{children}</TextBox>;
};

ProceHero.H1 = function ProceHeroH1({ children, ...restProps }) {
    return <H1 {...restProps}>{children}</H1>;
};

ProceHero.P = function ProceHeroP({ children, ...restProps }) {
    return <P {...restProps}>{children}</P>;
};

ProceHero.Image = function ProceHeroImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};