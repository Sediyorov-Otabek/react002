import React from "react";
import "./Hero.scss";
import heroimg from "../../assets/bg-image.png";
import ot from "../../assets/ot.png";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__wrap">
        <img src={heroimg} alt="" />
        <div className="hero__descrp">
          <div>
            <img className="ot" src={ot} alt="" />
          </div>
          <b className="deschero"> The nature candle</b>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments{" "}
          </p>
          <button className="nav__btn">Discovery our collection</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
