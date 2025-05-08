import styled from "styled-components";

import backArrow from "../assets/images/back-arrow.svg";
import { Link } from "react-router-dom";

const HeaderBar = styled.div`
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  & img {
    width: 24px;
    height: 24px;
  }
`;

function Header() {
  return (
    <HeaderBar>
      <Link to={"/"}>
        <img src={backArrow} alt="back-arrow" />
      </Link>
    </HeaderBar>
  );
}

export default Header;
