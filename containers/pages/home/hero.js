import React, { useState, useEffect } from "react";
import axios from "axios";
import { Hero, Button } from "../../../components/";

export function HeroContainer() {
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Hero>
      <Hero.Wrapper>
        <Hero.TextWrapper>
          <Hero.H1>{information.Headline}</Hero.H1>
          <Hero.SubHeading>{information.subHeadline}</Hero.SubHeading>
          <Button to="/procedures" text="See Procedures" />
        </Hero.TextWrapper>
      </Hero.Wrapper>
    </Hero>
  );
}
