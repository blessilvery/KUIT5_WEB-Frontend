import styled from "styled-components"
import type {CardArray} from "./types/card.ts";

type CardPairProps = {
    num: number;
    cards: CardArray[]
    addScore: () => void
    setCard: (newCardArray: CardArray[]) => CardArray[]
    cardCount: number
}

const Card = styled.div`
    width: 150px;
    height: 300px;
    border: 1px solid black;
    display: flex;
`

const CardPair = ({num, cards, setCard, addScore, cardCount}: CardPairProps) => {

    return (
        <div>
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
            </Card>
        </div>
    )
}

export default CardPair