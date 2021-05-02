import React from "react";
import Data from "../../../data/about-db.json"
import { AboutSummary, Button } from "../../../components";

export function AboutSummaryContainer() {

  let data = Data[0].subSections.slice(0, 2).map((item, index) => (
    <div key={index}>
      <AboutSummary.Text>{item.body}</AboutSummary.Text>
    </div>
  ))

  return (
    <AboutSummary >
      <AboutSummary.Wrapper className="margin">
        <AboutSummary.Item
          style={{
            backgroundImage:
              "url(" +
              "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?cs=srgb&dl=pexels-anthony-shkraba-5214949.jpg&fm=jpg" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></AboutSummary.Item>
        <AboutSummary.Item style={{ backgroundColor: "#fff" }}>
          <h2>{Data[0].name}</h2>
          {data}
          <Button to="/about" text="Read more..." />
        </AboutSummary.Item>
      </AboutSummary.Wrapper>
    </AboutSummary>
  );
}
