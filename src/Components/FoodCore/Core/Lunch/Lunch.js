import React, { useState } from "react";
import { Link } from "react-router-dom";

const Lunch = ({ lunch, handleClickMoreInfo }) => {
  const { id, img, title, text, price } = lunch;

  return (
    <div
      onClick={() => handleClickMoreInfo(lunch)}
      className="breakfast-main card m-1 "
    >
      <Link to={`/dinner/foodView/${title}`} className="link">
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
export default Lunch;
