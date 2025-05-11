import React, { useEffect, useRef, useState } from "react";
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

export const matchingIdx: number[] = [];

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
  const resetCardState = useStore((state) => state.resetCardState);

  useEffect(() => {
    setTimeout(() => {
      setCardArray(shuffleData(doubledData));
      resetCardState();
      setNewGame(false);
    }, 3000);
  }, [newGame]);

  const compareItem = () => {
    const [a, b] = matchingIdx;
    // const updatedCardStateList = useStore.getState().cardStateList;
    // updatedCardStateList.forEach((item, index) => {
    //   if (item === true && matchingIdx[index]) {
    //     compareIdx.push(index);
    //     console.log("idx:", index);
    //   }
    // });

    if (cardArray[a].name === cardArray[b].name) {
      // 서로 같은 카드인 경우
      setCorrectCount((prev) => prev + 1);
      resetClickNum();
      matchingIdx.length = 0;
      return true;
    } else {
      // 서로 다른 카드인 경우
      resetClickNum();

      setTimeout(() => {
        matchingIdx.forEach((item) => {
          clickCard(item);
        });
        matchingIdx.length = 0;
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
