import React from "react";
import Link from "next/link";
import { Wrapper } from "./styles/button";

function Button(props) {
  return (
    <Link href={props.to}>
      <Wrapper>
        <h3>{props.text}</h3>
      </Wrapper>
    </Link>
  );
}

export default Button;
