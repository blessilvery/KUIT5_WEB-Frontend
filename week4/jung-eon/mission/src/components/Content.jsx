import React from "react";
import marketModel from "../models/MarketModels";

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

export default Content;
