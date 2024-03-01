import React from "react";
import { Outlet } from "react-router";
import "../../assets/style/display/display.scss";

function Display() {

  return (
    <div className="display-wrapper">
      <h2>Display header</h2>
      <div className="display-content">
        <Outlet />
      </div>
      
    </div>
  );
}

export default Display;