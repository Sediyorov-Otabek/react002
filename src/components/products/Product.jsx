import React from "react";
import "./Product.scss";
import img1 from "../../assets/image 1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/image 7.png";

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
  {
    id: 5,
    img: img5,
    title: "Spiced Mint",
    price: "9.99$",
  },
  {
    id: 6,
    img: img6,
    title: "Spiced Mint",
    price: "9.99$",
  },
  {
    id: 7,
    img: img7,
    title: "Spiced Mint",
    price: "9.99$",
  },
  {
    id: 8,
    img: img3,
    title: "Spiced Mint",
    price: "9.99$",
  },
];

const Product = () => {
  return (
    <section className="container">
      <div className="product__wrap">
        <b className="product__title">Product</b>
        <p>Order it for you or for your beloved ones </p>
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
    </section>
  );
};

export default Product;
