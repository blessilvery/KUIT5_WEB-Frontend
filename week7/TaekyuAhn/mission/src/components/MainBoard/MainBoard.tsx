import React, { useState } from "react";
import { cardData } from "../../models/Data";
import CardRow from "../CardRow/CardRow";

import styles from "./MainBoard.module.scss";
import useStore from "../../stores/countStore";

export type CardType = {
  id: number;
  name: string;
  imgPath: string;
  backImgPath: string;
};

const data = cardData;
const doubledData = [
  ...data,
  ...data.map((item) => ({
    ...item,
    id: item.id + data.length,
  })),
];

export const dataLength = doubledData.length;

const MainBoard = () => {
  const shuffledData = doubledData.sort(() => Math.random() - 0.5);
  const firstHalf = shuffledData.slice(0, shuffledData.length / 2);
  const secondHalf = shuffledData.slice(shuffledData.length / 2);
  const cardStateList = useStore((state) => state.cardStateList);
  const firstHalfStateList = cardStateList.slice(0, cardStateList.length / 2);
  const secondHalfStateList = cardStateList.slice(cardStateList.length / 2);

  return (
    <div className={styles.contents}>
      <CardRow cardArray={firstHalf} cardStateArray={firstHalfStateList} />
      <CardRow cardArray={secondHalf} cardStateArray={secondHalfStateList} />
    </div>
  );
};

export default MainBoard;
