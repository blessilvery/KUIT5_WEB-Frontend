import React from "react";
import styles from "./TopNav.module.scss";

type Props = {
  text?: string;
  clickHandler?: () => void;
};

const TopNav = ({ text, clickHandler }: Props) => {
  return (
    <div className={styles.navBar}>
      <img src="/imgs/left-chevron.svg" alt="왼쪽 화살표 이미지" />
      <div onClick={clickHandler} className={styles.navBar__text}>
        {text}
      </div>
    </div>
  );
};

export default TopNav;
