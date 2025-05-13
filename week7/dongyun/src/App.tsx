import {useEffect, useState} from 'react'
import './App.css'
import CardPair from './CardPair'
import styled from "styled-components";
import type {CardArray} from "./types/card.ts";

const NavBar = styled.div`
    display: flex;
    justify-content: center;
    font-size: 24px;
`

const CardGame = styled.div`
    display: grid;
    align-items: center;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
`
const ResetBtn = styled.button`
    width: 300px;
    height: 100px;
    text-align: center;
    font-size: 24px;
    margin: 50px;
    border: none;
    border-radius: 5px;
`

function createCardPair(cardCount: number): CardArray[] {
    return Array.from({length: cardCount}, (_, i): CardArray => ({
        index: i, isOpened: false, isCorrect: false
    }))
}

function getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 최댓값도 포함, 최솟값도 포함
}


function App() {

    const cardCount = 10;
    const maxScore = 5;
    const [score, setScore] = useState(0);
    const [numArray, setNumArray] = useState(Array.from({length: cardCount}, (_, i) => i));
    const [cardArray, setCardArray] = useState(createCardPair(cardCount));

    const addScore = (): void => {
        if (score <= maxScore)
            setScore(score + 1)
        else
            setScore(0)
    }

    useEffect(() => {

        if(cardArray.filter( (card)=> card.isOpened).length === 2){
            const newCardArray = cardArray.map((card) => ({
                ...card, isOpened: false
            }))

            const waitSeconds = new Promise(resolve => {
                setTimeout(resolve, 3000)
            })
            console.log("짝 안맞는 카드 원상 복구")
            waitSeconds.then(()=>{setCardArray(newCardArray)}, ()=>{alert('대기 로직 문제 발생')})
        }


    }, [cardArray])

    return (
        <div>
            <NavBar><h3>Score : {score}</h3></NavBar>
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
            <NavBar>
                <ResetBtn onClick={() => {
                    const newArray = [...numArray];
                    newArray.sort(() => getRandomIntInclusive(-1, 1))
                    setNumArray(newArray);
                    setCardArray(createCardPair(cardCount));
                    setScore(0);
                }}>Start/Rest Cards
                </ResetBtn>
            </NavBar>
        </div>
    )
}

export default App
