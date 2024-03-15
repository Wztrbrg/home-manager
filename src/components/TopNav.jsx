import React from "react";
import "../assets/style/display/topnav.scss";

function TopNav () {
  return (
    <header className="top-nav-container">
      <h3 className="top-nav-heading">Hello<br/><span className="top-nav-heading-span">User</span></h3>
      <nav className="user-nav">
        <div className="user-img"></div>
      </nav>
    </header>
  )
}

export default TopNav;