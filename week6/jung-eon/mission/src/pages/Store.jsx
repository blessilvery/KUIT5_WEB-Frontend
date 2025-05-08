import React from "react";
import Button from "../components/Button";
import OrderBar from "../components/OrderBar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import menucategories from "../models/menucategories";

const Store = () => {
  const { storeId } = useParams();

  if (storeId !== "1") {
    return <h2>404: 이 가게는 존재하지 않아요</h2>;
  }

  return (
    <div className="screen">
      <div className="top-screen">
        <button></button>
      </div>
      <h1>샐로리 한남점</h1>
      <h2>⭐4.9 리뷰3,919</h2>
      <div className="menu-top">
        <h3>결제방법 토스결제만 현장결제 안됨</h3>
        <h4>최소주문 13,000원</h4>
        <h5>배달시간 약 15-25분</h5>
        <div />
        <h6>샐러드</h6>
        <div className="menu">
          {menucategories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="category-item"
            >
              <div>{category.name}</div>
              <Button>담기</Button>
            </Link>
          ))}
        </div>
        <div>
          <OrderBar />
        </div>
      </div>
    </div>
  );
};

export default Store;
