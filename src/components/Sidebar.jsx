import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import SlowMotionVideoRoundedIcon from "@mui/icons-material/SlowMotionVideoRounded";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import MusicNoteTwoToneIcon from "@mui/icons-material/MusicNoteTwoTone";
import MovieCreationSharpIcon from "@mui/icons-material/MovieCreationSharp";
import SensorsSharpIcon from "@mui/icons-material/SensorsSharp";
import VideogameAssetSharpIcon from "@mui/icons-material/VideogameAssetSharp";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PodcastsSharpIcon from "@mui/icons-material/PodcastsSharp";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
      <SidebarRow Icon={SlowMotionVideoRoundedIcon} title="Shorts" />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibrarySharpIcon} title="You" />
      <SidebarRow Icon={HistorySharpIcon} title="History" />
      <hr />
      <h2>Explore</h2>
      <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SidebarRow Icon={MusicNoteTwoToneIcon} title="Music" />
      <SidebarRow Icon={MovieCreationSharpIcon} title="Movies" />
      <SidebarRow Icon={SensorsSharpIcon} title="Live" />
      <SidebarRow Icon={VideogameAssetSharpIcon} title="Gaming" />
      <SidebarRow Icon={NewspaperSharpIcon} title="News" />
      <SidebarRow Icon={EmojiEventsOutlinedIcon} title="Sports" />
      <SidebarRow Icon={PodcastsSharpIcon} title="Podcasts" />
      <hr />
    </div>
  );
}

export default Sidebar;
