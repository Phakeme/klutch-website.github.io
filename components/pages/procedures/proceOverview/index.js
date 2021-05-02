// import { ProceOverview } from "components/";
import React from "react";
import { Container } from "../../../global/container/";
import { Wrapper, Item, Text } from "./styles/proceOverview";

export default function ProceOverview({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

ProceOverview.Wrapper = function ProceOverviewWrapper({
    children,
    ...restProps
}) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

