import styled from "styled-components"
import type {CardArray} from "./types/card.ts";

type CardPairProps = {
    num: number;
    cards: CardArray[]
    addScore: () => void
    setCard: (newCardArray: CardArray[]) => void
    cardCount: number
}

const Card = styled.div`
    width: 150px;
    height: 300px;
    border: 1px solid black;
    display: flex;
    background-color: black;
`

const OpenedCard = styled.div`
    width: 150px;
    height: 300px;
    border: 2px solid gray;
    display: flex;
    background-color: #eee;
`


const CardPair = ({num, cards, setCard, addScore, cardCount}: CardPairProps) => {

    return (
        <div>
            {
                cards[num].isCorrect || (cards[num] && cards[num].isOpened) ?
                    <OpenedCard> <img src={`public/card-image/card${num}.svg`}/> </OpenedCard> : (
                        <Card onClick={
                            () => {
                                const openedCardSet = [...cards]
                                openedCardSet[num].isOpened = true;
                                setCard(openedCardSet);

                                if (cards[num].isOpened && cards[cardCount - 1 - num].isOpened
                                    && !cards[num].isCorrect && !cards[cardCount - 1 - num].isCorrect) {
                                    addScore()
                                    cards[num].isCorrect = true;
                                    cards[cardCount - 1 - num].isCorrect = true;
                                }
                            }}>
                            {num}
                            {cards[num].isCorrect || (cards[num] && cards[num].isOpened) ? "열렸음!!" : "닫혔음."}
                        </Card>)
            }

        </div>
    )
}

export default CardPair