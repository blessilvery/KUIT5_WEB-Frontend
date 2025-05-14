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
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    background-color: black;
    color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const OpenedCard = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-color: #eee;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardContainer = styled.div`
    width: 150px;
    height: 300px;
    //background: #eee;
    color: black;
    perspective: 1000px;
`

const CardWrapper = styled.div< { isFlipped: boolean }>`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    transform:${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`


const CardPair = ({num, cards, setCard, addScore, cardCount}: CardPairProps) => {

    return (
        <CardContainer >
            <CardWrapper isFlipped={cards[num].isOpened}>
                    <OpenedCard> <img src={`/card-image/card${num}.svg`} alt="opened"/> </OpenedCard>
                        <Card className={`Card ${cards[num].isOpened}`} onClick={
                            () => {
                                const openedCardSet = [...cards]
                                openedCardSet[num].isOpened = true;
                                if (openedCardSet[num].isOpened && openedCardSet[cardCount - 1 - num].isOpened) {
                                    addScore()
                                    openedCardSet[num].isCorrect = true;
                                    openedCardSet[cardCount - 1 - num].isCorrect = true;
                                }
                                setCard(openedCardSet);
                            }}>
                            {num}
                            {cards[num].isCorrect || (cards[num] && cards[num].isOpened) ? "열렸음!!" : "닫혔음."}
                        </Card>
            </CardWrapper>
        </CardContainer>
    )
}

export default CardPair