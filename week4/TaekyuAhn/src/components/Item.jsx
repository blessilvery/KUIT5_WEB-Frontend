import React from "react";
import styles from "../index.module.scss";

function Item() {
  return (
    <div className={styles.itemBox}>
      <div className={styles.imageArea}>
        <img className={styles.imageArea__image} src="./imgs/image1.png" alt="" />
      </div>
      <div className={styles.contentArea}>
        <div className={styles.contentArea__info}>
          <div className={styles.contentArea__info__title}>에어팟프로</div>
          <div className={styles.contentArea__info__location}>군자동 &#183; 3일전</div>
          <div className={styles.contentArea__info__price}>100원</div>
        </div>
        <div className={styles.contentArea__reaction}>
          <div className={styles.rowSet}>
            <img src="./imgs/comments.svg" alt="" />
            <div>3</div>
          </div>
          <div className={styles.rowSet}>
            <img src="./imgs/heart.svg" alt="" />
            <div>11</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
