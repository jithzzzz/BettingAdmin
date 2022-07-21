import { AirplanemodeActive, CalendarToday, LocationSearching, MailOutline,
   PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'
import { Visibility } from '@material-ui/icons/'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebase.config"
import { useState, useEffect } from "react"

function User() {
  const [newUsers, setNewUsers] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [users, setUsers] = useState(false)

  useEffect(() => {
    setNewUsers([])
    setAllUsers([])
   // newUsersList()
  }, [])

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
<div className='user'>
<button className='userUpdateButton' onClick={getAllUsersData}>Update</button>
</div>
    
    // <div className='user'>
    //     <div className='userTitleContainer'>
    //         <h1 className='useTitle'> Edit User  </h1>
    //         <Link to="/newUser">
    //            <button className='userAddButton'>Create</button>
    //         </Link>
             
    //     </div>
    //     <div className='userContainer'>
    //       <div className='userShow'>
    //          <div className='userShowTop'>
    //            <img src='Images/user4.png'
    //            alt='' className='userShowImage'/>
    //            <div className='userShowTopTitle'>
    //              <span className='userShowUserName'>Ditto Sebastian</span>
    //              <span className='userShowUserTitle'>Engineeer</span>
    //            </div>
    //            </div>
    //          <div className='userShowBottom'>
    //          <span className='userShowTitle'>Account Details</span>
    //              <div className='userShowInfo'>
    //                 <PermIdentity className='userShowIcon'/>
    //                 <span className='userShowInfoTitle'>Ditto</span>
    //              </div>

    //              <div className='userShowInfo'>
    //                 <CalendarToday className='userShowIcon'/>
    //                 <span className='userShowInfoTitle'>26/06/1997</span>
    //              </div>

    //              <div className='userShowInfo'>
    //                 <AirplanemodeActive className='userShowIcon'/>
    //                 <span className='userShowInfoTitle'  >Active</span>
    //              </div>
                 
    //              <span className='userShowTitle'>Contact Details</span>

    //              <div className='userShowInfo'>
    //                 <MailOutline className='userShowIcon'/>
    //                 <span className='userShowInfoTitle'>Ditto@gmail.com</span>
    //              </div>
                 
    //              <div className='userShowInfo'>
    //                 <PhoneAndroid className='userShowIcon'/>
    //                 <span className='userShowInfoTitle'>1234567890</span>
    //              </div>
    //              <div className='userShowInfo'>
    //                 <LocationSearching className='userShowIcon'/>
    //                 <span className='userShowInfoTitle'>something house something P.O something</span>
    //              </div>
                 
    //           </div>

              
    //       </div>
    //       <div className='userUpdate'>
    //       <span className='userUpdateTitle'>Edit</span>
    //       <form className='userUpdateForm'>
    //         <div className='userUpdateLeft'>
    //           <div className='userUpdateItems'>
    //             <label>UserName</label>
    //             <input className='userUpdateInput' type="text" placeholder='Ditto'/> 
    //           </div>

    //           <div className='userUpdateItems'>
    //             <label>Full Name</label>
    //             <input className='userUpdateInput' type="text" placeholder='Ditto Sebastian'/> 
    //           </div>
              
    //           <div className='userUpdateItems'>
    //             <label>Date Of Birth</label>
    //             <input className='userUpdateInput' type="text" placeholder='26/06/1997'/> 
    //           </div>
              
    //           <div className='userUpdateItems'>
    //             <label>Designation</label>
    //             <input className='userUpdateInput' type="text" placeholder='Engineer'/> 
    //           </div>

    //           <div className='userUpdateItems'>
    //             <label>E-Mail</label>
    //             <input className='userUpdateInput' type="text" placeholder='Ditto@gmail.com'/> 
    //           </div>
              
    //           <div className='userUpdateItems'>
    //             <label>Status</label>
    //             <input className='userUpdateInput' type="text" placeholder='Active'/> 
    //           </div>
              
    //           <div className='userUpdateItems'>
    //             <label>Mobile</label>
    //             <input className='userUpdateInput' type="text" placeholder='12345678'/> 
    //           </div>
              
    //           <div className='userUpdateItems'>
    //             <label>Address</label>
    //             <input className='userUpdateInput' type="text" placeholder='Address'/> 
    //           </div>
              
    //         </div>

    //         <div className='userUpdateRight'>
    //           <div className='userUpdateUpload'>
    //             <img className='userUpdateImage' src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
    //             <label htmlFor="file"><Publish className='UserUpdateIcon'/></label>
    //             <input type="file" id='file' style={{display:"none"}}/>
    //           </div>
    //           <button className='userUpdateButton'>Update</button>
    //         </div>
    //       </form>

    //       </div>
    //     </div>
    // </div>
  )
}

export default User