import React from "react";
import Data from "../../../data/about-db.json";
import { About } from "../../../components/";

export function AboutContainer() {
  return (
    <About>
      <About.Wrapper>
        <About.ImageSection></About.ImageSection>
        <div>
          {Data.map((item, index) => (
            <div key={item.title}>
              <div key={index}>
                <h2
                  style={{ marginTop: "0", marginBottom: "40px" }}
                  key={item.title}
                >
                  {item.title}
                </h2>
                {item.subSections.map((item, index) => (
                  <About.TextSection key={index}>
                    <div>{item.icon}</div>
                    <div>
                      <h3 style={{ color: "#d26f8f" }} key={item.subTitle}>
                        {item.subTitle}
                      </h3>
                      <p>{item.body}</p>
                    </div>
                  </About.TextSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </About.Wrapper>
    </About>
  );
}
