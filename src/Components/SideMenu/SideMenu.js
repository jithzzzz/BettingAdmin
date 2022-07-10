import React from 'react'
import './SideMenu.css'
import { LineStyle, MonetizationOn, PermIdentity, Timeline,
     TrendingUp,AccessTime, MoneyTwoTone, AssignmentTwoTone,
     SupervisorAccountTwoTone, AdbTwoTone } from '@material-ui/icons';
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
                        {/* <Link to="/stats" className='link'>
                            <li className='sidebarListItems'><MonetizationOn className='sidebarIcon' />Stats</li>
                        </Link> */}
                        <Link to="/betting" className='link'>
                            <li className='sidebarListItems'><AdbTwoTone className='sidebarIcon' />Betting Info</li>
                        </Link>
                        <Link to="/resultOnly" className='link'>
                            <li className='sidebarListItems'><AssignmentTwoTone className='sidebarIcon' />Result</li>
                        </Link>
                        {/* <Link to="/analytics" className='link'>
                            <li className='sidebarListItems'><Timeline className='sidebarIcon' />Analytics</li>
                        </Link> */}
                        {/* <Link to="/overview" className='link'>
                            <li className='sidebarListItems'><MonetizationOn className='sidebarIcon' />Overview</li>
                        </Link> */}
                        
                        {/* <li className='sidebarListItems'><TrendingUp className='sidebarIcon' />Feedback</li> */}
                    </ul>
                </div>
                {/* QuickMenu */}
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>QuickMenu</h3>
                    <ul className='sidebarList'>
                        
                        <Link to="/result" className='link'>
                        <li className='sidebarListItems'><Timeline className='sidebarIcon' />Shedule Bet</li>
                        </Link>
                        <Link to="/users" className='link'>
                            <li className='sidebarListItems'><PermIdentity className='sidebarIcon' />Users</li>
                        </Link>
                        <Link to="/slider" className='link'>
                            <li className='sidebarListItems'><AccessTime className='sidebarIcon' />Run Spell</li>
                        </Link>
                    </ul>
                </div>
                {/* NOTIFICATIONS */}
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                    <Link to="/withdraw" className='link'>
                            <li className='sidebarListItems'><MoneyTwoTone className='sidebarIcon' />Withdrow Request</li>
                        </Link>
                        {/* <li className='sidebarListItems'><LineStyle className='sidebarIcon' />Mail</li>
                        <li className='sidebarListItems'><Timeline className='sidebarIcon' />Withdrow Request</li>
                        <li className='sidebarListItems'><TrendingUp className='sidebarIcon' />Messages</li>
                        <li className='sidebarListItems'><TrendingUp className='sidebarIcon' />Feedback</li> */}
                    </ul>
                </div>
                {/* STAFF */}
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <Link to='/addAdmin' className='link'>
                            <li className='sidebarListItems'><SupervisorAccountTwoTone className='sidebarIcon' />Manage Admin</li>
                        </Link>
                        <Link to="/newUser" className='link'>
                            <li className='sidebarListItems'><PermIdentity className='sidebarIcon' />Manage User</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SideMenu