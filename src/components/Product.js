import React from "react";
import "./Product.css";

const Product = ({id, title, image, rating, price}) => {
  return (
    <div className="product">
      <img
        src={image}
        alt=""
      />
      <div className="product_info">
        <p>
          {title}
        </p>
      </div>
      <div className="product_rating">
        <p>{rating}</p>
      </div>
      <p className="product_price">{price}</p>
    </div>
  );
};

export default Product;
