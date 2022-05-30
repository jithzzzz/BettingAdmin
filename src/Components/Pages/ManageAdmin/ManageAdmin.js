import React from 'react'
import "./ManageAdmin.css"
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebase.config"
import { Formik } from 'formik';
import * as Yup from "yup"
import { async } from '@firebase/util'

function ManageAdmin() {

  const [allAdmins, setAllAdmins] = useState([])
  const adminCollectionRef = collection(db, "admins")

  useEffect(() => {
    getAdminsData()
  }, [])

  async function getAdminsData() {
    const qAdmins = query(collection(db, "admins"), orderBy("createdAt", "desc"))
    const Admins = onSnapshot(qAdmins, (querySnapshot) => {
      let adminsTmpData = []
      querySnapshot.forEach((doc) => {
        adminsTmpData.push({
          id: doc?.id,
          email: doc?.data()?.email,
          createdAt: doc?.data()?.createdAt,
          name: doc?.data()?.name,
          password: doc?.data()?.password,
          pho: doc?.data()?.pho,
          status: doc?.data()?.status == true ? "Active" : "In Active",
          username: doc?.data()?.userName
        })
      })
      console.log(adminsTmpData)
      setAllAdmins(adminsTmpData)
    })
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    {
      field: 'username',
      headerName: 'User name',
      width: 250,
      editable: true,
      // renderCell: (params) => {
      //   return (
      //     <div className='userListUser'>
      //       <img className='userListImage' src={params.row.avatar} alt='' />
      //       {params.row.username}

      //     </div>
      //   )
      // }

    },
    {
      field: 'pho',
      headerName: 'Phone',
      description: '',
      sortable: false,
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 100,
    },
  ]

  const saveAdmin = async ({ username, email, pho, name, password, status }) => {
    const gameRef = collection(db, "admins")
    const gameQuery = query(gameRef, where("email", "==", email))
    const gameQuerySnaphshot = await getDocs(gameQuery)
    let gameTmpData = []
    gameQuerySnaphshot.forEach((doc) => {
      gameTmpData.push({ doc_Id: doc?.id, data: doc?.data() })
    })
    if (gameTmpData.length == 0) {
      const today = new Date()
      await addDoc(adminCollectionRef, {
        createdAt: today,
        email: email,
        name: name,
        password: password,
        pho: pho,
        status: status,
        userName: username
      })
        .then(data => {
          return true
        })
        .catch(error => {
          return false
        })
    } else {
      return false
    }
  }

  return (
    <div className='adminContainer'>
      <div className='newAdmin'>
        <h1 className='newUserTitle'>New Admin</h1>

        <Formik
          initialValues={{
            username: "",
            email: "",
            pho: "",
            name: "",
            password: "",
            status: true
          }}
          validationSchema={values => {
            const errors = Yup.object({
              username: Yup.string().required("Required"),
              email: Yup.string().email("Invalid email address").required("Required"),
              pho: Yup.string().required("Required").min(10, "Invalid Number").max(10, "Invalid Number"),
              name: Yup.string().required("Required"),
              password: Yup.string().required("Required").min(8, "Password must be at least 8 characters"),
              status: Yup.string().required("Required"),
            })
            return errors
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            await saveAdmin(values)
            setSubmitting(false)
            resetForm()
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className='newUserForm' onSubmit={handleSubmit}>
              <div className='newUserItems'>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="User Name"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <p style={{ color: "red" }}>{errors.username && touched.username && errors.username}</p>
              </div>

              <div className='newUserItems'>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p style={{ color: "red" }}>{errors.name && touched.name && errors.name}</p>
              </div>

              <div className='newUserItems'>
                <label> E-mail</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p style={{ color: "red" }}>{errors.email && touched.email && errors.email}</p>
              </div>

              <div className='newUserItems'>
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p style={{ color: "red" }}>{errors.password && touched.password && errors.password}</p>
              </div>

              <div className='newUserItems'>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  name="pho"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pho}
                />
                <p style={{ color: "red" }}>{errors.pho && touched.pho && errors.pho}</p>
              </div>

              <div className='newUserItems'>
                <label>Active</label>
                <select
                  className='newUserSelect'
                  name='status'
                  id='active'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.status}
                >
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
                <p style={{ color: "red" }}>{errors.status && touched.status && errors.status}</p>
              </div>
              <div style={{
                width: "73%",
                display: "flex",
                justifyContent: "flex-end",
              }}>
                <button className='newUserButton' style={{ padding: "10px" }}>Create</button>
              </div>
            </form>
          )}
        </Formik>
      </div>

      <div className='adminShow'>
        <h1 className='newUserTitle'>Admin Data</h1>
        <DataGrid
          style={{ height: 600, width: '100%' }}
          rows={allAdmins}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div >
  )
}

export default ManageAdmin