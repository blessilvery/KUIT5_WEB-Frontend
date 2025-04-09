import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

import plus from "./assets/plus.svg";

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <button className="new-post">
        <img src={plus} alt="plus" />
      </button>
      <BottomNav />
    </div>
  );
};

export default Home;
