import './Home.css'

function Home() {

  return (
    <>
    <body>
    {/* <!-- 현재 검색하는 동 스크롤 박스 / 여백 / 검색 버튼 / 메뉴 버튼 / 알람 버튼 --> */}
    <nav className="upper-nav">
      <div className="location">
        <p className="location-name">군자동</p>
        <img className="location-expand-btn" src="./assets/expand_arrow.svg" />
      </div>

      <div className="menu-set">
        <img className="menu-set-btn" src="./assets/search_btn.svg" />
        <img src="./assets/menu_btn.svg" />
        <img src="./assets/notification_icon.svg" />
      </div>
    </nav>

    <section className="market">

      <article className="market-item">
        <div className="item-img">
          <img src="./dummy_assets/airpot.svg" />
        </div>
        <div className="item-info">
          <div className="item-description">
          <p className="item-name">에어팟 프로</p>
          <p className="item-loc-date">군자동 · 3일 전</p>
          <p className="item-price">220,000원</p>
          </div>
          {/* <!-- <p>채팅 이모지 / 채팅 개수 / 하트 이모지 / 하트 개수 (모두 0이라면 없음)</p> --> */}
          <div className="offer-info">
            <span className="offer-info-box">
              <img
                className="offer-info-img"
                src="./assets/offer_chat_count_icon.svg"
              />
              <p className="offer-info-detail">3</p>
            </span>
            <span className="offer-info-box">
              <img className="offer-info-img" src="./assets/heart_icon.svg" />
              <p className="offer-info-detail">11</p>
            </span>
          </div>
        </div>
      </article>

      <article className="market-item">
        <div className="item-img">
          <img src="./dummy_assets/perfume.svg" />
        </div>
        <div className="item-info">
          <div className="item-description">
            <p className="item-name">바이레도 블랑쉬 50ml</p>
            <p className="item-loc-date">광진구 구의제3동 · 26초 전</p>
            <p className="item-price">4,000원</p>
          </div>
          {/* <!-- <p>채팅 이모지 / 채팅 개수 / 하트 이모지 / 하트 개수 (모두 0이라면 없음)</p> --> */}
          <div className="offer-info">
            <span className="offer-info-box" style={{display: 'none'}}>
              <img
                className="offer-info-img"
                src="./assets/offer_chat_count_icon.svg"
              />
              <p className="offer-info-detail">3</p>
            </span>
            <span className="offer-info-box">
              <img className="offer-info-img" src="./assets/heart_icon.svg" />
              <p className="offer-info-detail">2</p>
            </span>
          </div>
        </div>
      </article>

      <article className="market-item">
        <div className="item-img">
          <img src="./dummy_assets/sandwich.svg" />
        </div>
        <div className="item-info">
          <div className="item-description">
          <p className="item-name">샌드위치</p>
          <p className="item-loc-date">동대문구 휘경동 · 끌올 59초 전</p>
          <p className="item-price">8,000원</p>
          </div>
          {/* <!-- <p>채팅 이모지 / 채팅 개수 / 하트 이모지 / 하트 개수 (모두 0이라면 없음)</p> --> */}
          <div className="offer-info">
            <span className="offer-info-box"  style={{display: 'none'}}>
              <img
                className="offer-info-img"
                src="./assets/offer_chat_count_icon.svg"
              />
              <p className="offer-info-detail">3</p>
            </span>
            <span className="offer-info-box"  sstyle={{display: 'none'}}>
              <img className="offer-info-img" src="./assets/heart_icon.svg" />
              <p className="offer-info-detail">11</p>
            </span>
          </div>
        </div>
      </article>

      <article className="market-item">
        <div className="item-img">
          <img src="./dummy_assets/iphone.svg" />
        </div>
        <div className="item-info">
          <div className="item-description">
          <p className="item-name">아이폰 13프로맥스</p>
          <p className="item-loc-date">군자동 · 1일 전</p>
          <p className="item-price">1,000,000원</p>
          </div>
          {/* <!-- <p>채팅 이모지 / 채팅 개수 / 하트 이모지 / 하트 개수 (모두 0이라면 없음)</p> --> */}
          <div className="offer-info">
            <span className="offer-info-box" style={{display: 'none'}}>
              <img
                className="offer-info-img"
                src="./assets/offer_chat_count_icon.svg"
              />
              <p className="offer-info-detail">3</p>
            </span>
            <span className="offer-info-box" style={{display: 'none'}}>
              <img className="offer-info-img" src="./assets/heart_icon.svg" />
              <p className="offer-info-detail">11</p>
            </span>
          </div>
        </div>
      </article>

      <article className="market-item">
        <div className="item-img">
          <img src="./dummy_assets/coffeeTool.svg" />
        </div>
        <div className="item-info">
          <div className="item-description">
          <p className="item-name">커피머신</p>
          <p className="item-loc-date">구리시 교문1동 · 1초 전</p>
          <p className="item-price">100,000원</p>
          </div>
          {/* <!-- <p>채팅 이모지 / 채팅 개수 / 하트 이모지 / 하트 개수 (모두 0이라면 없음)</p> --> */}
          <div className="offer-info">
            <span className="offer-info-box">
              <img
                className="offer-info-img"
                src="./assets/offer_chat_count_icon.svg"
              />
              <p className="offer-info-detail">3</p>
            </span>
            <span className="offer-info-box">
              <img className="offer-info-img" src="./assets/heart_icon.svg" />
              <p className="offer-info-detail">11</p>
            </span>
          </div>
        </div>
      </article>

    </section>
    

      {/* <!-- 주황 배경 흰색+ 버튼 스크롤 영향X viewport 내 위치 고정 버튼 타입 쓰기! --> */}
      <button className="posting-btn-cover" type="button">
        <img className="posting-btn" src="./assets/plus_icon.svg" />
        {/* <!-- <img className="posting-btn" src="./assets/posting_icon.svg" /> --> */}
      </button>

    {/* <!-- 집 이모지 아래 '홈' / 신문 이모지 아래 '동네생활'  */}
        {/* 위치포인터 이모지 아래 '내 근처' / 채팅 이모지 아래 '채팅' / 인물 이모지 아래 '나의 당근' --> */}
    <nav className="lower-nav">
      <div className="lower-nav-menu">
        <img className="lower-nav-icon" src="./assets/home_btn_icon.svg" />
        <p className="lower-nav-text">홈</p>
      </div>
      <div className="lower-nav-menu">
        <img className="lower-nav-icon" src="./assets/villiage_news_icon.svg" />
        <p className="lower-nav-text">동네생활</p>
      </div>
      <div className="lower-nav-menu">
        <img className="lower-nav-icon" src="./assets/location_marker_icon.svg" />
        <p className="lower-nav-text">내 근처</p>
      </div>
      <div className="lower-nav-menu">
        <img className="lower-nav-icon" src="./assets/chatting_icon.svg" />
        <p className="lower-nav-text">채팅</p>
      </div>
      <div className="lower-nav-menu">
        <img className="lower-nav-icon" src="./assets/profile_icon.svg" />
        <p className="lower-nav-text">나의 당근</p>
      </div>
    </nav>
    </body>
    </>
  )
}

export default Home
