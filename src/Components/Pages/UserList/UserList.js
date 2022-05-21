import './UserList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebase.config"


function UserList() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getUsersLists() {
      const startOfDay = new Date()
      startOfDay.setHours(0, 0, 0, 0)
      const usersRef = collection(db, "users")
      const usersQuery = query(usersRef, where("createdAt", ">=", startOfDay))
      const usersQuerySnaphshot = await getDocs(usersQuery)
      let usersTmpData = []
      usersQuerySnaphshot.forEach((doc) => {
        usersTmpData.push({ id: doc?.id, name: doc?.data()?.name, pho: doc?.data()?.pho, status: 'Active', createdAt: doc?.data()?.createdAt.toDate()?.toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' }) })
      })
      setData(usersTmpData)
    }
    getUsersLists()
  }, [])

  const handleDelete = (id) => { setData(data.filter((item) => item.id !== id)) }

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 200
    },
    {
      field: 'pho',
      headerName: 'Phone Number',
      width: 200,
      editable: true,
    },

    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,

    },
    {
      field: "createdAt",
      headerName: "Created At",
      sortable: true,
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/users/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
          </>

        );
      },
    },
  ];




  return (
    <div className='userList'>
      <DataGrid
        style={{ height: 600, width: '100%' }}
        rows={data}
        columns={columns}
        pageSize={20}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList