import React from "react";
import StoreInfoBox from "../../components/store/StoreInfoBox";
import TopNav from "../../components/common/TopNav";
import MenuList from "../../components/store/MenuList";
import styles from "./index.module.scss";

const index = () => {
  return (
    <div className={styles.contents}>
      <TopNav />
      <StoreInfoBox />
      <MenuList />
    </div>
  );
};

export default index;
