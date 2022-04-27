import React from 'react'
import "./ManageAdmin.css"
import {DataGrid} from '@material-ui/data-grid'
import {DeleteOutline}from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ManageAdmin() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'username',
            headerName: 'User name',
            width: 150,
            editable: true,
            renderCell:(params)=>{
              return(
                <div className='userListUser'>
                  <img className='userListImage' src={params.row.avatar} alt=''/>
                  {params.row.username}
                  
                </div>
              )
            }
      
          },
          {
            field: 'status',
            headerName: 'Status',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 100,
            
          },
    ];
    const rows = [
            { id: 1,username: 'Jon Snow',}];
  return (
    <div className='adminContainer'>
    
    
    <div className='newAdmin'>
    <h1 className='newUserTitle'>New Admin</h1>
    <form className='newUserForm'>
        <div className='newUserItems'>
            <label> Username</label>
            <input type="text" placeholder="name"/>
        </div>

        <div className='newUserItems'>
            <label> Full Name</label>
            <input type="text" placeholder="name"/>
        </div>

        <div className='newUserItems'>
            <label> E-mail</label>
            <input type="text" placeholder="name"/>
        </div>

        <div className='newUserItems'>
            <label>Password</label>
            <input type="text" placeholder="name"/>
        </div>

        <div className='newUserItems'>
            <label>Phone</label>
            <input type="text" placeholder="name"/>
        </div>

        <div className='newUserItems'>
            <label>Address</label>
            <input type="text" placeholder="name"/>
        </div>

        <div className='newUserItems'>
            <label>Gender</label>
            <div className='newUserGender'>
            <input type="radio" name='gender'  id='male' value='male'/>
            <label for="male">Male</label>
            <input type="radio" name='gender'  id='female' value='female'/>
            <label for="female">Female</label>
            <input type="radio" name='gender'  id='other' value='other'/>
            <label for="other">Others</label>
            </div>
        </div>

        <div className='newUserItems'>
        <label>Active</label>
        <select className='newUserSelect' name='active' id='active' >
            <option value="yes">YES</option>
            <option value="no">NO</option>

        </select>
        
        </div>
        <button className='newUserButton'>Create</button>
    </form>
</div>
<div className='adminShow'>
<h1 className='newUserTitle'>Admin Data</h1>


    
   <DataGrid
   rows={rows}
   columns={columns}
   pageSize={5}
   rowsPerPageOptions={[5]}
   checkboxSelection
   disableSelectionOnClick
 />
  
</div>
</div>
  )
}

export default ManageAdmin