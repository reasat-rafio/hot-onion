import React, { useState } from "react";
import "./Nav.css";

const Nav = ({ handleFoodState, navColor }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            style={{ color: `${navColor === "breakfast" ? "red" : "black"}` }}
            className="underline"
            href="/breakfast"
            type="button"
            onClick={(e) => {
              handleFoodState("breakfast");
              e.preventDefault();
            }}
          >
            Breakfast
          </a>
        </li>
        <li>
          <a
            style={{ color: `${navColor === "lunch" ? "red" : "black"}` }}
            className="underline"
            href="/lunch"
            type="button"
            onClick={(e) => {
              handleFoodState("lunch");
              e.preventDefault();
            }}
          >
            Lunch
          </a>
        </li>
        <li>
          <a
            style={{ color: `${navColor === "dinner" ? "red" : "black"}` }}
            className="underline"
            href="/dinner"
            type="button"
            onClick={(e) => {
              handleFoodState("dinner");
              e.preventDefault();
            }}
          >
            Dinner
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
