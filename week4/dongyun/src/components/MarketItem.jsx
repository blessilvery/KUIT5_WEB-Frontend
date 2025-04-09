
function MarketItem(){
    return (
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
    )
}

export default MarketItem