import CartCard from "../components/CartCard.jsx";
import './Cart.css'

const Cart = () => {

    return (
        <>
            <dib>
                <div className="store-cart-name">
                    샐로리 한남점
                </div>
                <div className="warning-min-order">
                    최소금액 미달
                </div>
            </dib>

            <CartCard/>
            
            <div className="add-more-cart">
                더담기+
            </div>
            
            <div className="cost-info">
                금액정보
            </div>

            <div className="nav-min-order">
                최소 주문금액 어쩌구
            </div>
            <button className="purchase-btn">12,600원 결제하기</button>
        </>
    )
}

export default Cart