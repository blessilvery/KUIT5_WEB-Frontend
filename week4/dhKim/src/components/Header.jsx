import React from 'react';

const Header = ({ location }) => {
    return (
        <section className="post-header">
            <header>
                <div className="place_live_button">
                    <button type="button">
                        <span className="place_live_letter">
                            {location}
                        </span>
                        <span className="arrow_container">
                            <img src="/assets/expan-arrow.svg" alt="확장버튼" />
                        </span>
                    </button>
                </div>
                <div className="post-header__icon-container">
                    <button type="button">
                        <img id="search" src="/assets/search.svg" alt="검색 버튼" />
                    </button>
                    <button type="button">
                        <img id="menu" src="/assets/menu.svg" alt="메뉴 버튼" />
                    </button>
                    <button type="button">
                        <img id="bell" src="/assets/bell.svg" alt="벨 버튼" />
                    </button>
                </div>
            </header>
        </section>
    );
};

export default Header;