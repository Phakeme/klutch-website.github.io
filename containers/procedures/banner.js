import React from "react";
import reconstructiveData from "../../data/reconstructive.json";
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
        {reconstructiveData.map((item) => (
          <div id={item.id}>
            <p>{item.title}</p>
            <ul>
              {item.types.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Banner.BodyReconstructive>
      <Banner.BodyCosmetics>
        <p>BodyCosmetics</p>
      </Banner.BodyCosmetics>
    </Banner>
  );
}
