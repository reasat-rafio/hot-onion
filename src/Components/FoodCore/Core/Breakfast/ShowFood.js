import React from "react";
import "./Breakfast.css";
import { Link } from "react-router-dom";

const ShowFood = ({ foodItems, handleClickMoreInfo }) => {
  const { id, img, title, text, price } = foodItems;

  return (
    <div className="breakfast-main card m-1 ">
      <Link to={`/foodView/${title}`} className="link">
        <img className="card-img-top" src={img} alt="" />
        <div className="card-body">
          <p className="card-title">{title}</p>
          <p className="card-text">{text}</p>
          <p>{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ShowFood;
