import "./Clean.scss";
import React from "react";
import cleanig from "../../assets/eeeeee.png";
import cleancheec from "../../assets/checc.png";
const check = [
  {
    id: 1,
    img: cleancheec,
    title: "Eco-sustainable:All recyclable materials, 0% CO2 emissions",
  },
  {
    id: 2,
    img: cleancheec,
    title: "Hyphoallergenic: 100% natural, human friendly ingredients ",
  },
  {
    id: 3,
    img: cleancheec,
    title: "Handmade: All candles are craftly made with love.",
  },
  {
    id: 4,
    img: cleancheec,
    title: "Long burning: No more waste. Created for last long.",
  },
];
const Clean = () => {
  return (
    <section className="clean">
      <div className="clean__wrap container">
        <div className="clean__descrpt">
          <b className="calean__title">Clean and fragrant soy wax</b>
          <p className="price">Clean and fragrant soy wax</p>
          <div className="title__wrap">
            {check?.map((el) => {
              return (
                <div key={el.id} className="titlechec">
                  <div className="ttt">
                    <img src={el.img} alt="" />
                  </div>
                  <p>{el.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cleanimg">
          <img src={cleanig} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clean;
