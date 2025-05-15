import {useEffect, useState} from "react";
import type {CardArray} from "../types/card.ts";

export const createCardPair = (cardCount:number):CardArray[] => {
    return Array.from({length: cardCount}, (_, i): CardArray => ({
        index: i, isOpened: false, isCorrect: false
    }))
}

const useGame = (cardCount:number) => {
    const [cardArray, setCardArray] = useState(createCardPair(cardCount));

    useEffect(() => {
        const mismatchOpened = cardArray.filter((card) => card.isOpened)
        if (mismatchOpened.length === 2) {
            console.log(mismatchOpened)
            const [misCard1, misCard2] = mismatchOpened;
            const newCardArray = cardArray.map((card) => {
                if (card.index === misCard1.index || card.index === misCard2.index) {
                    return ({...card, isOpened: false});
                } else
                    return ({...card})
            })
            const waitSeconds = new Promise(resolve => {
                setTimeout(resolve, 3000)
            })
            console.log("짝 안맞는 카드 원상 복구")
            console.log(cardArray)
            waitSeconds.then(() => {
                setCardArray(newCardArray)
            }, () => {
                alert('대기 로직 문제 발생')
            })
            console.log(cardArray)
        }
    }, [cardArray])

    return { cardArray , setCardArray}
};

export default useGame;

