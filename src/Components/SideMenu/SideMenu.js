import React from 'react'
import './SideMenu.css'
import {LineStyle,MonetizationOn,PermIdentity,Timeline,TrendingUp} from '@material-ui/icons';
import { Link } from 'react-router-dom'

function SideMenu() {
  return (
    <div className='sidebar'>
        <div className='sdebarWrapper'>
{/* DashBOARD */}
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to="/" className='link'>
                    <li className='sidebarListItems active'><LineStyle className='sidebarIcon'/>Home</li>
                    </Link>
                    <Link to="/analytics" className='link'>
                    <li className='sidebarListItems'><Timeline ClassName='sidebarIcon'/>Analytics</li>
                    </Link>
                    <Link to="/overview" className='link'>
                    <li className='sidebarListItems'><MonetizationOn ClassName='sidebarIcon'/>Overview</li>  
                    </Link>  
                    
                </ul>
            </div>
{/* QuickMenu */}
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>QuickMenu</h3>
                <ul className='sidebarList'>
                <li className='sidebarListItems'><Timeline ClassName='sidebarIcon'/>Shedule Bet</li>
                    <Link to="/users" className='link'>
                    <li className='sidebarListItems'><PermIdentity className='sidebarIcon'/>Users</li>
                    </Link>
                    <li className='sidebarListItems'><Timeline ClassName='sidebarIcon'/>Product</li>
                    <li className='sidebarListItems'><TrendingUp ClassName='sidebarIcon'/>Transations</li> 
                    <li className='sidebarListItems'><TrendingUp ClassName='sidebarIcon'/>Report</li>    
                </ul>
            </div>
{/* NOTIFICATIONS */}
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItems'><LineStyle className='sidebarIcon'/>Mail</li>
                    <li className='sidebarListItems'><Timeline ClassName='sidebarIcon'/>Withdrow Request</li>
                    <li className='sidebarListItems'><TrendingUp ClassName='sidebarIcon'/>Messages</li> 
                    <li className='sidebarListItems'><TrendingUp ClassName='sidebarIcon'/>Feedback</li>    
                </ul>
            </div>
{/* STAFF */}
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <Link to='/addAdmin' className='link'>
                    <li className='sidebarListItems'><LineStyle className='sidebarIcon'/>Manage Admin</li>
                    </Link>
                    <Link to="/newUser" className='link'>
                    <li className='sidebarListItems'><TrendingUp ClassName='sidebarIcon'/>Manage User</li> 
                    </Link>
                    <li className='sidebarListItems'><Timeline ClassName='sidebarIcon'/>Analytics</li>
                    <li className='sidebarListItems'><TrendingUp ClassName='sidebarIcon'/>Reports</li> 
                       
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default SideMenu