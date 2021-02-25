import React from "react";
import { About } from "../components/";

export function AboutContainer({ children }) {
  return (
    <About>
      <About.Wrapper>
        <About.Item
          style={{
            backgroundImage:
              "url(" +
              "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?cs=srgb&dl=pexels-anthony-shkraba-5214949.jpg&fm=jpg" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></About.Item>
        <About.Item style={{ backgroundColor: "#fff" }}>
          <h2>Dr Kajal Lutchminarian</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            with the release of Letraset sheets containing Lorem Ipsum passages,
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2>Read more...</h2>
        </About.Item>
      </About.Wrapper>
    </About>
  );
}
