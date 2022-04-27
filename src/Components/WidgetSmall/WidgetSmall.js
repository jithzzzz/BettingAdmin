
import { Button } from '@material-ui/core'
import './WidgetSmall.css'
import {Visibility} from '@material-ui/icons/'

function WidgetSmall() {
  return (
    <div className='widgetSm'>
        <div className='widgetLgHedder'>
        <span className='widgetSmTitle'> New Members</span>
        <button className='widgetLgSeeMore'>See More</button>
        </div>
        <ul className='widgetSmList'>
            <li className='widgetSmListItems'>
                <img src='user1.png' alt='' className='widgetSmImage'></img>
                <div className='widgetSmUser'>
                    <span className='widgetSmUserName'>Ditto Sebastian</span>
                    <span className='widgetSmUserMail'>123@gmail.com</span>
                    <span className='widgetSmUserMobile'>123456789</span>
                </div>
                <button className='widgetSmButton'><Visibility className='widgetSmIcon'/> Display</button>
            </li>
        </ul>

        <ul className='widgetSmList'>
            <li className='widgetSmListItems'>
                <img src='user1.png' alt='' className='widgetSmImage'></img>
                <div className='widgetSmUser'>
                    <span className='widgetSmUserName'>Ditto Sebastian</span>
                    <span className='widgetSmUserMail'>123@gmail.com</span>
                    <span className='widgetSmUserMobile'>123456789</span>
                </div>
                <button className='widgetSmButton'><Visibility className='widgetSmIcon'/> Display</button>
            </li>
        </ul>

        <ul className='widgetSmList'>
            <li className='widgetSmListItems'>
                <img src='user1.png' alt='' className='widgetSmImage'></img>
                <div className='widgetSmUser'>
                    <span className='widgetSmUserName'>Ditto Sebastian</span>
                    <span className='widgetSmUserMail'>123@gmail.com</span>
                    <span className='widgetSmUserMobile'>123456789</span>
                </div>
                <button className='widgetSmButton'><Visibility className='widgetSmIcon'/> Display</button>
            </li>
        </ul>

        <ul className='widgetSmList'>
            <li className='widgetSmListItems'>
                <img src='user1.png' alt='' className='widgetSmImage'></img>
                <div className='widgetSmUser'>
                    <span className='widgetSmUserName'>Ditto Sebastian</span>
                    <span className='widgetSmUserMail'>123@gmail.com</span>
                    <span className='widgetSmUserMobile'>123456789</span>
                </div>
                <button className='widgetSmButton'><Visibility className='widgetSmIcon'/> Display</button>
            </li>
        </ul>

        <ul className='widgetSmList'>
            <li className='widgetSmListItems'>
                <img src='user1.png' alt='' className='widgetSmImage'></img>
                <div className='widgetSmUser'>
                    <span className='widgetSmUserName'>Ditto Sebastian</span>
                    <span className='widgetSmUserMail'>123@gmail.com</span>
                    <span className='widgetSmUserMobile'>123456789</span>
                </div>
                <button className='widgetSmButton'><Visibility className='widgetSmIcon'/> Display</button>
            </li>
        </ul>

        <ul className='widgetSmList'>
            <li className='widgetSmListItems'>
                <img src='user1.png' alt='' className='widgetSmImage'></img>
                <div className='widgetSmUser'>
                    <span className='widgetSmUserName'>Ditto Sebastian</span>
                    <span className='widgetSmUserMail'>123@gmail.com</span>
                    <span className='widgetSmUserMobile'>123456789</span>
                </div>
                <button className='widgetSmButton'><Visibility className='widgetSmIcon'/> Display</button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSmall