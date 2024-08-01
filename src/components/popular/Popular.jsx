import "./Popular.scss";
import React from "react";
import img1 from "../../assets/image 1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
const card = [
  {
    id: 1,
    img: img1,
    title: "Spiced Mint",
    price: "9.99$",
  },
  {
    id: 2,
    img: img2,
    title: "Spiced Mint",
    price: "9.99$",
  },
  {
    id: 3,
    img: img3,
    title: "Spiced Mint",
    price: "9.99$",
  },
  {
    id: 4,
    img: img4,
    title: "Spiced Mint",
    price: "9.99$",
  },
];

const Popular = () => {
  return (
    <div className="container">
      <div className="popular wrap">
        <b className="popular__title">Popular</b>
        <p>Our top selling product that you may like</p>
        <div className="product__card__wrapp">
          {card?.map((el) => {
            return (
              <div key={el.id} className="card__product">
                <div>
                  <img src={el.img} alt="" />
                </div>
                <div className="card__title">
                  <p>{el.title}</p>
                  <p className="price">{el.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
