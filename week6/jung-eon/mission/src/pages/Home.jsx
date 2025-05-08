import React from "react";
import OrderBar from "../components/OrderBar";
import { Link } from "react-router-dom";
import foodcategories from "../models/foodcategories";

const Home = () => {
  return (
    <div className="screen">
      <div className="top-screen">
        <button></button>
      </div>
      <h1>오늘은 무엇을 먹을까요?</h1>
      <h2>한남중앙로 40길 (한남 빌리지)(으)로 배달</h2>

      <div className="category-grid">
        {foodcategories.map((category) => (
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

export default Home;
