import React from 'react';
import marketModel from './models/MarketModels';
import Header from './components/Header';
import Content from './components/Content';
import BottomNav from "./components/BottomNav";
import "./index.css";

const Home = () => {
  return(
  <div>
    <div className="header_header">
      <Header location={marketModel.location}/>
      <Content items={marketModel.items}/>
      <BottomNav/>
    </div>

  </div>
  );
    
};

export default Home;
