import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/sidebar/sidebarcategory.scss";

function SidebarCategory () {
  return (
    <div className="category-section">
      <nav className="category-nav">
        <ul className="category-list">
          <li className="category-item active"><div className="category-icon"></div>Dashboard</li>
          <li className="category-item"><div className="category-icon"></div>Tasks</li>
          <li className="category-item"><div className="category-icon"></div>Inventory</li>
          <li className="category-item"><div className="category-icon"></div>Economy</li>
          <li className="category-item"><div className="category-icon"></div>Family</li>
        </ul>
        <ul className="category-list">
          <li className="category-item"><div className="category-icon"></div>Profile</li>
          <li className="category-item"><div className="category-icon"></div>Settings</li>
        </ul>
      </nav>
    </div>
  )
}

export default SidebarCategory;