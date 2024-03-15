import React from "react";
import { Outlet } from "react-router";
import TopNav from "../TopNav";
import "../../assets/style/display/display.scss";

function Display() {

  return (
    <div className="display-wrapper">
      <TopNav />
      <Outlet />      
    </div>
  );
}

export default Display;