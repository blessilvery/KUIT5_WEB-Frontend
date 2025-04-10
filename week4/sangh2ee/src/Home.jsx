import React from "react";
import styles from "./index.css";
import marketModel from './models/MarketModel';

import expandarrow from './assets/expand_arrow_down.svg'
import search from './assets/search.svg'
import menu from './assets/menu.svg'
import notification from './assets/notification.svg'

import chat from './assets/chat.svg'
import heart from './assets/heart.svg'

import home from './assets/home.svg'
import neighbor from './assets/neighbor.svg'
import near from './assets/near.svg'
import chatting from './assets/chatting.svg'
import my from './assets/my.svg'
import plus__button from './assets/plus__button.svg'

const Header = () => {
 return (
  <section className="post-header">
    <header>
        <div className="location">
            <button type="button">
                <span className="location">군자동</span>
            </button>
            <button type="button">
                <img src={expandarrow} alt="expand arrow" />
            </button>
        </div> 
            <div className="post-header__icon-container">
            <button type="button">
                <img src={search} alt="search product" />
            </button>
            <button type="button">
                <img src={menu} alt="go back menu" />
            </button>
            <button type="button">
                <img src={notification} alt="notification" />
            </button>
        </div>
  </header>
  </section>
 );
};

const Content = ({ item }) => {
    const { title, location, timeAgo, price, image, comments, likes } = item;
  
    return (
      <article className="post">
        <div className="post__list">
            <div className="post__img">
                <img className="prod__img" src={`/assets/${image}`} alt="post imgage" />
            </div>
            <div className="post__text--area">
                <div className="post__text">
                    <span className="product__title">{title}</span>
                    <div className="product__info">
                    <span className="prod__loc">{location}</span>
                    <span className="dot">·</span>
                    <span className="prod__date">{timeAgo}</span>
                    </div>
                    <span className="product__price">{price}</span>
                </div>
                <div className="reaction">
                    <div className="chat" style={{ display: comments ? '' : 'none' }}>
                        <img src={chat} alt="chat" />
                        <div className="chat__num">{comments}</div>
                    </div>


                    <div className="heart" style={{ display: likes ? '' : 'none' }}>
                            <img src={heart} alt="heart reaction" />
                            <div className="heat__num">{likes}</div>
                    </div>
                </div>
            </div>
        </div>
      </article>
    );
  };

const BottomNav = () => {
  return (
    <section>
      <div className="nav__bar">
        <div className="home">
          <button type="button">
            <img src={home} alt="go home" />
          </button>
          <button type="button">
            <span className="home">홈</span>
          </button>
        </div>
        <div className="home__neighbor">
          <button type="button">
            <img src={neighbor} alt="동네 생활" />
          </button>
          <button type="button">
            <span className="neighbor">동네생활</span>
          </button>
        </div>
        <div className="home__near">
          <button type="button">
            <img src={near} alt="near" />
          </button>
          <button type="button">
            <span className="near">내 근처</span>
          </button>
        </div>
        <div className="home__chat">
          <button type="button">
            <img src={chatting} alt="chatting" />
          </button>
          <button type="button">
            <span className="chatting">채팅</span>
          </button>
        </div>
        <div className="home__my">
          <button type="button">
            <img src={my} alt="my carrot" />
          </button>
          <button type="button">
            <span className="my">나의 당근</span>
          </button>
        </div> 
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        {marketModel.items.map((item, index) => (
          item.isSold ? (
            <div key={index}></div> 
          ) : (
            <Content key={index} item={item} /> 
          )
        ))}
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
