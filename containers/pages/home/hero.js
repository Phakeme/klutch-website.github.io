import React from "react";
import Link from "next/link";
import { Hero } from "../../../components/";

export function HeroContainer() {
  return (
    <Hero>
      <Hero.Wrapper>
        <Hero.TextWrapper>
          <Hero.H1>Top Female Plastic Surgeon in Durban </Hero.H1>
          <Hero.SubHeading>
            Plastic, Reconstruction and Aesthetic Surgery. <br />
            Committment to excellence and attention to details.
          </Hero.SubHeading>
          <Link href="/procedures">
            <Hero.Button>
              <a>
                <h3>SEE PROCEDURES</h3>
              </a>
            </Hero.Button>
          </Link>
        </Hero.TextWrapper>
      </Hero.Wrapper>
    </Hero>
  );
}
