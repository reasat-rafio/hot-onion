import React, { useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import "./FoodCore.css";
import fakeData from "../../FakeData";
import ShowFood from "./Core/Breakfast/ShowFood";

const FoodCore = () => {
  const [hide, changeHide] = useState(() => {
    if (window.location.pathname !== "") {
      return true;
    } else {
      return false;
    }
  });
  const data = fakeData;
  const showOffData = data.filter((food) => food.category === "breakfast");

  const [rawData, setData] = useState(data);
  const [foodState, setFoodState] = useState(showOffData);
  const [navColor, setNavColor] = useState();

  const handleFoodState = (e) => {
    setFoodState(rawData.filter((food) => food.category === e));
    setNavColor(e);
  };

  return (
    <div>
      <Nav navColor={navColor} handleFoodState={handleFoodState} />

      <div className="food-Container">
        <div className="meals">
          {foodState && (
            <div className="breakfast-section row row-cols-1 row-cols-md-4 ">
              {foodState.map((bk) => (
                <ShowFood key={bk.id} foodItems={bk} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        style={{ display: `${hide ? "block" : "block"}` }}
        className="core-btn-div"
      >
        <button className="core-btn">Checkout Your Food </button>
      </div>
    </div>
  );
};

export default FoodCore;
