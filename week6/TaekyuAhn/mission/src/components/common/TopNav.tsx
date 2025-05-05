import React from "react";
import styles from "./TopNav.module.scss";

const TopNav = () => {
  return (
    <div className={styles.navBar}>
      <img src="/imgs/left-chevron.svg" alt="왼쪽 화살표 이미지" />
    </div>
  );
};

export default TopNav;
