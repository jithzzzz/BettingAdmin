import React from 'react'
import LineChart from '../../Charts/LineChart'
import './OverView.css'
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';

function OverView() {
  return (
    <div className='overview'>
        <div className='overViewTitleContainer'>
            <h1 className='overviewTitle'>Overview</h1>

        </div>
        <div className='overViewTop'>
            <div className='topLeft'>
                <LineChart/>
            </div>
            <div className='topRight'>
            <div className='featured'>
                <div className='featuredItems'>
                    <span className='featuredTitle'style={{color:'gray'}}>Revanue</span>
                        <div className='featuredMonetContainer'>
                            <span className='featuredMoney'>2,415</span>
                                <span className='featuredMoneyRate'>1000<ArrowUpward className='featuredIcon '/></span>
                         </div>
                            <span className='featuredSub'>Total Revanue till now</span>
                </div>
                </div>
            </div>
        </div>
        <div className='overViewBottom'></div>
    </div>
  )
}

export default OverView