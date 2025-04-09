
function UpperNav (){
    return (
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
    )
}

export default UpperNav