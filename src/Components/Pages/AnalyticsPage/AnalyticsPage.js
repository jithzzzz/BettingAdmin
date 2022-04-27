import React from 'react'
import BarChart from '../../Charts/BarChart'
import LineChart from '../../Charts/LineChart'
import PieChart from '../../Charts/PieChart'
import RedarChart from '../../Charts/RedarChart'
import "./AnalyticsPage.css"

function AnalyticsPage() {
  return (
    <div className='analytics'>
        <h1 className='analyticsTitle'>Graphical Representation</h1>
        <div className='analyticsWrapper'>
        
           <div className='leftChart'>
               <LineChart/>
           </div>
           <div className='rightChart'>
               <RedarChart/>
           </div>
        </div>
        <div className='Bottom'>
               <BarChart/>
           </div>
           <div className='Bottom'>
               <PieChart/>
           </div>
    </div>
    
  )
}

export default AnalyticsPage