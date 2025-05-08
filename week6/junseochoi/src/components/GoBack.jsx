import styled from "styled-components";
import left_chevron from "../img/left_chevron.svg";

const GoBack = () => {
  return (
    <GoBackStyle>
      <img src={left_chevron} alt="뒤로가기" width="24px" height="24px" />
    </GoBackStyle>
  );
};

const GoBackStyle = styled.div`
  width: 100%;
  height: 41px;
  padding: 10px 356px 10px 10px;
`;

export default GoBack;
