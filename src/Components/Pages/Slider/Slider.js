import React, { useEffect, useState } from 'react'
import { IconButton, Button, Box} from '@mui/material';
import './Slider.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Slider() {
  const[data, setData]=useState([]);
  useEffect( ()=>{
    loadData();
  },[]);


  const loadData =  async()=>{
   await fetch('https://us-central1-betting-9623d.cloudfunctions.net/spellCronJob').then(
      response =>response.json()
    ).then(recivedData => setData(recivedData));
    console.log(data.message);
    if(data.message==" "){
      toast.error("something went wrong", {
        position: toast.POSITION.TOP_CENTER,
        className: 'foo-bar',
        autoClose: 5000 
    });
  }else{
    toast.success(data.message, {
      position: toast.POSITION.TOP_CENTER,
      className: 'foo-bar',
      autoClose: 5000 
  });
    
  }

  }; 
  return (
    <div className='slidercontainer'>
      <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
      <div className='slider'>
        
          
          <div className='box'>
          <h2>Click here to run Spell</h2>
          <Button variant="contained" color="success" onClick={loadData} >
            Get Msg
            {/* <a href='https://us-central1-betting-9623d.cloudfunctions.net/spellCronJob'>Create Spell</a> */}
          </Button>
          </div>
         
         
          
  
      </div>
    </div>
  );
}

export default Slider




