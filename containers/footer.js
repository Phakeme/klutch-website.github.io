import React from "react";
import { Footer, Hero } from "../components";

export function FooterContainer({ children }) {
  return (
    <Footer>
      <Footer.Wrapper>
        <Hero.Showcase>
          <Hero.Card>
            <p>Find Us On Google Maps</p>
            <h3>Link Here</h3>
          </Hero.Card>
          <Hero.Card>
            <p>Find Us On Google Maps</p>
            <h3>Link Here</h3>
          </Hero.Card>
          <Hero.Card>
            <p>Find Us On Google Maps</p>
            <h3>Link Here</h3>
          </Hero.Card>
        </Hero.Showcase>
      </Footer.Wrapper>
    </Footer>
  );
}
