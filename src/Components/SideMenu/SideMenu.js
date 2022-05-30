import React from 'react'
import './SideMenu.css'
import { LineStyle, MonetizationOn, PermIdentity, Timeline, TrendingUp } from '@material-ui/icons';
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
                            <li className='sidebarListItems active'><LineStyle className='sidebarIcon' />Home</li>
                        </Link>
                        <Link to="/analytics" className='link'>
                            <li className='sidebarListItems'><Timeline className='sidebarIcon' />Analytics</li>
                        </Link>
                        <Link to="/overview" className='link'>
                            <li className='sidebarListItems'><MonetizationOn className='sidebarIcon' />Overview</li>
                        </Link>
                        <Link to="/withdraw" className='link'>
                            <li className='sidebarListItems'><Timeline className='sidebarIcon' />Withdrow Request</li>
                        </Link>
                        <li className='sidebarListItems'><TrendingUp className='sidebarIcon' />Feedback</li>
                    </ul>
                </div>
                {/* QuickMenu */}
                {/* <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>QuickMenu</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItems'><Timeline className='sidebarIcon' />Shedule Bet</li>
                        <Link to="/users" className='link'>
                            <li className='sidebarListItems'><PermIdentity className='sidebarIcon' />Users</li>
                        </Link>
                        <li className='sidebarListItems'><Timeline className='sidebarIcon' />Product</li>
                        <li className='sidebarListItems'><TrendingUp className='sidebarIcon' />Transations</li>
                        <li className='sidebarListItems'><TrendingUp className='sidebarIcon' />Report</li>
                    </ul>
                </div> */}
                {/* NOTIFICATIONS */}
                {/* <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItems'><LineStyle className='sidebarIcon' />Mail</li>
                        <li className='sidebarListItems'><Timeline className='sidebarIcon' />Withdrow Request</li>
                        <li className='sidebarListItems'><TrendingUp className='sidebarIcon' />Messages</li>
                        <li className='sidebarListItems'><TrendingUp className='sidebarIcon' />Feedback</li>
                    </ul>
                </div> */}
                {/* STAFF */}
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <Link to='/addAdmin' className='link'>
                            <li className='sidebarListItems'><LineStyle className='sidebarIcon' />Manage Admin</li>
                        </Link>
                        <Link to="/newUser" className='link'>
                            <li className='sidebarListItems'><TrendingUp className='sidebarIcon' />Manage User</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SideMenu