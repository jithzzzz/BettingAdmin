import React from 'react'
import { Pie } from 'react-chartjs-2'

function PieChart() {
  return (
    <div>
     <Pie
     data={{
       labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 41, 41, 0.5)',
                'rgba(116, 250, 20, 0.5)',
                'rgba(255, 241, 38, 0.5)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 41, 41, 1)',
                'rgba(116, 250, 20, 1)',
                'rgba(255, 241, 38, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5
        }]
     }}
     height={400}
     width={600}
     options = {{
       maintainAspectRatio:false,
     }}
     />
    </div>
  )
}

export default PieChart
