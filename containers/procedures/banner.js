import React from "react";
import ReconstructiveData from "./components/ReconstructiveData";
import NonSurgicalData from "./components/NonSurgicalData";
import SurgicalData from "./components/SurgicalData";
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
        <ReconstructiveData />
      </Banner.BodyReconstructive>

      <Banner.BodyCosmetics>
        <NonSurgicalData />
        <SurgicalData />
      </Banner.BodyCosmetics>
    </Banner>
  );
}
