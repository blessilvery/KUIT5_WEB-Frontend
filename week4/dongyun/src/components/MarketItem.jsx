
function MarketItem({ item }) {
    return (
        <article className="market-item">
            <div className="item-img">
                <img src={`../../public/dummy_assets/${item.image}`} />
                {/* <img src={require(`../../public/dummy_assets/${item.image}`).default} /> */}
            </div>
            <div className="item-info">
                <div className="item-description">
                    <p className="item-name">{item.title}</p>
                    <p className="item-loc-date">{item.location} · {item.timeAgo}</p>
                    <p className="item-price">{item.price}</p>
                </div>
                {/* <!-- <p>채팅 이모지 / 채팅 개수 / 하트 이모지 / 하트 개수 (모두 0이라면 없음)</p> --> */}
                <div className="offer-info">
                    <span className="offer-info-box">
                        <img
                            className="offer-info-img"
                            src="./assets/offer_chat_count_icon.svg"
                        />
                        <p className="offer-info-detail">{item.comment}</p>
                    </span>
                    <span className="offer-info-box">
                        <img className="offer-info-img" src="./assets/heart_icon.svg" />
                        <p className="offer-info-detail">{item.likes}</p>
                    </span>
                </div>
            </div>
        </article>
    )
}

export default MarketItem