import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/sidebar/sidebarcategory.scss";

function SidebarCategory () {
  return (
    <div className="category-section">
      <nav className="category-nav">
        <ul className="category-list">
          <Link to="/">
            <li className="category-item active"><div className="category-icon"></div>Dashboard</li>
          </Link>
          <Link to="tasks">
            <li className="category-item"><div className="category-icon"></div>Tasks</li>
          </Link>
          <Link to="inventory">
            <li className="category-item"><div className="category-icon"></div>Inventory</li>
          </Link>
          <Link to="economy">
            <li className="category-item"><div className="category-icon"></div>Economy</li>
          </Link>
          <Link to="family">
            <li className="category-item"><div className="category-icon"></div>Family</li>
          </Link>
        </ul>
        <ul className="category-list">
          <Link to="profile">
            <li className="category-item"><div className="category-icon"></div>Profile</li>
          </Link>
          <Link to="settings">
            <li className="category-item"><div className="category-icon"></div>Settings</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default SidebarCategory;