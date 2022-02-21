import "./Sidebar.css";
import {
  LineStyle,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Icons
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Maps
            </li>
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              User Profile
            </li>
          
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Tables
            </li>
          
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Register
            </li>
          
          
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DOCUMENTATION</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Getting started
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Foundation
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Componets
            </li>
          </ul>
        </div>
        <div>
        <li className="sidebarListItem">
              Upgrade To Pro
            </li>
            
        </div>
        
      </div>
    </div>
  );
}
