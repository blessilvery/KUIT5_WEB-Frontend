import React from "react";
import styles from "./BottomActionBar.module.scss";
import Button from "./Button";

const BottomActionBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__priceArea}>
        <div className={styles.bar__priceArea__label}>총 주문금액</div>
        <div className={styles.bar__priceArea__value}>12,100원</div>
      </div>
      <div className={styles.bar__uttonArea}>
        <Button size="medium" text="주문하기" />
      </div>
    </div>
  );
};

export default BottomActionBar;
