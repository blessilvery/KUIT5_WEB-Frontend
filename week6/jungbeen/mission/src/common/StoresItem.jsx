import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.div`
  padding: 24px 0;
  display: flex;
  gap: 17px;
  height: 151px;
  box-sizing: border-box;
`;
const StoreImage = styled.div`
  background-color: #ececec;
  border-radius: 8px;
  width: 54px;
  height: 54px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function StoresItem({ store }) {
  return (
    <StyledLink to={`/store/${store.id}`} state={{ store: store }}>
      <Item>
        <StoreImage />
        <div>
          {"grade" in store && (
            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                marginBottom: "2px",
              }}
            >
              {store.grade}위
            </p>
          )}
          <p
            style={{ fontSize: "17px", fontWeight: "600", marginBottom: "5px" }}
          >
            {store.name}
          </p>
          <p>{`${store.rating} (${store.ratingTotal})`}</p>
          <p>{`${store.eta} ∙ 배달비 ${store.rideTip}원`}</p>
        </div>
      </Item>
    </StyledLink>
  );
}

export default StoresItem;
