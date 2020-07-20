import React from "react";
import { Link } from "react-router-dom";

const Dinner = ({ dinner, handleClickMoreInfo }) => {
  const { id, img, title, text, price } = dinner;

  return (
    <div
      onClick={() => handleClickMoreInfo(dinner)}
      className="breakfast-main card m-1 "
    >
      <Link to={`/lunch/foodView/${title}`} className="link">
        {" "}
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

export default Dinner;
