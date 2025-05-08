import React from "react";
import Button from "../components/Button";

const OrderBar = () => {
  return (
    <div>
      <h1>총 주문금액</h1>
      <h2>12,100원</h2>
      <Button>주문하기</Button>
    </div>
  );
};

export default OrderBar;
