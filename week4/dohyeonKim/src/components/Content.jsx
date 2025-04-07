import React from 'react';
import styles from '../index.css';

import chat_icon from '../assets/chat_icon.svg'
import heart_icon from '../assets/heart_icon.svg'

import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'


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

  export default Content;