import React from "react";
import styles from "./CardRow.module.scss";
import type { CardType } from "../MainBoard/MainBoard";
import CardItem from "../CardItem/CardItem";

type CardRowProps = {
  cardArray: CardType[];
  cardStateArray: boolean[];
};

const CardRow = ({ cardArray, cardStateArray }: CardRowProps) => {
  return (
    <div className={styles.contents}>
      <div className={styles.contents__row}>
        {cardArray.map((item, index) => (
          <CardItem
            key={item.id}
            name={item.name}
            imgPath={item.imgPath}
            backImgPath={item.backImgPath}
            cardState={cardStateArray[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default CardRow;
