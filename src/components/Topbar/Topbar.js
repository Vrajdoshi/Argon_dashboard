import React from "react";
import "./Topbar.css";
import {Settings, PermIdentity } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DASHBOARD</span>
        </div>
        <div className="topRight">
        <form className="form-inline mx-auto">
              <input class="form-control mx-auto" type="search" placeholder="Search" aria-label="Search"  />
             </form>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <PermIdentity className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
}