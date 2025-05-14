import {useEffect, useState} from 'react'
import './App.css'
import CardPair from './CardPair'
import styled from "styled-components";
import type {CardArray} from "./types/card.ts";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const NavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`

const CardGame = styled.div`
    display: grid;
    align-items: center;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    margin-left: 100px;
    margin-right: 100px;
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

const Reward = styled.div`
    width: 700px;
    height: 400px;
    line-height: 200px;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    margin: 50px;
    border: none;
    border-radius: 5px;
    background: antiquewhite;
    
    position: absolute;
    top: 8%;
    left: 30%;
    z-index: 1;
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
        if (score < maxScore)
            setScore(score + 1);
        else if (score === maxScore)
            setScore(0);
        else
            setScore(0);
    }

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

    return (
        <Container>
            <NavBar><h3>맞힌 개수 : {score}/{maxScore}</h3></NavBar>
            {score === maxScore ? <Reward><h2>정답입니다!</h2></Reward> : null}
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
        </Container>
    )
}

export default App
