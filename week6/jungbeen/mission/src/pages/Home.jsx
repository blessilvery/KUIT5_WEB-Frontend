import React from "react";
import styled from "styled-components";
import { category } from "../models/stores";
import GridButton from "../common/GridButton";
import OrderBar from "../common/OrderBar";

const Main = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  min-width: 412px;
  max-width: 1080px;
  padding: 0 24px;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 26px;
`;
const TitleContainer = styled.div`
  margin-bottom: 74px;
`;
const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 9px;
  max-width: 100%;
  margin: 0 auto;
`;
const FixedOrderBar = styled(OrderBar)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px 16px 0 0;
  padding: 16px 24px;
  height: 111px;
  box-sizing: border-box;
`;

function Home() {
  const renderButtons = () =>
    category.map((c, idx) => (
      <GridButton key={idx} cateName={c.name} imgSrc={c.imgName} />
    ));
  return (
    <Main>
      <TitleContainer>
        <Title style={{ marginBottom: "13px" }}>오늘은 무엇을 먹을까요?</Title>
        <p>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</p>
      </TitleContainer>
      <CategoryGrid>{renderButtons()}</CategoryGrid>
      <FixedOrderBar total={12100} />
    </Main>
  );
}

export default Home;
