import {useState} from 'react'
import './App.css'
import CardPair from './CardPair'
import styled from "styled-components";
import type {CardArray} from "./types/card.ts";

const CardGame = styled.div`
    display: grid;
    align-items: center;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
`


function createCardPair(cardCount: number):CardArray[] {
    return Array.from({length: cardCount}, (_, i): CardArray => ({
        index: i, isOpened: false
    }))
}

function resetCardPair(){

}

function App() {

    const cardCount = 10;
    const maxScore = 5;
    const [score, setScore] = useState(0);

    const [numArray, setNumArray] = useState(Array.from({length:cardCount}, (_, i)=>i));
    console.log(numArray)
    const [cardArray, setCardArray] = useState(createCardPair(cardCount));

    const addScore = (): void => {
        if (score <= maxScore)
            setScore(score + 1)
        else
            setScore(0)
    }

    return (
        <div>
            <span>{score}</span>
            <CardGame>
                {
                    numArray.map((num) => {
                        return <CardPair key={num} num={num} cards={cardArray} setCard={setCardArray} addScore={addScore}/>
                    })
                }
            </CardGame>
            <button onClick={() => {
                resetCardPair()
            }}>Start/Rest Cards
            </button>
        </div>
    )
}

export default App
