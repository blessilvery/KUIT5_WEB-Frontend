import './StoreInfo.css'

const StoreInfo = ({storeInfo}) =>{

    const { name, rating, reviews, deliveryTime, minOrder, purMethod } = storeInfo;

    return (
        <div className="store-detail-info">
            <span className="store-detail-name">{name}</span>
            <span className="store-detail-reviews">⭐ {rating} 리뷰{reviews}</span>
            <div className="store-detail-order">
                <span className="store-detail-order-info">결제방법 {purMethod}</span>
                <span className="store-detail-order-info">최소주문 {minOrder}</span>
                <span className="store-detail-order-info">배달시간 {deliveryTime}</span>
            </div>
        </div>
    )
}

export default StoreInfo