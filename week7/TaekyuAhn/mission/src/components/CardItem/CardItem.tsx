import React, { useState } from "react";
import styles from "./CardItem.module.scss";
import useStore from "../../stores/countStore";

type CardProps = {
  name: string;
  imgPath: string;
  backImgPath: string;
  cardState: boolean;
  index: number;
};

const CardItem = ({ name, imgPath, backImgPath, cardState, index }: CardProps) => {
  const [flip, setFlip] = useState(false);
  const clickNum = useStore((state) => state.clickNum);
  const clickCard = useStore((state) => state.clickCard);
  const addClickNum = useStore((state) => state.addClickNum);

  const clickHandler = () => {
    if (clickNum >= 2) {
    } else {
      setFlip(true);
      clickCard(index);
    }
  };

  return (
    <div className={styles.contents} onClick={clickHandler}>
      <div className={styles.contents__title}>{flip ? name : ""}</div>
      <img className={styles.contents__img} src={flip ? imgPath : backImgPath} alt={name} />
    </div>
  );
};

export default CardItem;
