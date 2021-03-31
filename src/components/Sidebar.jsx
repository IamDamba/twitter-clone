import React from 'react';
import '../Styles/Sidebar/Sidebar.css';

import TwitterIcon from "@material-ui/icons/Twitter.js";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Search";
import NotifIcon from "@material-ui/icons/Notifications";
import MessageIcon from '@material-ui/icons/Message';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { Button } from "@material-ui/core";

import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"/>

      <SidebarOption active text="Home" Icon={HomeIcon}/>
      <SidebarOption text="Explore" Icon={ExploreIcon}/>
      <SidebarOption text="Notification" Icon={NotifIcon}/>
      <SidebarOption text="Messages" Icon={MessageIcon}/>
      <SidebarOption text="Bookmarks" Icon={BookmarkIcon}/>
      <SidebarOption text="Lists" Icon={ListAltIcon}/>
      <SidebarOption text="Profile" Icon={AccountBoxIcon}/>
      <SidebarOption text="More" Icon={MoreHorizIcon}/>
      
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar;
