import React, { useState, useEffect } from 'react'
import BarCharts from '../../Charts/BarChart'
import RedarChart from '../../Charts/RedarChart'
import LineChart from '../../Charts/LineChart'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import './Home.css'
import { InputLabel, Select, MenuItem } from '@material-ui/core'
import WidgetSmall from '../../WidgetSmall/WidgetSmall'
import WidgetLarge from '../../WidgetLarge/WidgetLarge'
import { db } from "../../../firebase.config"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { usePageVisibility } from 'react-page-visibility';

function Home() {
  const [currentTimeSecond, setCurrentTimeSecond] = useState()
  const [spellData_Pekka, setSpellData_Pekka] = useState([])
  const [spellData_Healer, setSpellData_Healer] = useState([])
  const [spellData_Wizard, setSpellData_Wizard] = useState([])
  const [spellData_Archer, setSpellData_Archer] = useState([])
  const [matchData, setMatchData] = useState([])

  const isVisible = usePageVisibility()

  // 3minutes
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('This will run every second!')
      let today = new Date()
      let sec_time = today.getUTCSeconds()
      let min_time = today.getUTCMinutes()
      let h_time = today.getUTCHours()
      setCurrentTimeSecond(60 - sec_time)
      if (min_time % 3 === 0) {
        // update spell id for games
        if (sec_time == 2) {
          getData()
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setMatchData([])
    getMatchUpdate()
  }, [spellData_Pekka])

  useEffect(() => {
    getData()
  }, [isVisible])

  async function getData() {
    await getSpellData("Pekka")
    await getSpellData("Healer")
    await getSpellData("Wizard")
    await getSpellData("Archer")
  }

  /** Get Current Spell Id */
  async function getSpellData(gameName) {
    const today = new Date()
    const dd = String(today.getUTCDate()).padStart(2, '0')
    const mm = String(today.getUTCMonth() + 1).padStart(2, '0')
    const yyyy = today.getUTCFullYear()
    const startTime = parseInt(today.getUTCMinutes()) - parseInt(today.getUTCMinutes() % 3)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        utcH: today.getUTCHours(),
        utcM: startTime,
        gameName: gameName,
        constTime: 3,
        utcdate: mm + '/' + dd + '/' + yyyy
      })
    }
    await fetch('https://us-central1-betting-9623d.cloudfunctions.net/CurrentSpell', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data?.data?.length > 0) {
          if (gameName == "Pekka") {
            setSpellData_Pekka(data?.data)
          } else if (gameName == "Healer") {
            setSpellData_Healer(data?.data)
          } else if (gameName == "Wizard") {
            setSpellData_Wizard(data?.data)
          } else if (gameName == "Archer") {
            setSpellData_Archer(data?.data)
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getMatchUpdate = async () => {
    const matchRef = query(collection(db, "myMatches"))
    const myMatches = onSnapshot(matchRef, (querySnapshot) => {
      console.log("getMatchUpdate EXICUTED")
      let matchmpData = []
      querySnapshot.forEach((doc) => {
        matchmpData.push({ doc_Id: doc?.id, data: doc?.data() })
      })
      setMatchData(matchmpData)
    })
  }

  useEffect(() => {
    console.log(matchData?.length, "HHHHHHHHHHHHHHHHHHHH")
  }, [matchData])

  return (
    <div className='home'>
      {/* <FeaturedInfo /> */}
      <BarCharts
        dataset={matchData}
        key={[matchData]}
        pekka={spellData_Pekka}
        PID={spellData_Pekka?.[0]?.id}
        HID={spellData_Healer?.[0]?.id}
        WID={spellData_Wizard?.[0]?.id}
        AID={spellData_Archer?.[0]?.id}
      />
      <div className='homeWidget'>
        <WidgetSmall />
        <WidgetLarge />

      </div>
      {/* <div className='homeWidget'>
        <RedarChart />
        <LineChart />
      </div> */}
    </div>
  )
}

export default Home