import React from "react";
import IntroImg from "../assets/images/axe.png";
const IntroBox = () => {
  return (
    <div className="flex h-[100vh] w-full">
      <div className="">
        <p>I am shivam pandey a frontend developer</p>
      </div>
      <div>
        <img className="h-full w-full" src={IntroImg} alt="IntroUser" />
      </div>
    </div>
  );
};

export default IntroBox;
