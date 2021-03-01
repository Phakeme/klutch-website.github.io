import React from "react";
import { Banner } from "../../components/";
import { FaArrowRight } from "react-icons/fa";

export function BannerContainer({ children }) {
  return (
    <Banner>
      <Banner.Wrapper>
        <Banner.Title>
          Procedures <FaArrowRight size="1rem" />
        </Banner.Title>
        <Banner.ButtonFrame>
          <Banner.Button>Cosmetic</Banner.Button>
          <Banner.Button2>Reconstructive</Banner.Button2>
        </Banner.ButtonFrame>
      </Banner.Wrapper>

      <Banner.BodyReconstructive>
        <p>BodyReconstructive</p>
      </Banner.BodyReconstructive>
      <Banner.BodyCosmetics>
        <p>BodyCosmetics</p>
      </Banner.BodyCosmetics>
    </Banner>
  );
}
