import React from 'react';
import styles from '../index.css';


import plus from '../assets/plus.svg'

import nav_chat from '../assets/nav_chat.svg'
import nav_home from '../assets/nav_home.svg'
import nav_news from '../assets/nav_news.svg'
import nav_place from '../assets/nav_place.svg'
import nav_user from '../assets/nav_user.svg'


const BottomNav = () => {
    return(
      <nav className='bottom-bar'>
        <section className='plus'>
          <button type='button' className='plus__item'>
            <img src={plus} alt='게시하기'></img>
          </button>
        </section>
        <button type="button" className="bar__menu">
              <img src={nav_home} alt="홈"></img>
              <span className="bar__text" >홈</span>
          </button>
          <button type="button" className="bar__menu">
              <img src={nav_news} alt="홈"></img>
              <span className="bar__text">동네생활</span>
          </button>
          <button type="button" className="bar__menu">
              <img src={nav_place} alt="홈"></img>
              <span className="bar__text">내 근처</span>
          </button>
          <button type="button" className="bar__menu">
              <img src={nav_chat} alt="홈"></img>
              <span className="bar__text">채팅</span>
          </button>
          <button type="button" className="bar__menu">
              <img src={nav_user} alt="홈"></img>
              <span className="bar__text">나의 당근</span>
          </button>
      </nav>
    );
  
  };

  export default BottomNav;