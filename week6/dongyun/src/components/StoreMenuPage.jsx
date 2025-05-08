import DeliveryLocationHeaderBase from "./DeliveryLocationHeaderBase.jsx";
import {storeList, saladMenu} from "../models/stores.js";
import StoreRankingCard from "./StoreRankingCard.jsx";
import StoreMenuCard from "./StoreMenuCard.jsx";
import StoreInfo from "./StoreInfo.jsx";

const StoreMenuPage = ({storeName}) =>{

    return (
        <div>
            <StoreInfo storeInfo={storeList[0]}/>
            <div
                style={{color: '#6B7684',
                    fontSize: '17px',
                    fontFamily: 'Pretendard',
                    fontWeight: '600',
                    wordWrap: 'break-word',
                    padding: '26px 321px 11px 24px'}}>
                        샐러드
            </div>
            {
                saladMenu.map((salad) => {
                    console.log(salad)
                    return (
                        <StoreMenuCard menu={salad} key={salad.name}/>
                    )
                })
            }

        </div>
    )
}

export default StoreMenuPage