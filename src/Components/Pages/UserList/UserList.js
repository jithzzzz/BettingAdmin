import './UserList.css'
import {DataGrid} from '@material-ui/data-grid'
import {DeleteOutline}from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {userrows} from '../../../dummyData';


function UserList() {
  const [data, setData] = useState(userrows);
  const handleDelete =(id) =>{setData(data.filter((item)=>item.id !== id));};
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
      field: 'mobile',
      headerName: 'Mobile',
      width: 150,
      editable: true,
    },
    
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      
    },
    {
        field: 'recharge',
        headerName: 'Recharged',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 140,
        
      },
      {
        field: 'withdrow',
        headerName: 'Withdrowals',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 140,
        
      },
      {
        field: 'bank',
        headerName: 'Bank Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        
      },
      {
        field: 'upi',
        headerName: 'UPI',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        
      },
      {
        field: 'ifsc',
        headerName: 'IFSC',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 100,
        
      },
      {
        field: 'action',
        headerName: 'Actions',
        width: 150,
        renderCell:(params)=>{
            return(
                <>
                <Link to={'/users/'+params.row.id}>
                <button className='userListEdit'>Edit</button>
                </Link>
                <DeleteOutline className='userListDelete' onClick={() =>handleDelete(params.row.id)}/>
                </>
                
            );
        },
      },
  ];
  
 
 
   
  return (
    <div className='userList'>
      <DataGrid
    rows={userrows}
    columns={columns}
    pageSize={20}
    checkboxSelection
    disableSelectionOnClick
  />
  </div>
  )
}

export default UserList