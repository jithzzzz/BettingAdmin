import './UserList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc,
   orderBy, limit, updateDoc, onSnapshot,deleteDoc } from "firebase/firestore"
import { db } from "../../../firebase.config"
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../../Auth/Auth'


function UserList() {
  const [data, setData] = useState([])
  const auth = useAuth()

  useEffect(() => {
    async function getUsersLists() {
      const startOfDay = new Date()
      startOfDay.setHours(0, 0, 0, 0)
      const usersRef = collection(db, "users")
      const usersQuery = query(usersRef)
      const usersQuerySnaphshot = await getDocs(usersQuery)
      let usersTmpData = []
      usersQuerySnaphshot.forEach((doc) => {
        usersTmpData.push({ id: doc?.id, name: doc?.data()?.name, pho: doc?.data()?.pho, status: 'Active', createdAt: doc?.data()?.createdAt.toDate()?.toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' }) })
      })
      setData(usersTmpData)
    }
    getUsersLists()

   
  }, [])

  const handleDelete = async (id, name) => { 
    setData(data.filter((item) => item.id !== id))
    console.log("Hi")
  console.log(id) 
  await deleteDoc(doc(db,"users",id))
  .then(()=>toast.success("User "+name+" Deleted")
 
  ).then(()=>collection(db,"users").document(auth.getInstance().id).delete()).catch((error)=>alert(error))
  }

  const handleEdit = (name)=>{

    toast.info( name+ " Cannot be Edited") 
  }

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
            
              <button className='userListEdit' onClick={()=>handleEdit(params.row.name)}>Edit</button>
           
            <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id, params.row.name)} />
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