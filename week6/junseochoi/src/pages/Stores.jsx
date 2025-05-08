import React from "react";
import * as S from "./Stores.styles";
import BottomOrderBar from "../components/BottomOrderBar";
import Title from "../components/Title";
import left_chevron from "../img/left_chevron.svg";

const Stores = () => {
  return (
    <>
      <S.Header>
        <img src={left_chevron} alt="뒤로가기" width="24px" height="24px" />
      </S.Header>
      <Title value="샐러드" />
      <BottomOrderBar />
    </>
  );
};

export default Stores;
