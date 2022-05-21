import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as chartjs } from 'chart.js/auto'
import { InputLabel, Select, MenuItem } from '@material-ui/core'
function BarChart() {
  const [chartstate, setChartState] = useState("")
  return (
    <div className='chart'>
      <div className='chartData'>
        <h3 className='chartTitle'>Betting Analytics on current Spell 23456789</h3>
        <h3 className='chartName'>{chartstate}</h3>
        <div className='selection'>
          {/* <InputLabel > Select Any Chart</InputLabel> */}
          {/* <Select className='container p-5' onChange={(e) =>{
          const  selectedChart=e.target.value;
          setChartState(selectedChart)
        }}>
           <MenuItem value='Bar' >BAR CHART</MenuItem>
           <MenuItem value='Line Chart'>Line CHART</MenuItem>
           <MenuItem value='Pie Chart'>Pie CHART</MenuItem>
           <MenuItem value='Redar Chart'>Redar CHART</MenuItem>
        </Select> */}
        </div>
      </div>
      <div>
        <Bar
          data={{
            labels: ['Red', 'Green', 'Gold', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3, 10, 3, 44, 25, 6, 33, 26, 10],
              backgroundColor: [
                'rgba(255, 41, 41, 0.5)',
                'rgba(116, 250, 20, 0.5)',
                'rgba(255, 241, 38, 0.5)',
                'rgba(255, 41, 41, 0.5)',
                'rgba(116, 250, 20, 0.5)',
                'rgba(255, 41, 41, 0.5)',
                'rgba(116, 250, 20, 0.5)',
                'rgba(255, 241, 38, 0.5)',
              ],
              borderColor: [
                'rgba(255, 41, 41, 1)',
                'rgba(116, 250, 20, 1)',
                'rgba(255, 241, 38, 1)',
                'rgba(255, 41, 41, 1)',
                'rgba(116, 250, 20, 1)',
                'rgba(255, 41, 41, 1)',
                'rgba(116, 250, 20, 1)',
                'rgba(255, 241, 38, 1)',
              ],
              borderWidth: 5
            }]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  )
}

export default BarChart
