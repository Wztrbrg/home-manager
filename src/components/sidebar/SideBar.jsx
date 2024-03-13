import React from "react";
import "../../assets/style/sidebar/sidebar.scss"
import SidebarCategory from "./SidebarCategory";

function SideBar () {

  return (
    <>
      <div className="side-bar">
        <SidebarCategory />
      </div>
    </>
  )
}

export default SideBar;