import React from "react";
import { AboutSummary, Button, Divider } from "../../../components";

export function AboutSummaryContainer({ children }) {
  return (
    <Divider>
      <AboutSummary>
        <AboutSummary.Wrapper>
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
            <h2>Dr Kajal Lutchminarian</h2>
            <p>
              Dr Lutch is a CMSA certified Plastic and Reconstructive Surgeon
              who has also obtained her Masters of Medicine in Plastic and
              Reconstructive Surgery at the University of Kwa-Zulu Natal . She
              graduated at the top of her class at Medical school achieving
              distinctions in most rotations, including Surgery. Dr. Lutch is
              the founder of Klutch Plastic Surgery in Durban, South Africa and
              is known for her mastery of surgical skill, warmth and ability to
              put patients at ease.
            </p>
            <p>
              After her 8 years in medical school, internship and community
              service, 3 years as an ICU trained ENT, General Surgical and
              Plastic Surgical Medical officer and 4 years as a Registrar in
              Plastic and Reconstructive Surgery, she completed her Fellowship
              exams in Plastic and Reconstructive Surgery and spent a year
              thereafter in state service before entering into full-time private
              practice.
            </p>
            <Button to="/about" text="Read more.." />
          </AboutSummary.Item>
        </AboutSummary.Wrapper>
      </AboutSummary>
    </Divider>
  );
}
