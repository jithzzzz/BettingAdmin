import React, { useState, useEffect } from 'react'
import "./Result.css"
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebase.config"
import { async } from '@firebase/util'

export default function Result() {

  const [value, setValue] = React.useState(0)
  const [data, setDate] = useState([])
  const [open, setOpen] = React.useState(false)
  const [color, setColor] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [updateDatas, setUpdateDatas] = React.useState(undefined)


  const handleChangeSelectColor = (event) => {
    setColor(event.target.value)
  }

  const handleChangeSelectNumber = (event) => {
    setNumber(event.target.value)
  }

  const saveData = async () => {
    console.log(updateDatas)
    const walletRef = doc(db, updateDatas?.gameName, updateDatas?.doc_Id)
    let tmpData = updateDatas?.data
    tmpData["result_color"] = color
    tmpData["result_number"] = number

    // Set the "capital" field of the city 'DC'
    await updateDoc(walletRef, tmpData)
      .then(data => {
        console.log(data)
        handleClose()
        return data
      })
  }



  useEffect(() => {
    updateData()
  }, [])

  useEffect(() => {
    updateData()
  }, [value])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    setNumber('')
    setColor('')
    setUpdateDatas(undefined)
  }

  const updateData = async () => {
    let name = ""
    setDate([])
    if (value == 0) {
      name = "Pekka"
    } else if (value == 1) {
      name = "Healer"
    } else if (value == 2) {
      name = "Wizard"
    } else if (value == 3) {
      name = "Archer"
    }

    let today = new Date()
    const dd = String(today.getUTCDate()).padStart(2, '0')
    const mm = String(today.getUTCMonth() + 1).padStart(2, '0')
    const yyyy = today.getUTCFullYear()
    let utcH = today.getUTCHours()
    let utcM = today.getUTCMinutes()
    let utcdate = mm + '/' + dd + '/' + yyyy

    const queryRefSpell = collection(db, name)
    const qSpell = query(queryRefSpell, where("spell_date", "==", utcdate), orderBy("spell_Id", "desc"))
    const querySnapshotSpell = await getDocs(qSpell)
    let tmpDataSpell = []
    querySnapshotSpell.forEach(async (doc) => {
      tmpDataSpell.push({
        id: tmpDataSpell.length + 1,
        doc_Id: doc?.id,
        data: doc?.data(),
        spell_Id: doc?.data()?.spell_Id,
        spell_date: doc?.data()?.spell_date,
        result_color: doc?.data()?.result_color,
        result_number: doc?.data()?.result_number,
        total: doc?.data()?.total,
        result: doc?.data()?.result_color,
        gameName: doc?.data()?.gameName,
        status: doc?.data()?.gameName
      })
    })

    setDate(tmpDataSpell)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }


  function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'spell_Id', headerName: 'Spell ID', width: 70 },
    { field: 'spell_date', headerName: 'Spell Date', width: 130 },
    { field: "gameName", headerName: 'Game', width: 130 },
    { field: 'result_color', headerName: 'Result Color', width: 130 },
    { field: 'result_number', headerName: 'Result Number', width: 130 },
    { field: 'total', headerName: 'Total', width: 130 },
    {
      field: "result",
      headerName: "Result",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {
              params?.formattedValue == "Red" ? <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#EB001B" }}></div>
                : params?.formattedValue == "Green" ? <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#37BB54" }}></div>
                  : params?.formattedValue == "Gold-Red" ? <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "2px"
                    }}
                  >
                    <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#FFD700" }}></div>
                    <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#EB001B" }}></div>
                  </div>
                    : params?.formattedValue == "Gold-Green" ? <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2px"
                      }}
                    >
                      <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#FFD700" }}></div>
                      <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#37BB54" }}></div>
                    </div>
                      : null
            }
          </div>
        )
      }
    },
    {
      field: "doc_Id",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        const onClickDelete = async () => {
          const data = params.row
          setColor(data?.result_color)
          setNumber(data?.result_number)
          setUpdateDatas(data)
          handleOpen()
        };
        return (
          <div>
            <Button variant="outlined" id={params?.formattedValue} onClick={onClickDelete}>Update</Button>
          </div>
        )
      }
    }
  ]

  return (
    <div className='result'>
      <h1 className='newUserTitle'>Betting Result</h1>
      <div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Pekka" {...a11yProps(0)} />
              <Tab label="Healer" {...a11yProps(1)} />
              <Tab label="Wizard" {...a11yProps(2)} />
              <Tab label="Archer" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <h2>Pekka</h2>
            <div style={{ height: 600, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h2>Healer</h2>
            <div style={{ height: 600, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h2>Wizard</h2>
            <div style={{ height: 600, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <h2>Archer</h2>
            <div style={{ height: 600, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
              />
            </div>
          </TabPanel>
        </Box>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Spell
          </Typography>
          <FormControl fullWidth style={{ marginTop: "15px" }}>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label-color"
              id="demo-simple-select-color"
              value={color}
              label="Color"
              onChange={handleChangeSelectColor}
              key={color}
            >
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
              <MenuItem value="Gold-Red">Gold-Red</MenuItem>
              <MenuItem value="Gold-Green">Gold-Green</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ marginTop: "15px" }}>
            <InputLabel id="demo-simple-select-label">Number</InputLabel>
            <Select
              labelId="demo-simple-select-label-number`"
              id="demo-simple-select-number"
              value={number}
              label="Number"
              onChange={handleChangeSelectNumber}
              key={[color, number]}
            >
              {
                color == "Red"
                  ? [2, 4, 6, 8]?.map((item, index) => { return (<MenuItem id={index} value={item}>{item}</MenuItem>) })
                  : color == "Green"
                    ? [1, 3, 7, 9]?.map((item, index) => (<MenuItem value={item}>{item}</MenuItem>))
                    : color == "Gold-Red"
                      ? [0]?.map((item, index) => (<MenuItem value={item}>{item}</MenuItem>))
                      : color == "Gold-Green"
                        ? [5]?.map((item, index) => (<MenuItem value={item}>{item}</MenuItem>))
                        : null
              }

            </Select>
          </FormControl>
          <div
            style={{ marginTop: "15px", display: "flex", justifyContent: "flex-end", gap: 20 }}
          >
            <Button
              variant="outlined"
              onClick={async () => {
                await saveData()
                await updateData()
              }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
