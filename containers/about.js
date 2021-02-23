import React from "react";
import { About } from "../components";

export function AboutContainer({ children }) {
  return (
    <About>
      <About.Wrapper>
        <span>About Showcase</span>
      </About.Wrapper>
    </About>
  );
}
