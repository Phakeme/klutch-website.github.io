import React from "react";
import { Container } from "../global/container/";
import { Wrapper, Showcase, Links, TextWrapper, H1, Card } from "./styles/hero";

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Wrapper = function HeroWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Hero.Showcase = function HeroShowcase({ children, ...restProps }) {
  return <Showcase {...restProps}>{children}</Showcase>;
};

Hero.Card = function HeroCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Hero.TextWrapper = function HeroTextWrapper({ children, ...restProps }) {
  return <TextWrapper {...restProps}>{children}</TextWrapper>;
};

Hero.H1 = function HeroH1({ children, ...restProps }) {
  return <H1 {...restProps}>{children}</H1>;
};

Hero.Links = function HeroLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

// const HeroSection = (props) => {
//   return (
//     <div className="container px-6 mx-6 max-w-6xl max-w-screen-xl mx-auto text-white">
//       <div className="flex justify-between p-6 items-center  flex-no-shrink  w-full h-670 bg-test">
//         <div className="w-full justify-center text-center ">
//           <h1 className="text-5xl">{props.text}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
