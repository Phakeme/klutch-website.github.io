import React from "react";
import Data from '../../../data/branding-copy-db.json'
import { Hero, Button } from "../../../components/";

export function HeroContainer() {
  return (
    <Hero>
      <Hero.Wrapper>
        <Hero.TextWrapper>
          <Hero.H1>{Data.copy.Headline}</Hero.H1>
          <Hero.SubHeading>{Data.copy.subHeadline}</Hero.SubHeading>
          <Button to="/procedures" text="See Procedures" />
        </Hero.TextWrapper>
      </Hero.Wrapper>
    </Hero>
  );
}
