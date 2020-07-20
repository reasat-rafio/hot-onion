import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Core from "./Core/Core";
import "./FoodCore.css";

const FoodCore = () => {
  const [hide, changeHide] = useState(() => {
    if (
      window.location.pathname === "/breakfast" ||
      window.location.pathname === "/lunch" ||
      window.location.pathname === "/dinner"
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <Nav />
      <Core />
      <div
        style={{ display: `${hide ? "block" : "none"}` }}
        className="core-btn-div"
      >
        <button className="core-btn">Checkout Your Food </button>
      </div>
    </div>
  );
};

export default FoodCore;
