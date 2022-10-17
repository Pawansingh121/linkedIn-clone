import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("React js", "Top news - 9877 readers")}
      {newsArticle("Coronavirus:Updatea", "Top News - 5677 readers")}
      {newsArticle("Ukraine Russia war", "World News -4000 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 67778 readers")}
      {newsArticle(
        "Apple launch Iphone 14 series",
        "Mobile & technology - 10999 readers"
      )}
    </div>
  );
};

export default Widgets;
