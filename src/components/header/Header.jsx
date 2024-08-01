import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import navicon from "../../assets/Profile.png";
import naviconn from "../../assets/Cart.png";

const Header = () => {
  return (
    <header className="container">
      <nav className="nav">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className="nav__collection">
          <li className="nav__item">
            <a href="">
              <select name="" id="">
                <option value="">Discovery</option>
              </select>
            </a>
          </li>
          <li className="nav__item">
            <a href="">About</a>
          </li>
          <li className="nav__item">
            <a href="">Contact us</a>
          </li>
        </ul>
        <div className="nav__icons">
          <div>
            <img src={navicon} alt="" />
          </div>
          <div>
            <img src={naviconn} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
