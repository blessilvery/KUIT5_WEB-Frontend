import React from "react";
import styled from "styled-components";

const Button = ({ value, width, height }) => {
  return (
    <StyledButton $width={width} $height={height}>
      <ButtonText>{value}</ButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #3182f6;
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
`;

const ButtonText = styled.span`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default Button;
