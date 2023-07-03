import React from "react";
import hero from "../images/hero.jpg";
import "./Header.css";

function Hero() {
  return (
    <div className="hero	">
      <img className="hero-img" src={hero} alt="" />
    </div>
  );
}

export default Hero;
