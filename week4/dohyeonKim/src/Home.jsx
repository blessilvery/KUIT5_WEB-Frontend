import React from 'react';
import styles from './index.css';

import expendarrow from './assets/expend_arrow.svg'
import search_icon from './assets/search_icon.svg'
import menu_icon from './assets/menu_icon.svg'
import bell_icon from './assets/bell_icon.svg'

import chat_icon from './assets/chat_icon.svg'
import heart_icon from './assets/heart_icon.svg'
import plus from './assets/plus.svg'

import nav_chat from './assets/nav_chat.svg'
import nav_home from './assets/nav_home.svg'
import nav_news from './assets/nav_news.svg'
import nav_place from './assets/nav_place.svg'
import nav_user from './assets/nav_user.svg'

import product1 from './assets/product1.png'
import product2 from './assets/product2.png'
import product3 from './assets/product3.png'
import product4 from './assets/product4.png'
import product5 from './assets/product5.png'

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

const Content = () => {
  return (
    <article className='item-area'>
      <button type="button" className="item__button">
        <div className="item-area__item">
          <img src={product1} alt="판매 상품" className="item__image"></img>
          <div className="item__info">
            <div className="item__text">
              <span className="item__title">에어팟 프로</span>
              <div className="item__dong-date">
                <span className="item__dong">군자동</span>
                <span>·</span>
                <span className="item__date">3일 전</span>
              </div>
              <span className="item__price">220,000원</span>
            </div>
            <div className="item__share">
              <div className="item__spec">
                <img src={chat_icon} alt="채팅 수"></img>
                <span className="chat__count" id="item__count">3</span>
              </div>
              <div className="item__spec">
                <img src={heart_icon} alt="좋아요 수"></img>
                <span className="heart__count" id="item__count">11</span>
              </div>
            </div>
          </div>
        </div>
      </button>

      <button type="button" className="item__button">
        <div className="item-area__item">
          <img src={product2} alt="판매 상품" className="item__image"></img>
          <div className="item__info">
            <div className="item__text">
              <span className="item__title">바이레도 블랑쉬 50ml</span>
              <div className="item__dong-date">
                <span className="item__dong">광진구 구의제3동</span>
                <span>·</span>
                <span className="item__date">26초 전</span>
              </div>
              <span className="item__price">4,000원</span>
            </div>
            <div className="item__share">
              <div className="item__spec" style={{display:'none'}}>
                <img src={chat_icon} alt="채팅 수"></img>
                <span className="chat__count" id="item__count">0</span>
              </div>
              <div className="item__spec">
                <img src={heart_icon} alt="좋아요 수"></img>
                <span className="heart__count" id="item__count">2</span>
              </div>
            </div>
          </div>
        </div>
      </button>

      <button type="button" className="item__button">
        <div className="item-area__item">
          <img src={product3} alt="판매 상품" className="item__image"></img>
          <div className="item__info">
            <div className="item__text">
              <span className="item__title">샌드위치</span>
              <div className="item__dong-date">
                <span className="item__dong">동대문구 휘경동</span>
                <span>·</span>
                <span className="item__date">끌올 59초 전</span>
              </div>
              <span className="item__price">8,000원</span>
            </div>
            <div className="item__share" style={{display:"none"}}>
              <div className="item__spec">
                <img src={chat_icon} alt="채팅 수"></img>
                <span className="chat__count" id="item__count">3</span>
              </div>
              <div className="item__spec">
                <img src={heart_icon} alt="좋아요 수"></img>
                <span className="heart__count" id="item__count">11</span>
              </div>
            </div>
          </div>
        </div>
      </button>

      <button type="button" className="item__button">
        <div className="item-area__item">
          <img src={product4} alt="판매 상품" className="item__image"></img>
          <div className="item__info">
            <div className="item__text">
              <span className="item__title">아이폰 13프로맥스</span>
              <div className="item__dong-date">
                <span className="item__dong">군자동</span>
                <span>·</span>
                <span className="item__date">1일 전</span>
              </div>
              <span className="item__price">1,000,000원</span>
            </div>
            <div className="item__share" style={{display:"none"}}>
              <div className="item__spec">
                <img src={chat_icon} alt="채팅 수"></img>
                <span className="chat__count" id="item__count">3</span>
              </div>
              <div className="item__spec">
                <img src={heart_icon} alt="좋아요 수"></img>
                <span className="heart__count" id="item__count">11</span>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button type="button" className="item__button">
        <div className="item-area__item">
          <img src={product5} alt="판매 상품" className="item__image"></img>
          <div className="item__info">
            <div className="item__text">
              <span className="item__title">커피머신</span>
              <div className="item__dong-date">
                <span className="item__dong">구리시 교문1동</span>
                <span>·</span>
                <span className="item__date">1초 전</span>
              </div>
              <span className="item__price">100,000원</span>
            </div>
            <div className="item__share" style={{display:"none"}}>
              <div className="item__spec">
                <img src={chat_icon} alt="채팅 수"></img>
                <span className="chat__count" id="item__count">3</span>
              </div>
              <div className="item__spec">
                <img src={heart_icon} alt="좋아요 수"></img>
                <span className="heart__count" id="item__count">11</span>
              </div>
            </div>
          </div>
        </div>
      </button>

    </article>
  );
};

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
