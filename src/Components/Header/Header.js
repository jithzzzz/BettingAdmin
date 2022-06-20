import React, { useState, useEffect } from 'react'
import './Header.css'
import { NotificationsNone, Settings, PowerSettingsNew, AddCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { useAuth } from "../../Auth/Auth"
function Header() {
  const auth = useAuth()
  // 3 minutes
  const [currentTimeSecond, setCurrentTimeSecond] = useState("00")
  const [currentTimeMinutes, setCurrentTimeMinutes] = useState(0)
  const [gameLock, setGameLock] = useState(false)
  const [latestSpell, setLatestSpell] = useState([])

  useEffect(() => {
    const interval_Pekka = setInterval(() => {
      // console.log('This will run every second!')
      let today = new Date()
      let sec_time = today.getUTCSeconds()
      let min_time = today.getUTCMinutes()
      let h_time = today.getUTCHours()

      // console.log("Houre : ", h_time)
      // console.log("Minutes : ", min_time)

      setCurrentTimeSecond(60 - sec_time)
      if (min_time % 3 === 0) {
        if (sec_time == 2) {
          // getSpell("Pekka", 3)
          // toast.dismiss(notifyLoading)
        }
        setCurrentTimeMinutes("02")
      } else if (min_time % 3 === 1) {
        setCurrentTimeMinutes("01")
      } else if (min_time % 3 === 2) {
        setCurrentTimeMinutes("00")
      }
      if (min_time % 3 === 2 && sec_time >= 30) {
        setGameLock(true)
      } else {
        setGameLock(false)
      }
    }, 1000);
    return () => clearInterval(interval_Pekka);
  }, [currentTimeSecond])

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
            {/* <div className='topbarIconContainer' onClick={() => { auth.logout() }}>
              <PowerSettingsNew />
            </div> */}
            <div className='topbarIconContainer' onClick={() => { auth.logout() }}>
              <p style={{
                color: "#fff",
                fontSize: "20px"
              }}>
                <span>Spell Timer </span>
                <span>{currentTimeMinutes}</span>
                <span>:</span>
                <span> {currentTimeSecond}</span>
              </p>
            </div>
            {/* <div className='topbarIconContainer'>
              <Link to="/addAdmin" className='link'>
                <AddCircle />
              </Link>
            </div> */}
            {/* <div className='topbarIconContainer'>
              <NotificationsNone />
              <span className='topiconBadge'>2</span>
            </div> */}
            {/* <div className='topbarIconContainer'>
              <Settings />
            </div> */}
            <img src='avatar.png' alt='' className='topavatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
