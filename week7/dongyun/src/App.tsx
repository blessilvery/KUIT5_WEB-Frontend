import {useState} from 'react'
import CardPair from './CardPair'
import * as S from "./App.styled.tsx"
import useGame from "./hooks/useGame.ts";
import {createCardPair} from "./hooks/useGame.ts";

function App() {
    const cardCount = 10;
    const maxScore = 5;
    const [score, setScore] = useState(0);
    const [numArray, setNumArray] = useState(Array.from({length: cardCount}, (_, i) => i));
    const {cardArray, setCardArray} = useGame(cardCount)

    const addScore = (): void => {
        if (score < maxScore)
            setScore(score + 1);
        else if (score === maxScore)
            setScore(0);
        else
            setScore(0);
    }

    const getRandomIntInclusive = (min: number, max: number)=> {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 최댓값도 포함, 최솟값도 포함
    }

    const handleResetBtn = () => {
        const newArray = [...numArray];
        newArray.sort(() => getRandomIntInclusive(-1, 1))
        setNumArray(newArray);
        setCardArray(createCardPair(cardCount));
        setScore(0);
    }

    return (
        <S.Container>
            <S.NavBar><h3>맞힌 개수 : {score}/{maxScore}</h3></S.NavBar>
            {score === maxScore ? <S.Reward><h2>정답입니다!</h2></S.Reward> : null}
            <S.CardGame>
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
            </S.CardGame>
            <S.NavBar>
                <S.ResetBtn onClick={handleResetBtn}>
                    Start/Rest Cards
                </S.ResetBtn>
            </S.NavBar>
        </S.Container>
    )
}

export default App
