import React, { useState, useEffect, useContext } from "react"
import "./App.css"
import "./Components/Charts/Chart.css"
import Navbar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom"

import BarChart from "./Components/Charts/BarChart"
import LineChart from "./Components/Charts/LineChart"
import PieChart from "./Components/Charts/PieChart"
import RedarChart from "./Components/Charts/RedarChart"
import Header from "./Components/Header/Header"
import { Box, CssBaseline, Grid, List } from "@material-ui/core"
import Admin from "./Components/Main/Admin"
import SideMenu from "./Components/SideMenu/SideMenu.js"
import Home from "./Components/Pages/Home/Home"
import UserList from "./Components/Pages/UserList/UserList"
import User from "./Components/Pages/User/User"
import NewUser from "./Components/Pages/NewUserPage/NewUser"
import AnalyticsPage from "./Components/Pages/AnalyticsPage/AnalyticsPage"
import ManageAdmin from "./Components/Pages/ManageAdmin/ManageAdmin"
import OverView from "./Components/Pages/OverView/OverView"
import WithdrawRequest from "./Components/Pages/WithdrawRequest/WithdrawRequest"
import Login from "./Components/Pages/Login/Login"
import Stats from "./Components/Pages/Sats/Stats"
import Betting from "./Components/Pages/Betting/Betting"
import "./firebase.config"
import { AuthProvider, useAuth } from "../src/Auth/Auth"
import { RequireAuth } from "./Auth/RequireAuth"

function App() {

  const auth = useAuth()

  // useEffect(() => {
  //   if (window) {
  //     if (localStorage.getItem("user_token")) {
  //       setUserDetails({
  //         username: "",
  //         token: localStorage.getItem("user_token")
  //       })
  //     } else {
  //       setUserDetails({
  //         username: "",
  //         token: ""
  //       })
  //     }
  //   }
  // }, [])

  return (
    <AuthProvider>
      <Router>
        <Routes >
          <Route exact path="/" element={<RequireAuth><Home /></RequireAuth>}></Route>
          <Route path="/users" element={<RequireAuth><UserList /></RequireAuth>}></Route>
          <Route path="/user/:userId" element={<RequireAuth><User /></RequireAuth>}></Route>
          <Route path="/newUser" element={<RequireAuth><NewUser /></RequireAuth>}></Route>
          <Route path="/analytics" element={<RequireAuth><AnalyticsPage /></RequireAuth>}></Route>
          <Route path="/addAdmin" element={<RequireAuth><ManageAdmin /></RequireAuth>}></Route>
          <Route path="/overview" element={<RequireAuth><OverView /></RequireAuth>}></Route>
          <Route path="/withdraw" element={<RequireAuth><WithdrawRequest /></RequireAuth>}></Route>
          <Route path="/stats" element={<RequireAuth><Stats /></RequireAuth>}></Route>
          <Route path="/betting" element={<RequireAuth><Betting /></RequireAuth>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>

      </Router>
    </AuthProvider>
  )
}

export default App
