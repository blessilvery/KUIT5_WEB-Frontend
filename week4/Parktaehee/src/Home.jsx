import React from "react";
import "./Home.css";
import marketModel from "./models/MarketModel.js";

const { location, items } = marketModel;

const Header = () => {
  return (
    <>
      <section className="list-header">
        <header>
          <div className="list-header__location">
            <span className="list-header__span">군자동</span>
            <button>
              <img
                className="list-header__arrow-img"
                src={`/assets/arrow.svg`}
                alt="토글"
              />
            </button>
          </div>
          <div className="list-header-right">
            <button>
              <img
                className="list-header__notice-img"
                src={`/assets/search.svg`}
                alt="검색"
              />
            </button>
            <button>
              <img
                className="list-header__notice-img"
                src={`/assets/menu-line.svg`}
                alt="메뉴바"
              />
            </button>
            <button>
              <img
                className="list-header__notice-img"
                src={`/assets/notice.svg`}
                alt="알림"
              />
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

const Content = ({ item }) => {
  const { title, location, timeAgo, price, image, comments, likes } = item;
  return (
    <>
      <div className="list-one">
        <div className="list-one-item-wrapper">
          <img className="list-one-item" src={`/assets/${image}`} alt={title} />
        </div>
        <div>
          <div className="list-one-explain">
            <span className="list-one-item-title">{title}</span>
            <span className="list-one-item-location">
              {location} · {timeAgo}
            </span>
            <span className="list-one-item-price">{price}</span>
          </div>
          <div className="list-one-item-reaction">
            {comments > 0 && (
              <>
                <img src="/assets/write.svg" alt="댓글" />
                <span>{comments}</span>
              </>
            )}
            {likes > 0 && (
              <>
                <img src="/assets/heart.svg" alt="좋아요" />
                <span>{likes}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const BottomNav = () => {
  return (
    <>
      <footer className="carrot-footer">
        <div className="carrot-footer-main">
          <div className="carrot-footer-option">
            <img className="" src={`/assets/home.svg`} alt="홈" />
            <span>홈</span>
          </div>
          <div className="carrot-footer-option">
            <img className="" src={`/assets/life.svg`} alt="동네생활" />
            <span>동네생활</span>
          </div>
          <div className="carrot-footer-option">
            <img className="" src={`/assets/location.svg`} alt="내 근처" />
            <span>내 근처</span>
          </div>
          <div className="carrot-footer-option">
            <img className="" src={`/assets/chat.svg`} alt="채팅" />
            <span>채팅</span>
          </div>
          <div className="carrot-footer-option">
            <img className="" src={`/assets/my.svg`} alt="나의 당근" />
            <span>나의 당근</span>
          </div>
        </div>
      </footer>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <section className="list-body">
        {items.map((item) =>
          item.isSold ? <Content item={item} key={item.id} /> : null
        )}
      </section>
      <BottomNav />
    </>
  );
};

export default Home;
