import React from "react";
import "./ChannelRow.css";
import Avatar from "@mui/material/Avatar";

function ChannelRow({channel, image, id, numSubscribers, description}) {
  return (
    <div className="channelRow">
      <Avatar alt={channel} src={image} className="channelRow__icon" />
      <div className="channelRow__info">
        <h4>{channel}</h4>
        <p>{id} • {numSubscribers} subscribers</p>
      </div>
    </div>
  );
}

export default ChannelRow;
