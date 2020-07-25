import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
} from "../../utilities/databaseManager";
import fakeData from "../../FakeData";
import ReviewFoodOutPut from "./ReviewFoodOutPut";
import { useForm } from "react-hook-form";
import "./ReviewItem.css";
import { Link } from "react-router-dom";

const ReviewItem = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [cart, setCart] = useState([]);

  const subTotalPrice = cart.reduce(
    (total, fd) => fd.price * fd.quantity + total,
    0
  );

  const tax = parseFloat((subTotalPrice % 5).toFixed(2));

  const removeFood = (foodTitle) => {
    const newFood = cart.filter((fd) => fd.title !== foodTitle);
    setCart(newFood);
    removeFromDatabaseCart(foodTitle);
  };

  const handleOrderPalced = () => {
    setCart([]);
    processOrder();
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productTitle = Object.keys(savedCart);
    const cartProducts = productTitle.map((title) => {
      const product = fakeData.find((pd) => pd.title === title);
      product.quantity = savedCart[title];
      return product;
    });
    setCart(cartProducts);
  }, []);

  return (
    <div className="full-reviewItem">
      <div className="delivery-details">
        <h3>Edit Delivery Details</h3>

        <form>
          <input type="text" name="name" placeholder="Name" ref={register} />
          <input
            type="text"
            name="info1"
            placeholder="Road Number"
            ref={register}
          />
          <input
            type="text"
            placeholder="Flat, suite or floor"
            ref={register}
            name="info2"
          />
          <input
            type="text"
            name="info3"
            placeholder="Business Name"
            ref={register}
          />
          <input
            name="info4"
            type="text"
            placeholder="Add delivery instructor"
            ref={register}
          />
          <input type="submit" value="Save & Continue" />
        </form>
      </div>
      <div className="food-cart">
        <p>
          From <b>Gulshan Plaza Restaura GPR</b>
        </p>
        <p>Arriving in 20-30 mins</p>
        <p>107 Rd No 8</p>
        <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
          {cart.map((fd) => (
            <ReviewFoodOutPut
              removeFood={removeFood}
              key={fd.id}
              food={fd}
            ></ReviewFoodOutPut>
          ))}
        </div>
        <div className="cart-cost-details">
          <p>
            <span className="left-text">Subtotal</span>{" "}
            <span className="right-text">{subTotalPrice.toFixed(2)} $</span>
          </p>
          <p>
            <span className="left-text">Tax</span>{" "}
            <span className="right-text">{tax}$</span>
          </p>
          <p>
            <span className="left-text">Delivery fee</span>{" "}
            <span className="right-text">00$</span>
          </p>
          <p>
            <span className="left-text">Total</span>{" "}
            <span className="right-text">
              {parseFloat(subTotalPrice + tax).toFixed(2)}$
            </span>
          </p>
        </div>
        <Link style={{ textDecoration: "none" }} to="/delivery">
          <button onClick={handleOrderPalced} className="Place-Order-btn">
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewItem;
