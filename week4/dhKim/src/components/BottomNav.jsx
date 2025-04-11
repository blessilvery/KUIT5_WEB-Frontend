import React from "react";

const BottomNav=()=>{
    return(
        <nav className="bottom-bar">
        <button type="button">
            <div className="bottom_home">
                <span>
                    <img src="/assets/home.svg" alt="홈"></img>
                </span>
                <span className="bottom_nav_letter">
                    홈
                </span>
            </div>
        </button>
        <button type="button">
            <div className="bottom_news">
                <span>
                    <img src="/assets/new.svg" alt="동네생활"></img>
                </span>
                <span className="bottom_nav_letter">
                    동네생활
                </span>
            </div>
        </button>
        <button type="button">
            <div className="bottom_loc">
                <span>
                    <img src="/assets/location.svg" alt="내 근처처"></img>
                </span>
                <span className="bottom_nav_letter">
                    내 근처
                </span>
            </div>
        </button>
        <button type="button">
            <div className="bottom_chat">
                <span>
                    <img src="/assets/chat_bottom.svg" alt="채팅"></img>
                </span>
                <span className="bottom_nav_letter">
                    채팅
                </span>
            </div>
        </button>
        <button type="button">
            <div className="bottom_my">
                <span>
                    <img src="/assets/my.svg" alt="나의 당근"></img>
                </span>
                <span className="bottom_nav_letter">
                    나의 당근
                </span>
            </div>
        </button>
    </nav>
    );
};

export default BottomNav;