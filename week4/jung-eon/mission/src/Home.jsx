import React from "react";
import marketModel from "./models/MarketModels";

const Header = () => {
  const location = marketModel.location;
  return (
    <div>
      <div className="post-header__left">
        <h1 className="post-header__text">{location}</h1>
        <img src="./assets/expand-arrow.svg" alt="expand-button" />
      </div>
      <div className="post-header__icon-container">
        <button className="button">
          <img src="./assets/search.svg" alt="search-button" />
        </button>
        <button className="button">
          <img src="./assets/menu1.svg" alt="menu-button" />
        </button>
        <button className="button">
          <img src="./assets/notification1.svg" alt="notification1-button" />
        </button>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      {marketModel.items.map((item, index) => (
        <article className="post" key={index}>
          <img src={item.image} alt={item.title} />
          <div className="post__name">
            <h2 className="post__title">{item.title}</h2>
            <p className="post__info">
              {item.location} · {item.timeAgo}
            </p>
            <p className="price">{item.price}</p>
          </div>
          <div className="post__reaction">
            {item.comments > 0 && (
              <div className="chat_reaction">
                <img src="/assets/bx_chat.svg" alt="댓글" />
                <span className="num">{item.comments}</span>
              </div>
            )}
            {item.likes > 0 && (
              <div className="heart_reaction">
                <img src="/assets/heart.svg" alt="좋아요" />
                <span className="num">{item.likes}</span>
              </div>
            )}
            {item.isSold && <span className="sold-badge">판매 완료</span>}
          </div>
        </article>
      ))}
      ;
    </div>
  );
};

{
  /*comments가 0보다 클때 참이므로 댓글과 좋아요의 값을 반환 그렇지 않으면 X*/
}

const BottomNav = () => {
  return (
    <section>
      <button className="plus-button">
        <img src="/assets/plus-button.svg" alt="plus-button" />
      </button>
      <div className="post-bottom__icon-container">
        <button className="button">
          <img src="/assets/home-img.svg" alt="home" />
          <p className="icon-text">홈</p>
        </button>
        <button className="button">
          <img src="/assets/news-img.svg" alt="news" />
          <p className="icon-text">동네생활</p>
        </button>
        <button className="button">
          <img src="/assets/place-marker-img.svg" alt="place-marker" />
          <p className="icon-text">내 근처</p>
        </button>
        <button className="button">
          <img src="/assets/chat-img.svg" alt="chat" />
          <p className="icon-text">채팅</p>
        </button>
        <button className="button">
          <img src="/assets/user-img.svg" alt="user" />
          <p className="icon-text">나의 당근</p>
        </button>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <BottomNav />
    </div>
  );
};

export default Home;
