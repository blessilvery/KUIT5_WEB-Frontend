import styled from "styled-components";

const Button = styled.button`
  background-color: #fafafb;
  height: 74px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 8px;
`;

function GridButton({ cateName, imgSrc = null }) {
  return (
    <Button>
      <img src={imgSrc} alt={imgSrc} />
      <span>{cateName}</span>
    </Button>
  );
}

export default GridButton;
