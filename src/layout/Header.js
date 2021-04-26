import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import CallIcon from "@material-ui/icons/Call";
import MessageIcon from "@material-ui/icons/Message";
import ForumIcon from "@material-ui/icons/Forum";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className='home__header'>
      <div className='home__headerLeft'>
        <Link to='file'>file</Link>
        <Link to='Edit'>Edit</Link>
        <Link to='Help'>Help</Link>
      </div>
      <div className='home__headerMiddle'>
        <div className='headerMidIcons'>
          <HomeIcon />
          <Link to='home'>Home</Link>
        </div>
        <div className='headerMidIcons'>
          <MessageIcon />
          <Link to='message'>Message</Link>
        </div>
        <div className='headerMidIcons'>
          <CallIcon />
          <Link className='call' to='call'>
            Call
          </Link>
        </div>
        <div className='headerMidIcons'>
          <ForumIcon />
          <Link to='home'>Room</Link>
        </div>
        <div className='headerMidIcons'>
          <MeetingRoomIcon />
          <Link to='home'>Meetings</Link>
        </div>
        <div className='headerMidIcons'>
          <PermIdentityIcon />
          <Link to='home'>Add Contact</Link>
        </div>
      </div>

      <div className='home__headerRight'>
        <div className='header__input'>
          <input placeholder='Search' />
          <SearchIcon className='header__searchIcon' />
        </div>
      </div>
    </div>
  );
}

export default Header;
