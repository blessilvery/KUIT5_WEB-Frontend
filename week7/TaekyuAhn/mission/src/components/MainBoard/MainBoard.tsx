import React, { useEffect, useState } from "react";
import { cardData } from "../../models/Data";
import CardRow from "../CardRow/CardRow";

import styles from "./MainBoard.module.scss";
import useStore from "../../stores/countStore";
import { doubledData, shuffleData } from "../../utils/dataPreprocessor";

export type CardType = {
  id: number;
  name: string;
  imgPath: string;
  backImgPath: string;
};

type Props = {
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
  setNewGame: React.Dispatch<React.SetStateAction<boolean>>;
  newGame: boolean;
};

const MainBoard = ({ setNewGame, setCorrectCount, newGame }: Props) => {
  const [cardArray, setCardArray] = useState<CardType[]>([]);
  const cardStateList = useStore((state) => state.cardStateList);
  const resetClickNum = useStore((state) => state.resetClickNum);
  const clickCard = useStore((state) => state.clickCard);

  useEffect(() => {
    setCardArray(shuffleData(doubledData));
    setNewGame(false);
  }, [newGame]);

  const compareItem = () => {
    console.log("compareItem");
    const compareIdx: number[] = [];
    const updatedCardStateList = useStore.getState().cardStateList;
    updatedCardStateList.forEach((item, index) => {
      if (item === true) {
        compareIdx.push(index);
        console.log("idx:", index);
      }
    });

    if (cardArray[compareIdx[0]].name === cardArray[compareIdx[1]].name) {
      setCorrectCount((prev) => prev + 1);
      resetClickNum();
      return true;
    } else {
      // 서로 다른 카드인 경우
      resetClickNum();

      setTimeout(() => {
        compareIdx.forEach((item) => {
          clickCard(item);
        });
      }, 1000);
      return false;
    }
  };

  return (
    <div className={styles.contents}>
      <CardRow
        cardArray={cardArray}
        cardStateArray={cardStateList}
        idx={1}
        compareItem={compareItem}
      />
      <CardRow
        cardArray={cardArray}
        cardStateArray={cardStateList}
        idx={2}
        compareItem={compareItem}
      />
    </div>
  );
};

export default MainBoard;
