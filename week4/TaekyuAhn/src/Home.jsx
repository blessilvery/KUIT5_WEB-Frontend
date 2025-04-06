import React from "react";
import styles from "./index.module.scss";
import Item from "./components/Item";
import marketModel from "./models/MarketModel";

const Header = () => {
  const { location } = marketModel;
  return (
    <div className={styles.headerSection}>
      <div className={styles.locationBox}>
        <div className={styles.locationBox__text}>{location}</div>
        <img src="./imgs/down-chevron.svg" alt="" />
      </div>
      <div className={styles.utilBox}>
        <img className={styles.utilBox__icon} src="./imgs/magnifying-glass.svg" alt="" />
        <img className={styles.utilBox__icon} src="./imgs/three-lines.svg" alt="" />
        <img className={styles.utilBox__icon} src="./imgs/bell.svg" alt="" />
      </div>
    </div>
  );
};

const Content = () => {
  const { items } = marketModel;
  return (
    <div className={styles.contentSection}>
      {items.map((item, index) => (item.isSold ? "" : <Item key={index} {...item}></Item>))}
    </div>
  );
};

const BottomNav = () => {};

const Home = () => {
  return (
    <div className={styles.contents}>
      <Header></Header>
      <Content></Content>
      <BottomNav />
    </div>
  );
};

export default Home;
