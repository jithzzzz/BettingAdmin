
import { Button } from '@material-ui/core'
import './WidgetSmall.css'
import { Visibility } from '@material-ui/icons/'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase.config"
import { useState, useEffect } from "react"

function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([])
  useEffect(() => {
    async function newUsersList() {
      const usersRef = collection(db, "users")
      const usersQuery = query(usersRef)
      const usersQuerySnaphshot = await getDocs(usersQuery)
      let usersTmpData = []
      usersQuerySnaphshot.forEach((doc) => {
        usersTmpData.push({ id: doc?.id, name: doc?.data()?.name, pho: doc?.data()?.pho, status: 'Active', createdAt: doc?.data()?.createdAt })
      })
      setNewUsers(usersTmpData)
    }
    newUsersList()
  }, [])
  return (
    <div className='widgetSm'>
      <div className='widgetLgHedder'>
        <span className='widgetSmTitle'> New Members</span>
        <button className='widgetLgSeeMore'>See More</button>
      </div>
      <ul className='widgetSmList'>
        {
          newUsers?.map((item, index) => {
            return (
              <li className='widgetSmListItems' key={index}>
                <img src='user1.png' alt='' className='widgetSmImage'></img>
                <div className='widgetSmUser'>
                  <span className='widgetSmUserName'>{item?.name}</span>
                  <span className='widgetSmUserMobile'>{item?.pho}</span>
                  <span className='widgetSmUserMobile'>{`${item?.createdAt?.toDate()}`}</span>
                </div>
                <button className='widgetSmButton'><Visibility className='widgetSmIcon' /> Display</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default WidgetSmall