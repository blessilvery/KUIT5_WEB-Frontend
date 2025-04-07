import React from 'react';
import styles from '../index.css';

import expendarrow from '../assets/expend_arrow.svg'
import search_icon from '../assets/search_icon.svg'
import menu_icon from '../assets/menu_icon.svg'
import bell_icon from '../assets/bell_icon.svg'

const Header = () => {

  return (
    <header className="post-header">
      <div className='post-header__dong'>
        <span className='dong__text'>군자동</span>
        <button type='button' className='dong__button'>
          <img src={expendarrow} alt='동네 확장'></img>
        </button>
      </div>
      <div className='post-header__icon-box'>
        <button type='button' className='icon-box__button'>
          <img src={search_icon} alt='찾아보기'></img>
        </button>
        <button type='button' className='icon-box__button'>
          <img src={menu_icon} alt='메뉴'></img>
        </button>
        <button type='button' className='icon-box__button'>
          <img src={bell_icon} alt='알림'></img>
        </button>
      </div>
    </header>
  );

};

export default Header;