import "./Coment.scss";
import React from "react";
import star from "../../assets/Stars.png";
import comimg from "../../assets/img11.png";
import comimgg from "../../assets/img12.png";
import comimggg from "../../assets/bg.png";
const coment = [
  {
    id: 1,
    img: comimg,
    name: "Luisa",
    star: star,
    title: " “I love it! No more air fresheners”",
  },
  {
    id: 2,
    img: comimgg,
    name: "Edoardo",
    star: star,
    title: "“Raccomended for everyone”",
  },
  {
    id: 2,
    img: comimggg,
    name: "Mart",
    star: star,
    title: "“Looks very natural, the smell is awesome”",
  },
];
const Coment = () => {
  return (
    <section className="comment">
      <div className="comment__wrap container">
        <b className="comment___itle">Testimonials</b>
        <p>Some quotes from our happy customers</p>
        <div className="comcard__wrap">
          {coment?.map((el) => {
            return (
              <div className="comcard">
                <div className="comcard__img">
                  <img src={el.img} alt="" />
                </div>
                <div className="comcard__star">
                  <img src={el.star} alt="" />
                </div>
                <b>{el.title}</b>
                <p>{el.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Coment;
