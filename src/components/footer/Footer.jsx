import React from "react";
import "./footer.scss";
import footerlogp from "../../assets/footer.png";
import chiziq from "../../assets/chiziq.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrap container">
        <img src={chiziq} alt="" />
        <div className="footer__logo">
          <div>
            <img src={footerlogp} alt="" />
          </div>
          <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <ul className="footer__collection">
          <li className="footer__item">
            <p>Discovery</p>
          </li>
          <li className="footer__item">
            <a href="">New season</a>
          </li>
          <li className="footer__item">
            <a href="">Most searched</a>
          </li>
          <li className="footer__item">
            <a href="">Most selled</a>
          </li>
        </ul>
        <ul className="footer__collection">
          <li className="footer__item">
            <p>About</p>
          </li>
          <li className="footer__item">
            <a href="">Help</a>
          </li>
          <li className="footer__item">
            <a href="">shopping</a>
          </li>
          <li className="footer__item">
            <a href="">Affiliate</a>
          </li>
        </ul>
        <ul className="footer__collection">
          <li className="footer__item">
            <p>Info</p>
          </li>
          <li className="footer__item">
            <a href="">Contact us</a>
          </li>
          <li className="footer__item">
            <a href="">Privacy Policies</a>
          </li>
          <li className="footer__item">
            <a href="">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
