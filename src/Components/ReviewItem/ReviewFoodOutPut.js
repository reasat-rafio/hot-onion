import React, { useState } from "react";
import { FcRemoveImage } from "react-icons/fc";

const ReviewFoodOutPut = ({ food, removeFood }) => {
  const { title, quantity, img, price, id } = food;

  const [cost, setPrice] = useState(parseFloat(price));
  const [newPrice, setNewPrice] = useState(cost);
  const [count, setCount] = useState(quantity);

  const handlePLusBtn = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newPPrice = newPrice + price;
    setNewPrice(newPPrice);
  };
  console.log(food);

  const handleMinusBtn = () => {
    const newCount = count - 1;
    setCount(newCount);
    const newPPrice = newPrice - price;
    setNewPrice(newPPrice);
  };

  return (
    <div className="cart-details">
      <img src={img} alt="" />
      <div className="cart-details-price">
        <p>{title}</p>
        <p>${price * count}</p>
        <small>Delivery free</small>
      </div>
      <div className="btn-details-price">
        <button onClick={handleMinusBtn}>-</button>
        <p>{count}</p>
        <button onClick={handlePLusBtn}>+</button>
      </div>
      <FcRemoveImage
        onClick={() => removeFood(title)}
        size="35px"
        className="details-price-icon"
      />
    </div>
  );
};

export default ReviewFoodOutPut;
