import React from "react";
import "./Home.css";
import marketModel from "./models/MarketModel.js";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

const { items } = marketModel;

const Home = () => {
  return (
    <>
      <Header />
      <section className="list-body">
        {items.map((item) =>
          item.isSold ? <Content item={item} key={item.id} /> : null
        )}
      </section>
      <BottomNav />
    </>
  );
};

export default Home;
