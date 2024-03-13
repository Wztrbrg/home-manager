import React from "react";
import "../assets/style/display/topnav.scss";

function TopNav () {
  return (
    <header className="top-nav-container">
      <h3>Welcome back User</h3>
      <nav className="user-nav">
        <div className="user-img"></div>
        <button>Log out</button>
      </nav>
    </header>
  )
}

export default TopNav;