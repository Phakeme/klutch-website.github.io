import React from "react";
import { Hero } from "../components";

export function HeroContainer({ children }) {
  return (
    <Hero>
      <Hero.Wrapper>
        <Hero.TextWrapper>
          <Hero.H1>Natural Beauty Enhanced</Hero.H1>
          <p>
            treatments, surgical, and non-surgical, <br />
            including cosmetic and reconstructive and non-surgical.
          </p>
        </Hero.TextWrapper>
      </Hero.Wrapper>
      <Hero.Showcase>
        <Hero.Card>
          <h3>Hero Showcase</h3>
          <p>
            Click below to view all our available treatments, surgical, and
            non-surgical, including cosmetic and reconstructive.
          </p>
          <h3>Link Here</h3>
        </Hero.Card>
        <Hero.Card style={{ backgroundColor: "#f584a9" }}>
          <h3>Hero Showcase</h3>
          <p>
            Click below to view all our available treatments, surgical, and
            non-surgical, including cosmetic and reconstructive.
          </p>
          <h3>Link Here</h3>
        </Hero.Card>
        <Hero.Card>
          <h3>Hero Showcase</h3>
          <p>
            Click below to view all our available treatments, surgical, and
            non-surgical, including cosmetic and reconstructive.
          </p>
          <h3>Link Here</h3>
        </Hero.Card>
      </Hero.Showcase>
    </Hero>
  );
}
