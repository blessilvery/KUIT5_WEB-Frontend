import React from "react";
import OrderBar from "../components/OrderBar";
import { Link } from "react-router-dom";
import marketcategories from "../models/marketcategories";

const Stores = () => {
  return (
    <div>
      <div className="top-screen">
        <button></button>
      </div>
      <h1>샐러드</h1>

      <div className="market">
        {marketcategories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="category-item"
          >
            <div>{category.name}</div>
          </Link>
        ))}
      </div>
      <div>
        <OrderBar />
      </div>
    </div>
  );
};

export default Stores;
