import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="top-screen">
        <button onClick={() => navigate(-1)} className="back-button">
          <img src="/images/categories/back.svg" alt="뒤로가기" />
        </button>
        <button>주문취소</button>
      </div>

      <div className="menu-cart">
        <h1>샐로리 한남점</h1>
        <p>최소금액 미달</p>
        <div className="menu">
          <img src="/images/categories/Frame.svg" />
          <p>토마토 샐러드</p>
          <p>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</p>
          <p>10,600원</p>
          <p>1개</p>
          <button></button>
        </div>
        <div className="plus-cart">
          <p>더 담기 +</p>
        </div>
        <div className="receipt">
          <div className="receipt-bar">
            <p>주문금액</p>
            <p>10,600원</p>
          </div>
          <div className="receipt-bar">
            <p>배달요금</p>
            <p>2,000원</p>
          </div>
          <div className="receipt-last-bar">
            <p>총 결제금액</p>
            <p>12,600원</p>
          </div>
          <p>최소 주문금액 13,000원</p>
          <Button>12,600원 결제하기</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
