import React from 'react';
import styles from './index.css';

import Header from './components/Header'
import Content from './components/Content'
import BottomNav from './components/BottomNav'

const Home = () => {

  return (
    <div className='body'>
      <Header></Header>
      <Content></Content>
      <BottomNav></BottomNav>
    </div>
  );

};

export default Home;
