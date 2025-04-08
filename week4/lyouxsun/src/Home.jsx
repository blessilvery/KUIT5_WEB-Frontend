import React from "react";

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

import marketModel from "./models/MarketModel";

const Header = ({ location }) => {
  return (
    <div>
      <div>
        <span>{location}</span>
        <IconButton src={downChevron} alt="지역 선택" />
      </div>
      <div>
        <IconButton src={search} alt="검색" />
        <IconButton src={menu} alt="메뉴" />
        <IconButton src={notification} alt="알림" />
      </div>
    </div>
  );
};

const IconButton = ({ src, alt }) => {
  return (
    <button type="button">
      <img src={src} alt={alt} />
    </button>
  );
};

/**
{
  title: "에어팟 프로",
  location: "군자동",
  timeAgo: "3일 전",
  price: "220,000원",
  image: "airpods-pro.png",   // 질문 : 보통은 이미지가 url로 적혀있어서 배열 랜더링이 가능하죠?
  comments: 3,
  likes: 11,
  isSold: true,
},
*/

const Content = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <button type="button">
            <ProductImg />
            <div>
              <span>{item.title}</span>
              <div>
                <span>{item.location}</span>
                <span>·</span>
                <span>{item.timeAge}</span>
              </div>
              <span>{item.price}</span>
            </div>

            <div>
              <Comments comments={item.comments} />
              <Likes likes={item.likes} />
            </div>
          </button>
        </li>
      ))}
      ;
    </ul>
  );
};

const ProductImg = () => {
  return (
    <img class="product__img" src="http://placehold.co/110" alt="제품이미지" />
  );
};

const Comments = ({ comments }) => {
  return comments > 0 ? (
    <div>
      <IconButton src={bxChat} alt="댓글 수" />
      <span>{comments}</span>
    </div>
  ) : null;
};

const Likes = ({ likes }) => {
  return likes > 0 ? (
    <div>
      <IconButton src={reactionHeart} alt="좋아요 수" />
      <span>{likes}</span>
    </div>
  ) : null;
};

const BottomNav = () => {
  return (
    <div>
      <BottomMenu src={home} alt="홈 메뉴" title="홈" />
      <BottomMenu src={news} alt="동네생활 메뉴" title="동네생활" />
      <BottomMenu src={placeMarker} alt="근처 메뉴" title="내 근처" />
      <BottomMenu src={chat} alt="채팅 메뉴" title="채팅" />
      <BottomMenu src={user} alt="나의당근 메뉴" title="나의 당근" />
    </div>
  );
};

const BottomMenu = ({ src, alt, title }) => {
  return (
    <button type="button">
      <img src={src} alt={alt} />
      <span>{title}</span>
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
