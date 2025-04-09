import airpods from "../assets/airpods-pro.svg";
import salesChat from "../assets/sales-chat.svg";
import heart from "../assets/heart.svg";
import byredo from "../assets/byredo-blanche.svg";
import sandwitch from "../assets/sandwitch.svg";
import iphone from "../assets/iphone-13-pro-max.svg";
import coffeeMachine from "../assets/coffee-machine.svg";

function Content() {
  return (
    <div>
      <article className="post">
        <img className="thumbnail" src={airpods} alt="airpods" />
        <div className="item-description">
          <p className="item-name">에어팟 프로</p>
          <p className="item-place">군자동 · 3일 전</p>
          <p className="item-price">220,000원</p>
          <div className="item-stats">
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
      <article className="post">
        <img className="thumbnail" src={byredo} alt="byredo" />
        <div className="item-description">
          <p className="item-name">바이레도 블랑쉬 50ml</p>
          <p className="item-place">광진구 구의제3동 · 26초 전</p>
          <p className="item-price">4,000원</p>
          <div className="item-stats">
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
      <article className="post">
        <img className="thumbnail" src={sandwitch} alt="sandwitch" />
        <div className="item-description">
          <p className="item-name">샌드위치</p>
          <p className="item-place">동대문구 휘경동 · 끌올 59초 전</p>
          <p className="item-price">8,000원</p>
          <div className="item-stats">
            <span>
              <img src={heart} alt="heart" />
              25
            </span>
          </div>
        </div>
      </article>
      <article className="post">
        <img className="thumbnail" src={iphone} alt="iphone" />
        <div className="item-description">
          <p className="item-name">아이폰 13프로맥스</p>
          <p className="item-place">화양동 · 1일 전</p>
          <p className="item-price">170,000원</p>
          <div className="item-stats">
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
      <article className="post">
        <img className="thumbnail" src={coffeeMachine} alt="coffee" />
        <div className="item-description">
          <p className="item-name">치킨</p>
          <p className="item-place">멍멍동 · 53일 전</p>
          <p className="item-price">17,000,000원</p>
          <div className="item-stats">
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
      <article className="post">
        <img className="thumbnail" src={coffeeMachine} alt="coffee" />
        <div className="item-description">
          <p className="item-name">kfc</p>
          <p className="item-place">야옹동 · 1023일 전</p>
          <p className="item-price">3원</p>
          <div className="item-stats">
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
}

export default Content;
