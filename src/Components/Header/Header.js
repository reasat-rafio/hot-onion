import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../hot-onion-restaurent-resources/logo2.png";
import { RiShoppingCartLine } from "react-icons/ri";
import { useAuth } from "../firebase";

const Header = () => {
  const { user, logOut } = useAuth();
  const logOutHandler = () => {
    logOut();
  };
  return (
    <div className="header">
      <div className="topOfTheHeader">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="header-authentication">
          <RiShoppingCartLine />
          {user ? (
            <a href="/" onClick={logOutHandler} type="/">
              {" "}
              LogOut
            </a>
          ) : (
            <a type="button" href="/login">
              Login
            </a>
          )}

          <a type="button" href="/signIn" className="signIn">
            Create Account
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
