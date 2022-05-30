import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { margin, padding, width } from '@mui/system'
import Button from '@mui/material/Button'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebase.config"
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../../Auth/Auth'
export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const auth = useAuth()

  // useEffect(() => {
  //   if (window && localStorage.getItem("user_token")) {
  //     history.push("/")
  //   }
  // }, [])

  const loginSubmit = async () => {
    console.log("999")
    console.log(email)
    console.log(password)
    if (email && password) {
      const usersRef = collection(db, "admins")
      const usersQuery = query(usersRef, where("email", "==", email), where("password", "==", password))
      const usersQuerySnaphshot = await getDocs(usersQuery)
      let usersTmpData = []
      usersQuerySnaphshot.forEach((doc) => {
        usersTmpData.push({
          id: doc?.id,
          data: doc?.data()
        })
      })
      console.log(usersTmpData)
      if (usersTmpData?.length > 0) {
        localStorage.setItem("user_token", usersTmpData?.[0]?.data?.email + usersTmpData?.[0]?.data?.userName)
        auth.login(
          {
            "user_token": usersTmpData?.[0]?.data?.email + usersTmpData?.[0]?.data?.userName,
            "name": usersTmpData?.[0]?.data?.userName,
            "eamil": usersTmpData?.[0]?.data?.email,
            "userName": usersTmpData?.[0]?.data?.userName,
          }
        )
        navigate("/")
      }
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
        margin: "0px",
        padding: "0px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "550px",
          backgroundColor: "#d0d2d6",
          paddingTop: 80,
          paddingBottom: 80,
          paddingLeft: 40,
          paddingRight: 40
        }}
      >
        <div>
          <h2>Admin Login</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 20,
            width: "400px"
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Email Id"
            defaultValue=""
            fullWidth
            type="email"
            value={email}
            onChange={(txt) => { setEmail(txt?.target.value) }}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            fullWidth
            type="password"
            value={password}
            onChange={(txt) => { setPassword(txt?.target.value) }}
          />
          <Button variant="contained" onClick={() => { loginSubmit() }}>Login</Button>
        </div>
      </div>
    </div>
  )
}
