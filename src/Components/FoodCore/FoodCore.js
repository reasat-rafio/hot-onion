import React, { useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import "./FoodCore.css";
import fakeData from "../../FakeData";
import ShowFood from "./Core/Breakfast/ShowFood";
import { getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";
import WhyYouChooseUs from "../WhyYouChooseUs/WhyYouChooseUs";

const FoodCore = () => {
  const [hide, changeHide] = useState(() => {
    if (window.location.pathname !== "") {
      return true;
    } else {
      return false;
    }
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productTitles = Object.keys(savedCart);

    const cartProducts = productTitles.map((title) => {
      const product = fakeData.find((pd) => pd.title === title);
      product.quantity = savedCart[title];
      return product;
    });
    setCart(cartProducts);
  }, []);

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
        <Link style={{ textDecoration: "none" }} to="/review">
          <button disabled={!cart.length} className="core-btn">
            Checkout Your Food{" "}
          </button>
        </Link>
      </div>
      <div>
        <WhyYouChooseUs />
      </div>
    </div>
  );
};

export default FoodCore;
