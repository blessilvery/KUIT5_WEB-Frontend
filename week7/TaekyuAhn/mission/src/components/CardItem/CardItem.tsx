import React, { useState } from "react";
import styles from "./CardItem.module.scss";
import useStore from "../../stores/countStore";

type CardProps = {
  name: string;
  imgPath: string;
  backImgPath: string;
  cardState: boolean;
  index: number;
  compareItem: () => boolean;
};

const CardItem = ({ name, imgPath, backImgPath, cardState, index, compareItem }: CardProps) => {
  const clickNum = useStore((state) => state.clickNum);
  const clickCard = useStore((state) => state.clickCard);
  const addClickNum = useStore((state) => state.addClickNum);

  const clickHandler = () => {
    addClickNum();
    clickCard(index);
    const updatedClickNum = useStore.getState().clickNum;
    // console.log("click handler");
    // console.log(updatedClickNum);
    if (updatedClickNum === 2) {
      compareItem();
    }
  };

  return (
    <div className={styles.contents} onClick={clickHandler}>
      <div className={styles.contents__title}>{cardState ? name : ""}</div>
      <img className={styles.contents__img} src={cardState ? imgPath : backImgPath} alt={name} />
    </div>
  );
};

export default CardItem;
