import React from "react";
import "./Breakfast.css";
import { Link } from "react-router-dom";

const Breakfast = ({ breakfast, handleClickMoreInfo }) => {
  const { id, img, title, text, price } = breakfast;

  return (
    <div
      onClick={() => handleClickMoreInfo(breakfast)}
      className="breakfast-main card m-1 "
    >
      <Link to={`/breakfast/foodView/${title}`} className="link">
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

export default Breakfast;
