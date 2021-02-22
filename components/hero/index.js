import React from "react";

const HeroSection = (props) => {
  return (
    <div className="container px-6 mx-6 max-w-6xl max-w-screen-xl mx-auto text-white">
      <div className="flex justify-between p-6 items-center  flex-no-shrink  w-full h-670 bg-test">
        <div className="w-full justify-center text-center ">
          <h1 className="text-5xl">{props.text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
