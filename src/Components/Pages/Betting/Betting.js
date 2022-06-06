import React, { useState, useEffect } from 'react'
import "./Betting.css"
import Select, { SelectChangeEvent } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useField } from 'formik'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebase.config"
import { xor } from 'lodash'
import { async } from '@firebase/util'

export default function Betting() {
  const [date, setDate] = React.useState('')
  const [SPNO, setSPNO] = React.useState('')
  const [game, setGame] = React.useState('')
  const [primaryInfo, setPrimaryInfo] = React.useState([])
  const [serachData, setSearchData] = useState([])
  const [bp, setBp] = useState([])
  const [user, setUser] = useState([])


  useEffect(() => {
    getBettingPrimaryInfo()
    getUser()
  }, [])

  const getUser = async () => {
    const usersRef = collection(db, "users")
    const usersQuery = query(usersRef)
    const usersQuerySnaphshot = await getDocs(usersQuery)
    let usersTmpData = []
    usersQuerySnaphshot.forEach((doc) => {
      usersTmpData.push({
        id: doc?.id,
        data: doc?.data()
      })
    })
    console.log(usersTmpData)
    setUser(usersTmpData)
  }

  const findUser = async (aid) => {
    console.log(aid)
    let name = ""
    user?.map((item, index) => {
      if (item?.data?.authId == aid) {
        console.log(item?.data?.name)
        name = item?.data?.name
      }
    })
    return name
  }

  const getBettingPrimaryInfo = async () => {
    const usersRef = collection(db, "spellJobHistory")
    const usersQuery = query(usersRef)
    const usersQuerySnaphshot = await getDocs(usersQuery)
    let usersTmpData = []
    usersQuerySnaphshot.forEach((doc) => {
      usersTmpData.push({
        id: doc?.id,
        data: doc?.data()
      })
    })
    console.log(usersTmpData)
    setPrimaryInfo(usersTmpData)
  }


  const handleChangeDate = (event) => {
    setDate(event.target.value)
  }

  const handleChangeSPNO = (event) => {
    setSPNO(event.target.value);
  }

  const handleChangeGame = (event) => {
    setGame(event.target.value);
  }

  const searchBetting = async () => {
    setSearchData([])
    setBp([])
    console.log(date + SPNO)
    const spNo = date + SPNO
    const usersRef = collection(db, "myMatches")
    const usersQuery = query(usersRef)
    const usersQuerySnaphshot = await getDocs(usersQuery)
    let usersTmpData = []
    usersQuerySnaphshot.forEach(async (doc) => {
      if (doc?.data()?.game_name == game && doc?.data()?.spellNo == spNo) {
        const name = await findUser(doc?.data()?.authId)
        usersTmpData.push({
          id: doc?.id,
          data: doc?.data(),
          name: name
        })
      }
    })
    console.log(usersTmpData)
    setSearchData(usersTmpData)

    const bRef = collection(db, game)
    const bQuery = query(bRef, where("gameName", "==", game), where("spell_date", "==", date), where("spell_Id", "==", SPNO))
    const bQuerySnaphshot = await getDocs(bQuery)
    let bTmpData = []
    bQuerySnaphshot.forEach((doc) => {
      bTmpData.push({
        id: doc?.id,
        data: doc?.data()
      })
    })
    console.log(bTmpData)
    setBp(usersTmpData)
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  return (
    <div className='betting'>
      <h1 className='newUserTitle'>User wised betting Info</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 10,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "300px"
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Game</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={game}
              label="Age"
              onChange={handleChangeGame}
            >
              <MenuItem value="Pekka">Pekka</MenuItem>
              <MenuItem value="Healer">Healer</MenuItem>
              <MenuItem value="Wizard">Wizard</MenuItem>
              <MenuItem value="Archer">Archer</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            width: "300px"
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Date</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={date}
              label="Age"
              onChange={handleChangeDate}
            >
              {
                primaryInfo?.map((item, index) => {
                  return (
                    <MenuItem value={item?.data?.created_date}>{`${item?.data?.gameName}-${item?.data?.created_date}`}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            width: "300px"
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Spell</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={SPNO}
              label="Age"
              onChange={handleChangeSPNO}
            >
              {
                Array.from({ length: 480 }, (x, i) => {
                  return (
                    <MenuItem value={i + 1}>Spell {i + 1}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </div>
        <div>
          <Button variant="contained" onClick={() => {
            searchBetting()
          }}>Search</Button>
        </div>
      </div>
      <div
        style={{
          marginTop: "25px"
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Spell No</StyledTableCell>
                <StyledTableCell align="right">Game</StyledTableCell>
                <StyledTableCell align="right">User Name</StyledTableCell>
                <StyledTableCell align="right">User Betting Amount</StyledTableCell>
                <StyledTableCell align="right">Betting Color</StyledTableCell>
                <StyledTableCell align="right">Betting Number</StyledTableCell>
                <StyledTableCell align="right">Result</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serachData.map((row) => (
                <StyledTableRow key={row.data?.status}>
                  <StyledTableCell component="th" scope="row">{row.data?.spellNo}</StyledTableCell>
                  <StyledTableCell scope="right">{row.data?.game_name}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.data?.bettingAmount}</StyledTableCell>
                  <StyledTableCell align="right">{row.data?.color}</StyledTableCell>
                  <StyledTableCell align="right">{row.data?.number}</StyledTableCell>
                  <StyledTableCell align="right">{row.data?.status}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
