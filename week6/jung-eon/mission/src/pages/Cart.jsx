import React from "react";
import OrderBar from "../components/OrderBar";

const Cart = () => {
  return (
    <div>
      <div className="top-screen">
        <button></button>
        <button>주문취소</button>
      </div>

      <div className="menu-cart">
        <h1>샐로리 한남점</h1>
        <h2>최소금액 미달</h2>
        <div className="menu">
          <h3>토마토 샐러드</h3>
          <h4>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</h4>
          <h5>10,600원</h5>
          <h6>1개</h6>
          <button></button>
        </div>
        <div className="plus-cart">
          <h7>더 담기 +</h7>
        </div>
        <div className="receipt"></div>
      </div>

      <div>
        <OrderBar />
      </div>
    </div>
  );
};

export default Cart;
