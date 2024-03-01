import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../assets/style/mainwindow.scss";
import SideBar from "./sidebar/SideBar";
import Display from "./display/Display";
import Dashboard from "./sidebar/tabs/Dashboard";
import Tasks from "./sidebar/tabs/Tasks";
import Inventory from "./sidebar/tabs/Inventory";
import Economy from "./sidebar/tabs/Economy";
import Family from "./sidebar/tabs/Family";
import Profile from "./sidebar/tabs/Profile";
import Settings from "./sidebar/tabs/Settings";

function MainWindow () {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="main-window">
        <SideBar />
        <Routes>
          <Route path="/" element={<Display />}>
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="economy" element={<Economy />} />
            <Route path="family" element={<Family />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default MainWindow;