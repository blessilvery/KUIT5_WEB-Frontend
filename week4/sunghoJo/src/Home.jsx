import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* 지역 설정 및 메뉴바 */}
      <section className="post-header">
        <header>
          <div className="top-left">
            <button className="location-tab" type="button">
              <span className="now-location">군자동</span>
              <img
                className="location-list-icon"
                src="/assets/expand_arrow.svg"
                alt="지역 설정 탭"
              />
            </button>
          </div>
          <div className="top-right">
            <button className="search_icon" type="button">
              <img
                className="search_icon_img"
                src="/assets/search.svg"
                alt="검색 버튼"
              />
            </button>
            <button className="menu_list_icon" type="button">
              <img
                className="menu_list_icon_img"
                src="/assets/menu.svg"
                alt="메뉴 버튼"
              />
            </button>
            <button className="notification_icon" type="button">
              <img
                className="notification_icon_img"
                src="/assets/notification.svg"
                alt="알림 버튼"
              />
            </button>
          </div>
        </header>
      </section>

      {/* 게시글 목록 */}
      <article className="post">
        {/* 게시글 1 */}
        <section className="product_post">
          <button className="product-container" type="button">
            <div className="product-image-container">
              <img
                className="product_img"
                src="/assets/airpods-pro.svg"
                alt="상품 사진"
              />
            </div>
            <div className="product-info-container">
              <div className="info-1">
                <div className="info1-1">에어팟 프로</div>
                <div className="info1-2-1">
                  <div className="location">군자동</div>
                  <div className="dot">·</div>
                  <div className="date">3일 전</div>
                </div>
                <div className="info1-2-2">220,000원</div>
              </div>
              <div className="info-2">
                <div className="likes">
                  <img src="/assets/heart.svg" alt="" className="heart" />
                  <div className="like-number">11</div>
                </div>
                <div className="chats">
                  <img src="/assets/text.svg" alt="" className="text" />
                  <div className="chat-number">3</div>
                </div>
              </div>
            </div>
          </button>
        </section>
        <div className="horizon"></div>

        {/* 게시글 2 */}
        <section className="product_post">
          <button className="product-container" type="button">
            <div className="product-image-container">
              <img
                className="product_img"
                src="/assets/byredo-blanche.svg"
                alt="상품 사진"
              />
            </div>
            <div className="product-info-container">
              <div className="info-1">
                <div className="info1-1">바이레도 블랑쉬 50ml</div>
                <div className="info1-2-1">
                  <div className="location">광진구 구의제3동</div>
                  <div className="dot">·</div>
                  <div className="date">26초 전</div>
                </div>
                <div className="info1-2-2">4,000원</div>
              </div>
              <div className="info-2">
                <div className="likes">
                  <img src="/assets/heart.svg" alt="" className="heart" />
                  <div className="like-number">2</div>
                </div>
              </div>
            </div>
          </button>
        </section>
        <div className="horizon"></div>

        {/* 게시글 3 */}
        <section className="product_post">
          <button className="product-container" type="button">
            <div className="product-image-container">
              <img
                className="product_img"
                src="/assets/sandwich.svg"
                alt="상품 사진"
              />
            </div>
            <div className="product-info-container">
              <div className="info-1">
                <div className="info1-1">샌드위치</div>
                <div className="info1-2-1">
                  <div className="location">동대문구 휘경동</div>
                  <div className="dot">·</div>
                  <div className="date">끌올 59초 전</div>
                </div>
                <div className="info1-2-2">8,000원</div>
              </div>
              <div className="info-2"></div>
            </div>
          </button>
        </section>
        <div className="horizon"></div>

        {/* 게시글 4 */}
        <section className="product_post">
          <button className="product-container" type="button">
            <div className="product-image-container">
              <img
                className="product_img"
                src="/assets/iPhone13ProMax.svg"
                alt="상품 사진"
              />
            </div>
            <div className="product-info-container">
              <div className="info-1">
                <div className="info1-1">아이폰 13프로맥스</div>
                <div className="info1-2-1">
                  <div className="location">군자동</div>
                  <div className="dot">·</div>
                  <div className="date">1일 전</div>
                </div>
                <div className="info1-2-2">1,000,000원</div>
              </div>
              <div className="info-2"></div>
            </div>
          </button>
        </section>
        <div className="horizon"></div>

        {/* 게시글 5 */}
        <section className="product_post">
          <button className="product-container" type="button">
            <div className="product-image-container">
              <img
                className="product_img"
                src="/assets/coffeemachine.svg"
                alt="상품 사진"
              />
            </div>
            <div className="product-info-container">
              <div className="info-1">
                <div className="info1-1">커피머신</div>
                <div className="info1-2-1">
                  <div className="location">구리시 교문1동</div>
                  <div className="dot">·</div>
                  <div className="date">1초 전</div>
                </div>
                <div className="info1-2-2">100,000원</div>
              </div>
              <div className="info-2"></div>
            </div>
          </button>
        </section>
        <div className="horizon"></div>

        {/* 게시글 6 */}
        <section className="product_post">
          <button className="product-container" type="button">
            <div className="product-image-container">
              <img className="product_img" src="/assets/dog.svg" alt="가나디" />
            </div>
            <div className="product-info-container">
              <div className="info-1">
                <div className="info1-1">프리허그</div>
                <div className="info1-2-1">
                  <div className="location">강남구 수서동</div>
                  <div className="dot">·</div>
                  <div className="date">1주 전</div>
                </div>
                <div className="info1-2-2">0원</div>
              </div>
              <div className="info-2"></div>
            </div>
          </button>
        </section>
        <div className="horizon"></div>
      </article>

      {/* 하단바 */}
      <div id="bottom">
        <div className="add">
          <button className="add-button" type="button">
            <img
              className="plus-icon"
              src="/assets/plus-math.svg"
              alt="물건 등록"
            />
          </button>
        </div>
        <div className="bottom-menu">
          <button className="icon" type="button">
            <img src="/assets/home.svg" alt="홈" />
            <div className="home-button">홈</div>
          </button>
          <button className="icon" type="button">
            <img src="/assets/news.svg" alt="동네생활" />
            <div className="news-button">동네생활</div>
          </button>
          <button className="icon" type="button">
            <img src="/assets/place-marker.svg" alt="내 근처" />
            <div className="place-marker">내 근처</div>
          </button>
          <button className="icon" type="button">
            <img src="/assets/chat.svg" alt="채팅" />
            <div className="chat-button">채팅</div>
          </button>
          <button className="icon" type="button">
            <img src="/assets/user.svg" alt="나의 당근" />
            <div className="user-button">나의 당근</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
