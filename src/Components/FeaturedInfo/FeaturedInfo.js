import React from 'react'
import './FeaturedInfo.css'
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';

function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className='featuredItems'>
            <span className='featuredTitle'style={{color:'gray'}}>Revanue</span>
            <div className='featuredMonetContainer'>
                <span className='featuredMoney'>2,415</span>
                <span className='featuredMoneyRate'>1000<ArrowUpward className='featuredIcon '/></span>
            </div>
            <span className='featuredSub'>Total Revanue till now</span>
        </div>
        <div className='featuredItems'>
            <span className='featuredTitle'style={{color:'Green'}}>Green</span>
            <div className='featuredMonetContainer'>
                <span className='featuredMoney'>2,415</span>
                <span className='featuredMoneyRate'>200<ArrowDownward className='featuredIcon negetive'/></span>
            </div>
            <span className='featuredSub'>Total Revanue till now</span>
        </div>
        <div className='featuredItems'>
            <span className='featuredTitle'style={{color:'Red'}}>Red</span>
            <div className='featuredMonetContainer'>
                <span className='featuredMoney'>2,415</span>
                <span className='featuredMoneyRate'>900<ArrowUpward className='featuredIcon '/></span>
            </div>
            <span className='featuredSub'>Total Revanue till now</span>
        </div>
        <div className='featuredItems'>
            <span className='featuredTitle' style={{color:'Gold'}}>Gold</span>
            <div className='featuredMonetContainer'>
                <span className='featuredMoney'>2,415</span>
                <span className='featuredMoneyRate'>300<ArrowUpward className='featuredIcon '/></span>
            </div>
            <span className='featuredSub'>Total Revanue till now</span>
        </div>
    </div>
    
  )
}

export default FeaturedInfo