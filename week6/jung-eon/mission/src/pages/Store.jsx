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
      <p>⭐4.9 리뷰3,919</p>
      <div className="menu-top">
        <p>결제방법 토스결제만 현장결제 안됨</p>
        <p>최소주문 13,000원</p>
        <p>배달시간 약 15-25분</p>
        <div />
        <p>샐러드</p>
        <div className="menu">
          {menucategories.map((item) => (
            <Link key={item.name} to={item.path} className="menu-item">
              <div className="menu-header">
                <strong>{item.name}</strong>
                {item.isBest && <span className="badge"> BEST</span>}
              </div>
              <p className="desc">{item.desc}</p>
              <p className="price">{item.price.toLocaleString()}</p>
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
