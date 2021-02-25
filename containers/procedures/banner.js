import React from "react";
import { Banner } from "../../components/";
import { FaArrowRight } from "react-icons/fa";

export function BannerContainer({ children }) {
  return (
    <Banner>
      <Banner.Wrapper>
        <Banner.Inner>
          <Banner.Title>
            Procedures <FaArrowRight size="1rem" />
          </Banner.Title>
        </Banner.Inner>
      </Banner.Wrapper>
    </Banner>
  );
}
