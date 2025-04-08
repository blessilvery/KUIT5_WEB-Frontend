import React from "react";
import "./Home.css";

import downChevron from "./assets/down-chevron.svg";
import search from "./assets/search.svg";
import menu from "./assets/menu.svg";
import notification from "./assets/notification.svg";
import bxChat from "./assets/bx-chat.svg";
import reactionHeart from "./assets/reaction-heart.svg";
import home from "./assets/home.svg";
import news from "./assets/news.svg";
import placeMarker from "./assets/place-marker.svg";
import chat from "./assets/chat.svg";
import user from "./assets/user.svg";
import plus from "./assets/plus.svg";

import marketModel from "./models/MarketModel";

const Header = ({ location }) => {
  return (
    <section className="post-header">
      <header className="post-header__icon-container">
        <button className="post-place__btn" type="button">
          <span className="post-place__name">{location}</span>
          <IconButton
            src={downChevron}
            alt="지역 선택"
            className="post-place__img"
          />
        </button>
        <div class="header__menu-container">
          <IconButton src={search} alt="검색" className="search__btn" />
          <IconButton src={menu} alt="메뉴" className="menu__btn" />
          <IconButton
            src={notification}
            alt="알림"
            className="notification__btn"
          />
        </div>
      </header>
    </section>
  );
};

const IconButton = ({ src, alt, className }) => {
  return (
    <button type="button" className={className}>
      <img src={src} alt={alt} />
    </button>
  );
};

const Content = ({ items }) => {
  return (
    <ul class="post">
      {items.map((item, index) => (
        <li key={index}>
          <button type="button" className="post-product__container">
            <ProductImg />
            <div class="product__content">
              <div class="product-desc__container">
                <span className="product__name">{item.title}</span>
                <div className="product__place-date">
                  <span className="product__place">{item.location}</span>
                  <span>·</span>
                  <span className="product__date">{item.timeAge}</span>
                </div>
                <span className="product__price">{item.price}</span>
              </div>

              <div className="product-reaction__container">
                <Comments comments={item.comments} />
                <Likes likes={item.likes} />
              </div>
            </div>
          </button>
        </li>
      ))}
      <IconButton src={plus} alt="추가 버튼" className="add__btn" />
    </ul>
  );
};

const ProductImg = () => {
  return (
    <img
      className="product__img"
      src="http://placehold.co/110"
      alt="제품이미지"
    />
  );
};

const Comments = ({ comments }) => {
  return comments > 0 ? (
    <div className="product-reaction">
      <IconButton src={bxChat} alt="댓글 수" />
      <span className="reaction__num">{comments}</span>
    </div>
  ) : null
};

const Likes = ({ likes }) => {
  return likes > 0 ? (
    <div className="product-reaction">
      <IconButton src={reactionHeart} alt="좋아요 수" />
      <span className="reaction__num">{likes}</span>
    </div>
  ) : null
};

const BottomNav = () => {
  return (
    <nav className="bottom-bar">
      <BottomMenu src={home} alt="홈 메뉴" title="홈" />
      <BottomMenu src={news} alt="동네생활 메뉴" title="동네생활" />
      <BottomMenu src={placeMarker} alt="근처 메뉴" title="내 근처" />
      <BottomMenu src={chat} alt="채팅 메뉴" title="채팅" />
      <BottomMenu src={user} alt="나의당근 메뉴" title="나의 당근" />
    </nav>
  );
};

const BottomMenu = ({ src, alt, title }) => {
  return (
    <button type="button" className="bottom__btn">
      <img src={src} alt={alt} />
      <span className="btn__name">{title}</span>
    </button>
  );
};

const Home = () => {
  return (
    <div>
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <BottomNav />
    </div>
  );
};

export default Home;
