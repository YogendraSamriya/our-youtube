/*

import "../styles/sidebar.css"
import { Link } from "react-router-dom"

function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      <Link to="/">
        <span>🏠</span>
        {!collapsed && <span> Home</span>}
      </Link>

      <Link to="/upload">
        <span>⬆</span>
        {!collapsed && <span> Upload</span>}
      </Link>

      <Link to="/login">
        <span>🔐</span>
        {!collapsed && <span> Login</span>}
      </Link>

      <Link to="/register">
        <span>📝</span>
        {!collapsed && <span> Register</span>}
      </Link>

    </aside>
  )
}

export default Sidebar

*/

import React from "react";
import {
  Home,
  Flame,
  Video,
  Clock,
  ThumbsUp,
  PlaySquare,
  Settings
} from "lucide-react";

const Sidebar = ({ collapsed }) => {
  const menuItems = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <Flame size={20} />, label: "Trending" },
    { icon: <Video size={20} />, label: "Subscriptions" },
    { icon: <Clock size={20} />, label: "History" },
    { icon: <ThumbsUp size={20} />, label: "Liked Videos" },
    { icon: <PlaySquare size={20} />, label: "Your Videos" },
    { icon: <Settings size={20} />, label: "Settings" }
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          {item.icon}
          {!collapsed && <span>{item.label}</span>}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;