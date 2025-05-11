import React from "react";
import styles from "./TopBar.module.scss";

type Props = {
  correctCount: number;
};

const TopBar = ({ correctCount }: Props) => {
  return (
    <div className={styles.topbar}>
      <div>맞힌 갯수: {correctCount}</div>
    </div>
  );
};

export default TopBar;
