import React from "react";
import "../../assets/style/sidebar/sidebar.scss"
import SidebarUser from "./SidebarUser";
import SidebarCategory from "./SidebarCategory";

function SideBar () {

  return (
    <>
      <div className="side-bar">
        <SidebarUser />
        <SidebarCategory />
      </div>
    </>
  )
}

export default SideBar;