import React, { useState } from 'react'
import BarChart from '../../Charts/BarChart'
import RedarChart from '../../Charts/RedarChart'
import LineChart from '../../Charts/LineChart'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import './Home.css'
import {InputLabel, Select, MenuItem} from '@material-ui/core'
import WidgetSmall from '../../WidgetSmall/WidgetSmall'
import WidgetLarge from '../../WidgetLarge/WidgetLarge'

function Home() {
  
  return (
    <div className='home'>
      <FeaturedInfo/>
      <BarChart/>
      <div className='homeWidget'>
      <WidgetSmall/>
      <WidgetLarge/>
      
      </div>
      <div className='homeWidget'>
      <RedarChart/>
      <LineChart/>
      
      </div>
      
  
      
    </div>
  )
}

export default Home