import styled from "styled-components";

import Button from "./Button";

const Bar = styled.div``;

const FixedButton = styled(Button)`
  position: absolute;
  right: 24px;
  top: 19px;
`;

function OrderBar({ total = 0, className }) {
  return (
    <Bar className={className}>
      <p style={{ fontSize: "15px", marginBottom: "5px", color: "#6B7684" }}>
        총 주문금액
      </p>
      <p style={{ fontSize: "17px" }}>{total.toLocaleString()}원</p>
      <FixedButton value="주문하기" />
    </Bar>
  );
}
export default OrderBar;
