import CartCard from "../components/CartCard.jsx";
import './Cart.css'

function Seperator() {
    return (
        <div style={{width: '390px', height: '16px', background: '#F2F4F6'}}></div>
    )
}

const Cart = () => {

    return (
        <>
            <Seperator/>
            <div className="store-cart-header">
                <div className="store-cart-name">
                    샐로리 한남점
                </div>
                <div className="warning-min-order">
                    최소금액 미달 🚫
                </div>
            </div>

            <CartCard/>
            
            <div className="add-more-cart">
                더담기 +
            </div>
            <Seperator/>
            <div className="cost-info-set">
                <div className="cost-order">
                    <div className="cost-item">
                        주문금액
                    </div>
                    <div className="cost-amount">
                        10,600원
                    </div>
                </div>

                <div className="cost-order">
                    <div className="cost-item">
                        배달요금
                    </div>
                    <div className="cost-amount">
                        2,000원
                    </div>
                </div>

                <div className="total-cost-order">
                    <div className="total-cost-item">
                        총 결제금액
                    </div>
                    <div className="total-cost-amount">
                        12,600원
                    </div>
                </div>

            </div>

            <div className="nav-min-order">
                최소 주문금액 13,000원
            </div>
            <button className="purchase-btn">12,600원 결제하기</button>
        </>
    )
}

export default Cart