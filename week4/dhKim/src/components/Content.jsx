import React from 'react';

const Content = ({ items }) => {
    return (
        <div>
        <div className="product_container">
                <article className="product_bottombanner_container">
                    {items.map(
                        (
                            { title, image, location, timeAgo, price, comments, likes, isSold },
                            index
                        ) => (
                            <section className="item1" key={index}>
                                <div className="product_image">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="product_info_container">
                                    <ul className="product_info">
                                        <li className="product_name">{title}</li>
                                        <li className="place_buy_container">
                                            <span className="place_buy">{location}</span>
                                            <span>·</span>
                                            <span className="date_buy">{timeAgo}</span>
                                        </li>
                                        <li className="price">{price}</li>
                                    </ul>
                                    <div className="comment_emogi_container">
                                        <div className="heart">
                                            <img src="/assets/heart.svg" alt="좋아요" />
                                            <span className="heart_num">{likes}</span>
                                        </div>
                                        <div className="comment">
                                            <img src="/assets/chat.svg" alt="채팅" />
                                            <span className="chat_num">{comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                     )
             )}
        </article>
    </div>
            <button className="plus_container">
                <div className="plus_button">
                    <img src="/assets/plus.svg" alt="더하기" />
                </div>
            </button>
        </div>
    );
};

export default Content;