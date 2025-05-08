import React from "react";
import Button from "../components/Button";
import OrderBar from "../components/OrderBar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import menucategories from "../models/menucategories";
import { Back, Top, StoreTitle, StoreSubTitle } from "../styles/StoresStyles";
import { Title } from "../styles/HomeStyles";
import {
  StoreEval,
  TopMenu,
  TextInfo,
  TextInfo1,
  Line,
  Salad,
  Menu,
  ItemImg,
} from "../styles/StoreStyles";

const Store = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();

  if (storeId !== "1") {
    return <h2>404: 이 가게는 존재하지 않아요</h2>;
  }

  return (
    <div className="screen">
      <Top>
        <Back onClick={() => navigate(-1)} className="back-button">
          <img src="/images/categories/back.svg" alt="뒤로가기" />
        </Back>
      </Top>
      <TopMenu>
        <Title>샐로리 한남점</Title>
        <StoreEval>⭐4.9 리뷰3,919</StoreEval>
        <TextInfo>
          <TextInfo1>결제방법 토스결제만 현장결제 안됨</TextInfo1>
          <TextInfo1>최소주문 13,000원</TextInfo1>
          <TextInfo1>배달시간 약 15-25분</TextInfo1>
          <Line></Line>
        </TextInfo>
      </TopMenu>
      <Salad>샐러드</Salad>
      <Menu>
        {menucategories.map((item) => (
          <Link key={item.name} to={item.path} className="menu-item">
            <img src={item.img} alt={item.name} />
            <StoreTitle>
              <strong>{item.name}</strong>
              {item.isBest && <span className="badge"> BEST</span>}
            </StoreTitle>
            <StoreSubTitle>{item.desc}</StoreSubTitle>
            <StoreSubTitle>{item.price.toLocaleString()}</StoreSubTitle>
            <div style={{ position: "absolute", right: "24px", top: "38px" }}>
              <Button>담기</Button>
            </div>
          </Link>
        ))}
      </Menu>
      <div>
        <OrderBar />
      </div>
    </div>
  );
};

export default Store;
