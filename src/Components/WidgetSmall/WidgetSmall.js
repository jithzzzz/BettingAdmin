
import { Button } from '@material-ui/core'
import './WidgetSmall.css'
import { Visibility } from '@material-ui/icons/'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase.config"
import { useState, useEffect } from "react"

function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [users, setUsers] = useState(false)

  useEffect(() => {
    setNewUsers([])
    setAllUsers([])
    newUsersList()
  }, [])

  /** New users Today */
  async function newUsersList() {
    const startOfDay = new Date()
    startOfDay.setHours(0, 0, 0, 0)
    const qUsersDay = query(collection(db, "users"), where("createdAt", ">=", startOfDay), orderBy("createdAt", "desc"))
    const NewUsersToday = onSnapshot(qUsersDay, (querySnapshot) => {
      let usersTmpData = []
      querySnapshot.forEach((doc) => {
        usersTmpData.push({
          id: doc?.id,
          name: doc?.data()?.name,
          pho: doc?.data()?.pho,
          status: 'Active',
          createdAt: doc?.data()?.createdAt
        })
      })
      setNewUsers(usersTmpData)
    })
  }

  /**
   * Get all users data in desending order based on createdAt date
   */
  async function getAllUsersData() {
    const usersRef = collection(db, "users")
    const usersQuery = query(usersRef, orderBy("createdAt", "desc"))
    const usersQuerySnaphshot = await getDocs(usersQuery)
    let usersTmpData = []
    usersQuerySnaphshot.forEach((doc) => {
      usersTmpData.push({
        id: doc?.id,
        name: doc?.data()?.name,
        pho: doc?.data()?.pho,
        status: 'Active',
        createdAt: doc?.data()?.createdAt
      })
    })
    console.log(usersTmpData)
    setAllUsers(usersTmpData)
  }

  return (
    <div className='widgetSm'>
      <div className='widgetLgHedder'>
        <span className='widgetSmTitle'> {users === false ? "New Members" : "Members"}</span>
        {
          users === false
            ? <button className='widgetLgSeeMore' onClick={() => {
              setUsers(!users)
              getAllUsersData()
            }}>All Users</button>
            : <button className='widgetLgSeeMore' onClick={() => {
              setUsers(!users)
            }}>New Users</button>
        }
      </div>
      {
        users === false
          ? <>
            {
              newUsers?.length > 0
                ? <ul className='widgetSmList'>
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
                : <div>
                  <p>No New Users Joind Today</p>
                </div>
            }
          </>
          : null
      }
      {/** All Users */}
      {
        users === true
          ? <>
            {
              allUsers?.length > 0
                ? <ul className='widgetSmList'>
                  {
                    allUsers?.map((item, index) => {
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
                : <div>
                  <p>N0 Users Records Find</p>
                </div>
            }
          </>
          : null
      }
    </div>
  )
}

export default WidgetSmall