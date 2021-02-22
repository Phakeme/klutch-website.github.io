import React from "react";
import { Hero } from "../components";

export function HeroContainer({ children }) {
  return (
    <Hero>
      <Hero.Wrapper>
        <span>Hero Showcase</span>
      </Hero.Wrapper>
      <Hero.Showcase>
        <span>Hero Showcase</span>
      </Hero.Showcase>
    </Hero>
  );
}
