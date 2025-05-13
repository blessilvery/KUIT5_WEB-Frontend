import {useEffect, useState} from 'react'
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
        index: i, isOpened: false, isCorrect: false
    }))
}

function getRandomIntInclusive(min:number, max:number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 최댓값도 포함, 최솟값도 포함
}


function App() {

    const cardCount = 10;
    const maxScore = 5;
    const [score, setScore] = useState(0);
    const [numArray, setNumArray] = useState(Array.from({length:cardCount}, (_, i)=>i));
    const [cardArray, setCardArray] = useState(createCardPair(cardCount));

    const addScore = (): void => {
        if (score <= maxScore)
            setScore(score + 1)
        else
            setScore(0)
    }

    useEffect(() => {
        let flag = 0;
        cardArray.map((card)=>{
            if(flag === 2) {
                flag = 0;
                console.log(cardArray)
                const newCardArray = cardArray.map((card)=> ({
                    ...card, isOpened:false
                }))
                console.log(newCardArray);
                setCardArray(newCardArray);
            }

            if(card.isOpened)
                 flag++;
        })
    }, [cardArray])

    return (
        <div>
            <span>{score}</span>
            <CardGame>
                {
                    numArray.map((num) => {
                        return <CardPair
                            key={num}
                            num={num}
                            cards={cardArray}
                            setCard={setCardArray}
                            addScore={addScore} cardCount={cardCount}/>
                    })
                }
            </CardGame>
            <button onClick={() => {
                const newArray = [...numArray];
                newArray.sort(()=> getRandomIntInclusive(-1,1))
                setNumArray(newArray);
                setCardArray(createCardPair(cardCount));
                setScore(0);
            }}>Start/Rest Cards
            </button>
        </div>
    )
}

export default App
