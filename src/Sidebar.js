import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar_recentItems">
      <span className="sidebar_hash">#</span>
      <p>{topic} </p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/15/20/17/color-1909977_960_720.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,444</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("softwareengineering")}
        {recentItems("design")}
        {recentItems("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
