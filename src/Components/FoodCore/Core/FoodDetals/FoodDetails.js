import React, { useState, useEffect } from "react";
import "./FoodDetails.css";
import { useParams } from "react-router-dom";
import fakeData from "../../../../FakeData";
import { FiShoppingCart } from "react-icons/fi";
import { addToDatabaseCart } from "../../../../utilities/databaseManager";

const FoodDetails = () => {
  const { foodDetails } = useParams();
  const product = fakeData.find((pd) => pd.title === foodDetails);

  const [price, setPrice] = useState(parseFloat(product.price));
  const [newPrice, setNewPrice] = useState(price);
  const [count, setCount] = useState(1);

  const [selectedData, setSelectedDAta] = useState([]);

  const handlePLusBtn = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newPPrice = newPrice + price;
    setNewPrice(newPPrice);
  };

  const getClickedFood = (product) => {
    const newFood = [...selectedData, product];
    setSelectedDAta(newFood);
    const sameProduct = newFood.filter((pd) => pd.title === product.title);
    const count = sameProduct.length;
    addToDatabaseCart(product.title, count);
    console.log(product.quantity);
  };

  const handleMinusBtn = () => {
    const newCount = count - 1;
    setCount(newCount);
    const newPPrice = newPrice - price;
    setNewPrice(newPPrice);
  };

  return (
    <div className="FoodDetails">
      <div className="FoodDetails-inner">
        <h1>{product.title}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum fuga
          quia tempore. Incidunt, fuga rem? Modi voluptatibus tempore laborum
          porro facilis quo incidunt, impedit velit? Necessitatibus dolores
          explicabo aperiam ab? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis, maxime nemo? Enim mollitia aliquid,
          quidem est perspiciatis deleniti eius dolores.
        </p>
        <div className="FoodDetails-calculation">
          <h3>${newPrice.toFixed(2)}</h3>
          <form>
            <button type="button" onClick={handleMinusBtn}>
              -
            </button>
            <h4>{count}</h4>
            <button onClick={handlePLusBtn} type="button" className="plus">
              +
            </button>
          </form>
        </div>
        <button
          onClick={() => getClickedFood(product)}
          className="FoodDetails-icon-btn"
        >
          {" "}
          <FiShoppingCart size="20px" color="white" /> Add
        </button>
      </div>
      <div className="img-div">
        <img src={product.img} alt="" />
      </div>
    </div>
  );
};

export default FoodDetails;
