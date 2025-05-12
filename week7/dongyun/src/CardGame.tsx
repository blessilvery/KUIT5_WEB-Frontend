import CardPair from "./CardPair";

type CardGameProps = {
    addScore: () => void
    posArray: number[]
}

const CardGame = ({addScore}:CardGameProps) => {
    const pos :[number, number]= [1,2];

    return(
        <div>
            <CardPair pos = {pos} addScore={addScore}/>
        </div>
    )
}

export default CardGame