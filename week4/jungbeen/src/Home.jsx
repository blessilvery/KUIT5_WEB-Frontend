import React from "react";

import marketModel from "./models/MarketModel";

import expandArrow from "./assets/expand-arrow.svg";
import search from "./assets/search.svg";
import menu from "./assets/menu.svg";
import notification from "./assets/notification.svg";
import airpods from "./assets/airpods-pro.svg";
import salesChat from "./assets/sales-chat.svg";
import heart from "./assets/heart.svg";
import byredo from "./assets/byredo-blanche.svg";
import sandwitch from "./assets/sandwitch.svg";
import iphone from "./assets/iphone-13-pro-max.svg";
import coffeeMachine from "./assets/coffee-machine.svg";
import navHome from "./assets/nav-home.svg";
import navChat from "./assets/nav-chat.svg";
import navLocation from "./assets/nav-location.svg";
import navNewspaper from "./assets/nav-newspaper.svg";
import navPerson from "./assets/nav-person.svg";
import plus from "./assets/plus.svg";

const Header = () => {
  return (
    <header class="page-header">
      <span class="dong-selector">
        {marketModel.location}
        <button>
          <img src={expandArrow} alt="expand-arrow"></img>
        </button>
      </span>
      <div class="header_simple-bar">
        <button>
          <img src={search} alt="search" />
        </button>
        <button>
          <img src={menu} alt="menu" />
        </button>
        <button>
          <img src={notification} alt="notification" />
        </button>
      </div>
    </header>
  );
};

const Content = () => {
  return (
    <div>
      <article class="post">
        <img class="thumbnail" src={airpods} alt="airpods" />
        <div class="item-description">
          <p class="item-name">에어팟 프로</p>
          <p class="item-place">군자동 · 3일 전</p>
          <p class="item-price">220,000원</p>
          <div class="item-stats">
            <span>
              <img src={salesChat} alt="chat" />3
            </span>
            <span>
              <img src={heart} alt="heart" />
              11
            </span>
          </div>
        </div>
      </article>
      <article class="post">
        <img class="thumbnail" src={byredo} alt="byredo" />
        <div class="item-description">
          <p class="item-name">바이레도 블랑쉬 50ml</p>
          <p class="item-place">광진구 구의제3동 · 26초 전</p>
          <p class="item-price">4,000원</p>
          <div class="item-stats">
            <span>
              <img src={salesChat} alt="chat" />
              13
            </span>
            <span>
              <img src={heart} alt="heart" />2
            </span>
          </div>
        </div>
      </article>
      <article class="post">
        <img class="thumbnail" src={sandwitch} alt="sandwitch" />
        <div class="item-description">
          <p class="item-name">샌드위치</p>
          <p class="item-place">동대문구 휘경동 · 끌올 59초 전</p>
          <p class="item-price">8,000원</p>
          <div class="item-stats">
            <span>
              <img src={heart} alt="heart" />
              25
            </span>
          </div>
        </div>
      </article>
      <article class="post">
        <img class="thumbnail" src={iphone} alt="iphone" />
        <div class="item-description">
          <p class="item-name">아이폰 13프로맥스</p>
          <p class="item-place">화양동 · 1일 전</p>
          <p class="item-price">170,000원</p>
          <div class="item-stats">
            <span>
              <img src={salesChat} alt="chat" />
              71
            </span>
            <span>
              <img src={heart} alt="heart" />3
            </span>
          </div>
        </div>
      </article>
      <article class="post">
        <img class="thumbnail" src={coffeeMachine} alt="coffee" />
        <div class="item-description">
          <p class="item-name">치킨</p>
          <p class="item-place">멍멍동 · 53일 전</p>
          <p class="item-price">17,000,000원</p>
          <div class="item-stats">
            <span>
              <img src={salesChat} alt="chat" />
              103
            </span>
            <span>
              <img src={heart} alt="heart" />
              1100
            </span>
          </div>
        </div>
      </article>
      <article class="post">
        <img class="thumbnail" src={coffeeMachine} alt="coffee" />
        <div class="item-description">
          <p class="item-name">kfc</p>
          <p class="item-place">야옹동 · 1023일 전</p>
          <p class="item-price">3원</p>
          <div class="item-stats">
            <span>
              <img src={salesChat} alt="chat" />
              13
            </span>
            <span>
              <img src={heart} alt="heart" />
              711
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

const BottomNav = () => {
  return (
    <nav class="footer-nav">
      <button class="nav-menu">
        <img src={navHome} alt="home" />홈
      </button>
      <button class="nav-menu">
        <img src={navNewspaper} alt="newspaper" />
        동네생활
      </button>
      <button class="nav-menu">
        <img src={navLocation} alt="nav-location" />내 근처
      </button>
      <button class="nav-menu">
        <img src={navChat} alt="chat" />
        채팅
      </button>
      <button class="nav-menu">
        <img src={navPerson} alt="person" />
        나의 당근
      </button>
    </nav>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <button class="new-post">
        <img src={plus} alt="plus" />
      </button>
      <BottomNav />
    </div>
  );
};

export default Home;
