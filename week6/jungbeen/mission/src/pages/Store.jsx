import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Header from "../common/Header";
import OrderBar from "../common/OrderBar";

const Main = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  min-width: 412px;
  max-width: 1080px;
  padding: 0 24px;
`;
const StoreInfo = styled.div`
  border-bottom: 1px solid #e5e8eb;
  margin: 0 -28px;
  padding: 0 28px;
  & p {
    color: #4e5968;
    line-height: 33px;
  }
`;
const Content = styled.div``;

function Store() {
  const location = useLocation();
  const { store } = location.state || {};

  const renderItems = () => {};

  return (
    <Main>
      <Header />
      <StoreInfo>
        <p style={{ fontWeight: "700", fontSize: "26px" }}>{store.name}</p>
        <p>
          {store.rating} 리뷰{store.ratingTotal.toLocaleString()}
        </p>
        <p>결제방법 {store.paymethod}</p>
        <p>최소주문 {store.minOrder.toLocaleString()}원</p>
        <p>배달시간 {store.eta}</p>
      </StoreInfo>
      <Content>{renderItems()}</Content>
      <OrderBar total={12100} />
    </Main>
  );
}

export default Store;
