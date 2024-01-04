import React from "react";
import "./VideoRow.css";
import Avatar from "@mui/material/Avatar";

const VideoRow = ({
  title,
  image,
  views,
  time,
  channel,
  channelImage,
  description,
}) => (
  <div className="videoRow">
    <img src={image} alt="" />
    <div className="videoRow__info">
      <h3>{title}</h3>
      <p className="videoRow__headline">
        {views} views • {time}
      </p>
      <div className="videoRow__channel">
        <Avatar alt={channel} src={channelImage} className="videoRow__icon" />
        <p>{channel}</p>
      </div>
      <p className="videoRow__description">{description}</p>
    </div>
  </div>
);

export default VideoRow;
