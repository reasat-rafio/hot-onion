import React from "react";
import "./Header.css";
import logo from "../../hot-onion-restaurent-resources/logo2.png";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="header">
      <div className="topOfTheHeader">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-authentication">
          <RiShoppingCartLine />
          <a type="button" href="/login">
            Login
          </a>
          <a type="button" href="/signIn" className="signIn">
            Sign in
          </a>
        </div>
      </div>

      <div className="headerPoster">
        <div className="headerInPutSection">
          <h2>Best food waiting for your belly</h2>
          <form>
            <input type="text" placeholder="Search food items" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
