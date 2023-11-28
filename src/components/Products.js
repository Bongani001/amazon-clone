import React from "react";
import { Link } from "react-router-dom";
import "./Products.css"
import Product from "./Product";

const Products = () => {
  return (
    <div className="products_row">
      <Product id="1" title="Seagate Portable 2TB External Hard Drive Portable HDD - USB 3.0 for
          PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)" image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg" rating="4" price="59.99" />
    </div>
  );
};

export default Products;
