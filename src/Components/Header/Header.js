import React from 'react'
import './Header.css'
import {NotificationsNone,Settings,PowerSettingsNew,AddCircle} from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className='topbar'>
        <div className='topbarwrapper'>
          <div className='topleft'>
            <span className='logo'>Betting Admin</span>
          </div>
          <div className='topright'>
          <div className='para'>
              <p className='para'>Welcome Admin</p>
            </div>
            <div className='topbarIconContainer'>
              <PowerSettingsNew/>
             
            </div>
            <div className='topbarIconContainer'>
              <Link to="/addAdmin" className='link'>
              <AddCircle/>
              </Link>
            </div>
            <div className='topbarIconContainer'>
              <NotificationsNone/>
              <span className='topiconBadge'>2</span>
            </div>
            <div className='topbarIconContainer'>
              <Settings/>
            </div>
            <img src='avatar.png'alt=''className='topavatar'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
