import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './WithdrawRequest.css'
import PropTypes from 'prop-types'
import "firebase/firestore"
import { collection, getDocs, addDoc, query, where, doc, orderBy, limit, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebase.config"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Input } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Message, Mms } from '@material-ui/icons'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function WithdrawRequest() {
  const [value, setValue] = React.useState(0)
  const [transData, setTransData] = useState([])
  const [msg, setMsg] = useState("")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const qTrans = query(collection(db, "transactionHistory"), where("paymentType", "==", "Withdraw"), orderBy("transctionDate", "desc"))
    const TransDataSnap = onSnapshot(qTrans, (querySnapshot) => {
      let transTmpData = []
      querySnapshot.forEach((doc) => {
        transTmpData.push({
          id: doc?.id,
          amount: doc?.data()?.amount,
          authId: doc?.data()?.authId,
          commission: doc?.data()?.commission,
          paymentType: doc?.data()?.paymentType,
          transctionDate: doc?.data()?.transctionDate,
          transctionStatus: doc?.data()?.transctionStatus,
          UPI: doc?.data()?.UPI,
          Account_number: doc?.data()?.Account_number,
          Bank_name: doc?.data()?.Bank_name,
          IFC_code: doc?.data()?.IFC_code,
          Account_holder_name: doc?.data()?.Account_holder_name,
        })
      })
      setTransData(transTmpData)
    })
  }, [])

  const updateStatus = async (item, status) => {
    const Ref = doc(db, "transactionHistory", item?.id)

    // Set the "capital" field of the city 'DC'
    await updateDoc(Ref, {
      Account_holder_name: item?.Account_holder_name,
      Account_number: item?.Account_number,
      Bank_name: item?.Bank_name,
      IFC_code: item?.IFC_code,
      UPI: item?.UPI,
      amount: item?.amount,
      authId: item?.authId,
      commission: item?.commission,
      paymentType: item?.paymentType,
      transctionDate: item?.transctionDate,
      transctionStatus: status,
      id: item?.id,
      updatedDate: new Date(),
      message: msg
    })
    setMsg("")
  }

  return (
    <div className='overview'>
      <div className='overViewTitleContainer'>
        <h1 className='overviewTitle'>Withdraw Request Pending</h1>
      </div>
      {/* <div className='overViewTop'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Pending" {...a11yProps(0)} />
            <Tab label="Completed" {...a11yProps(1)} />
            <Tab label="All" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Pending
        </TabPanel>
        <TabPanel value={value} index={1}>
          Completed
        </TabPanel>
        <TabPanel value={value} index={2}>
          All
        </TabPanel>
      </div> */}
      <div >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {
            transData?.map((item, index) => {
              if (item?.transctionStatus == "Pending") {
                return (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item>
                      <Card >
                        <CardContent display="flex" justifyContent="flex-start">
                          <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                          >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              <Chip label={` Amount : ${item?.amount}`} color="primary" />
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              <Chip label={`Commission : ${item?.commission}`} color="success" />
                            </Typography>
                          </Box>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Payment Type : {item?.paymentType}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Transction Status : {item?.transctionStatus}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Account Holder Name : {item?.Account_holder_name}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Account Number : {item?.Account_number}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Bank Name : {item?.Bank_name}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            IFC Code : {item?.IFC_code}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            UPI : {item?.UPI}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small"
                            onClick={(event) => {
                              updateStatus(item, "Completed")
                            }}
                          >Approve</Button>
                        </CardActions>
                      </Card>
                    </Item>
                  </Grid>
                )
              }
            })
          }
        </Grid>
      </div>
      <div className='overViewTitleContainer'>
        <h1 className='overviewTitle'>Withdraw Request Completed</h1>

      </div>
      <div >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {
            transData?.map((item, index) => {
              if (item?.transctionStatus == "Completed") {
                return (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item>
                      <Card >
                        <CardContent display="flex" justifyContent="flex-start">
                          <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                          >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              <Chip label={` Amount : ${item?.amount}`} color="primary" />
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              <Chip label={`Commission : ${item?.commission}`} color="success" />
                            </Typography>
                          </Box>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Payment Type : {item?.paymentType}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Transction Status : {item?.transctionStatus}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Account Holder Name : {item?.Account_holder_name}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Account Number : {item?.Account_number}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            Bank Name : {item?.Bank_name}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            IFC Code : {item?.IFC_code}
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} textAlign="left" color="text.secondary" gutterBottom>
                            UPI : {item?.UPI}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small"
                            onClick={() => {
                              updateStatus(item, "Pending")
                            }}
                          >
                            Update Status
                          </Button>
                          <TextField
                            label="Message"
                            color="secondary"
                            value={msg}
                            onChange={(event) => {
                              setMsg(event.target.value)
                            }}
                          />
                        </CardActions>
                      </Card>
                    </Item>
                  </Grid>
                )
              }
            })
          }
        </Grid>
      </div>
    </div>
  )
}
