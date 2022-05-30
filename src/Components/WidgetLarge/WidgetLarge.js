
import './WidgetLarge.css'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase.config"
import { useState, useEffect } from "react"
import Button from '@mui/material/Button'

function WidgetLarge() {
  const [transitionDataToday, setTransitionDataToday] = useState([])
  const [transitionDataAll, setTransitionDataAll] = useState([])
  const [allTransitions, setAllTransitions] = useState(false)

  useEffect(() => {
    setTransitionDataAll([])
    setTransitionDataToday([])
    getLatestTransitionDataToday()
  }, [])

  /**
   * Get todays transactional data
   */
  async function getLatestTransitionDataToday() {
    const startOfDay = new Date()
    startOfDay.setHours(0, 0, 0, 0)
    const qTransDay = query(collection(db, "transactionHistory"), where("transctionDate", ">=", startOfDay), orderBy("transctionDate", "desc"))
    const TransitionToday = onSnapshot(qTransDay, (querySnapshot) => {
      let trsTmpData = []
      querySnapshot.forEach((doc) => {
        trsTmpData.push({
          id: doc?.id,
          authId: doc?.data()?.authId,
          amount: doc?.data()?.amount,
          commission: doc?.data()?.commission,
          paymentType: doc?.data()?.paymentType,
          transctionDate: doc?.data()?.transctionDate,
          transctionStatus: doc?.data()?.transctionStatus,
          user_name: doc?.data()?.user_name,
        })
      })
      setTransitionDataToday(trsTmpData)
    })
  }

  /**
   * Get all transactional data in desending order based on transaction date
   */
  async function getLatestTransitionDataAll() {
    const trsRef = collection(db, "transactionHistory")
    const trsQuery = query(trsRef, orderBy("transctionDate", "desc"))
    const trsQuerySnaphshot = await getDocs(trsQuery)
    let trsTmpData = []
    trsQuerySnaphshot.forEach((doc) => {
      trsTmpData.push({
        id: doc?.id,
        authId: doc?.data()?.authId,
        amount: doc?.data()?.amount,
        commission: doc?.data()?.commission,
        paymentType: doc?.data()?.paymentType,
        transctionDate: doc?.data()?.transctionDate,
        transctionStatus: doc?.data()?.transctionStatus,
        user_name: doc?.data()?.user_name,
      })
    })
    console.log(trsTmpData)
    setTransitionDataAll(trsTmpData)
  }

  const Button = ({ type }) => {
    return <button className={'widgetButton ' + type} >{type}</button>
  }

  return (
    <div className='widgetLg'>
      <div className='widgetLgHedder'>
        <h3 className='widgetLgTitle'>
          {allTransitions === false ? "Latest Transations" : "Transations"}
        </h3>
        {
          allTransitions === false
            ? <button className='widgetLgSeeMore' onClick={() => {
              setAllTransitions(!allTransitions)
              getLatestTransitionDataAll()
            }}>All Transations</button>
            : <button className='widgetLgSeeMore' onClick={() => {
              setAllTransitions(!allTransitions)
            }}>Today Transation</button>
        }

      </div>
      {
        allTransitions === false
          ? <>
            {
              transitionDataToday?.length > 0
                ? <table className='widgetLgTable'>
                  <thead>
                    <tr className='widgetLgTr'>
                      <th className='widgetLgTh'>Customer</th>
                      <th className='widgetLgTh'>Date</th>
                      <th className='widgetLgTh'>Amount</th>
                      <th className='widgetLgTh'>Status</th>
                      <th className='widgetLgTh'>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      transitionDataToday?.map((item, index) => {
                        return (
                          <tr className='widgetLgTr' key={index}>
                            <td className='widgetLgUser'>
                              <img src='user1.png' alt='' className='widgetLgUserImg'></img>
                              <span className='widgetLgName'>{item?.user_name}</span>
                            </td>
                            <td className='widgetLgDate'>{item?.transctionDate?.toDate()?.toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })}</td>
                            <td className='widgetLgAmount'>{item?.amount}</td>

                            <td >
                              <button
                                style={{
                                  backgroundColor: item?.transctionStatus == "Completed" ? "#2e7d32" : "#1976d2",
                                  color: "#fff",
                                  padding: "7px",
                                  borderRadius: "5px",
                                  border: "none",
                                }}
                              >
                                {item?.transctionStatus}
                              </button>
                            </td>
                            <td className='widgetLgAmount'>{item?.paymentType}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                : <div>
                  <p>No New Transations Today</p>
                </div>
            }
          </>
          : null
      }
      {/** All Transations */}
      {
        allTransitions === true ?
          <>
            {
              transitionDataAll?.length > 0
                ? <table className='widgetLgTable'>
                  <thead>
                    <tr className='widgetLgTr'>
                      <th className='widgetLgTh'>Customer</th>
                      <th className='widgetLgTh'>Date</th>
                      <th className='widgetLgTh'>Amount</th>
                      <th className='widgetLgTh'>Status</th>
                      <th className='widgetLgTh'>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      transitionDataAll?.map((item, index) => {
                        return (
                          <tr className='widgetLgTr' key={index}>
                            <td className='widgetLgUser'>
                              <img src='user1.png' alt='' className='widgetLgUserImg'></img>
                              <span className='widgetLgName'>{item?.user_name}</span>
                            </td>
                            <td className='widgetLgDate'>{item?.transctionDate?.toDate()?.toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })}</td>
                            <td className='widgetLgAmount'>{item?.amount}</td>

                            <td >
                              <button
                                style={{
                                  backgroundColor: item?.transctionStatus == "Completed" ? "#2e7d32" : "#1976d2",
                                  color: "#fff",
                                  padding: "7px",
                                  borderRadius: "5px",
                                  border: "none",
                                }}
                              >
                                {item?.transctionStatus}
                              </button>
                            </td>
                            <td className='widgetLgAmount'>{item?.paymentType}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                : <div>
                  <p>No  Transations  Records Find</p>
                </div>
            }
          </>
          : null
      }
    </div>
  )
}

export default WidgetLarge