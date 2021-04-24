import React from "react";
import { Hero, Button } from "../../../components/";

export function HeroContainer() {
  return (
    <Hero>
      <Hero.Wrapper>
        <Hero.TextWrapper>
          <Hero.H1>Top Female Plastic Surgeon in Durban </Hero.H1>
          <Hero.SubHeading>
            Plastic, Reconstruction and Aesthetic Surgery. Committment to
            excellence and attention to details.
          </Hero.SubHeading>
          <Button to="/procedures" text="See Procedures" />
        </Hero.TextWrapper>
      </Hero.Wrapper>
    </Hero>
  );
}
