import React from "react";
import { ChannelRow, VideoRow } from "../components";
import "./SearchPage.css";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <h2>Filters</h2>
        <TuneSharpIcon />
      </div>
      <ChannelRow
        channel="林亦LYi"
        image="https://yt3.googleusercontent.com/deuGdeYGRX8avhx2Hnz75VVMK6NSc_VZQUidCbs69OqNg9o5DHCn2-XDHe9JfrD5B89LifoYgg=s176-c-k-c0x00ffffff-no-rj"
        id="@lyi"
        numSubscribers="150k"
        description="做一点微小的科技工作。推特、微博、知乎、bilibili:林亦LYi 邮箱:LyTech@outlook.com        "
      />
      <hr />
      <VideoRow
        title="我要回去当程序员了"
        image="https://i.ytimg.com/vi/My2Dx5x7svk/maxresdefault.jpg"
        views="54K views"
        time="17 hours ago"
        channel="林亦LYi"
        channelImage="https://yt3.googleusercontent.com/deuGdeYGRX8avhx2Hnz75VVMK6NSc_VZQUidCbs69OqNg9o5DHCn2-XDHe9JfrD5B89LifoYgg=s176-c-k-c0x00ffffff-no-rj"
        description="123"
      />
    </div>
  );
}

export default SearchPage;
