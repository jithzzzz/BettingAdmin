
import './WidgetLarge.css'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase.config"
import { useState, useEffect } from "react"
import Button from '@mui/material/Button'

function WidgetLarge() {
  const [transitionData, setTransitionData] = useState([])

  useEffect(() => {
    async function getLatestTransitionData() {
      const startOfDay = new Date()
      startOfDay.setHours(0, 0, 0, 0)
      const trsRef = collection(db, "transactionHistory")
      const trsQuery = query(trsRef, where("transctionDate", ">=", startOfDay))
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
      setTransitionData(trsTmpData)
    }
    getLatestTransitionData()
  }, [])

  const Button = ({ type }) => {
    return <button className={'widgetButton ' + type} >{type}</button>
  }

  return (
    <div className='widgetLg'>
      <div className='widgetLgHedder'>
        <h3 className='widgetLgTitle'>
          Latest Transations</h3>
        <button className='widgetLgSeeMore'>SeeMore</button>
      </div>
      <table className='widgetLgTable'>
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
            transitionData?.map((item, index) => {
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
    </div>
  )
}

export default WidgetLarge