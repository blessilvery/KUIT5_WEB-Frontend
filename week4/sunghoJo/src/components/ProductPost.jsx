import React from "react";

const ProductPost = ({ product }) => {
  return (
    <>
      <section className="product_post">
        <button className="product-container" type="button">
          <div className="product-image-container">
            <img
              className="product_img"
              src={product.image}
              alt={product.alt}
            />
          </div>
          <div className="product-info-container">
            <div className="info-1">
              <div className="info1-1">{product.title}</div>
              <div className="info1-2-1">
                <div className="location">{product.location}</div>
                <div className="dot">·</div>
                <div className="date">{product.date}</div>
              </div>
              <div className="info1-2-2">{product.price}</div>
            </div>
            <div className="info-2">
              {product.likes && (
                <div className="likes">
                  <img src="/assets/heart.svg" alt="" className="heart" />
                  <div className="like-number">{product.likes}</div>
                </div>
              )}
              {product.chats && (
                <div className="chats">
                  <img src="/assets/text.svg" alt="" className="text" />
                  <div className="chat-number">{product.chats}</div>
                </div>
              )}
            </div>
          </div>
        </button>
      </section>
      <div className="horizon"></div>
    </>
  );
};

export default ProductPost;
