import React from "react";
import "../../assets/style/sidebar/sidebaruser.scss";

function SidebarUser () {
  return (
    <div className="user-section">
      <h3>Welcome back User</h3>
      <div className="user-btn-container">
        <div className="user-img"></div>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default SidebarUser;