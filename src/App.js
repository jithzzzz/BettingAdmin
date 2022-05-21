import React from "react";
import "./App.css";
import "./Components/Charts/Chart.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BarChart from "./Components/Charts/BarChart";
import LineChart from "./Components/Charts/LineChart";
import PieChart from "./Components/Charts/PieChart";
import RedarChart from "./Components/Charts/RedarChart";
import Header from "./Components/Header/Header";
import { Box, CssBaseline, Grid, List } from "@material-ui/core";
import Admin from "./Components/Main/Admin";
import SideMenu from "./Components/SideMenu/SideMenu.js";
import Home from "./Components/Pages/Home/Home";
import UserList from "./Components/Pages/UserList/UserList";
import User from "./Components/Pages/User/User";
import NewUser from "./Components/Pages/NewUserPage/NewUser";
import AnalyticsPage from "./Components/Pages/AnalyticsPage/AnalyticsPage";
import ManageAdmin from "./Components/Pages/ManageAdmin/ManageAdmin";
import OverView from "./Components/Pages/OverView/OverView";
import "./firebase.config"



function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <SideMenu />
        <div className="otherpage">
          <Switch >
            <Route exact path="/"><Home /></Route>
            <Route path="/users"><UserList /></Route>
            <Route path="/user/:userId"><User /></Route>
            <Route path="/newUser"><NewUser /></Route>
            <Route path="/analytics"><AnalyticsPage /></Route>
            <Route path="/addAdmin"><ManageAdmin /></Route>
            <Route path="/overview"><OverView /></Route>
          </Switch>
        </div>
      </div>
    </Router>

    //  <>

    //<CssBaseline/>
    //  <Header/>
    //  <Box component="span" m={1}>
    //  <Grid container spacing={3} style={{width:'100%'}}>
    //     <Grid item xs={12} md={8} style={{height:'30%'}}>
    //       {/* <Admin/> */}
    //     </Grid>
    //     <Grid className='barchart' item xs={12} md={4}>

    //           <BarChart ></BarChart>
    //     </Grid>
    //     </Grid>
    //     </Box>
    //     <Box component="span" m={1}>

    //     </Box>
    //  </>
  );
}

export default App;
