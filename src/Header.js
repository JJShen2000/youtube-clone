import React from 'react'
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuSharpIcon />
        <img className='header__logo' 
        src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
        alt=''/> 
      </div>

      <div className='header__center'>
        <div className='header__input'>
          <input type='text' placeholder="Search"/>
          <SearchSharpIcon className='header__inputButton'/>
        </div>
        <MicIcon />
      </div>

      <div className='header__icons'>
        <VideoCallSharpIcon className='header__icon'/>
        <NotificationsNoneSharpIcon className='header__icon'/>
        <Avatar alt="JJShen" src="https://avatars.githubusercontent.com/u/40858520?v=4" className='header__icon'/>
      </div>
    </div>
  )
}

export default Header
