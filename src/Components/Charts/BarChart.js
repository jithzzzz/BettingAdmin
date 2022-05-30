import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as chartjs } from 'chart.js/auto'
import { InputLabel, Select, MenuItem } from '@material-ui/core'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

var MicroBarChart = require('react-micro-bar-chart')


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))


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


function BarChart() {
  const [chartstate, setChartState] = useState("")
  // tab vale
  const [value, setValue] = React.useState(0)

  // update tab value 
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  var tstData = [17, 2, 33, 4, 10]
  return (
    <div className='chart'>
      <div className='chartData'>
        <h3 className='chartTitle'>Betting Analytics on current Spell 23456789</h3>
        <h3 className='chartName'>{chartstate}</h3>
        <div className='selection'>
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
        </div>
      </div>
      <div>
        {/* <Bar
          data={{
            labels: ['Red', 'Green', 'Gold', 'N-0', 'N-1', 'N-2', 'N-3', 'N-4', 'N-5', 'N-6', 'N-7', 'N-8', 'N-9', 'N-10'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3, 10, 3, 44, 25, 6, 33, 26, 10],
              backgroundColor: [
                'rgba(255, 41, 41, 0.5)',
                'rgba(116, 250, 20, 0.5)',
                'rgba(255, 241, 38, 0.5)',
                'rgba(255, 41, 41, 0.5)',
                'rgba(116, 250, 20, 0.5)',
                'rgba(255, 41, 41, 0.5)',
                'rgba(116, 250, 20, 0.5)',
                'rgba(255, 241, 38, 0.5)',
              ],
              borderColor: [
                'rgba(255, 41, 41, 1)',
                'rgba(116, 250, 20, 1)',
                'rgba(255, 241, 38, 1)',
                'rgba(255, 41, 41, 1)',
                'rgba(116, 250, 20, 1)',
                'rgba(255, 41, 41, 1)',
                'rgba(116, 250, 20, 1)',
                'rgba(255, 241, 38, 1)',
              ],
              borderWidth: 5
            }]
          }}
          height={300}
          width={300}
          options={{
            maintainAspectRatio: false,
          }}
        /> */}

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          <Grid item xs={1} sm={5} md={5} key={"index"}>
            <Item>
              <Card >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Pekka
                  </Typography>
                  <MicroBarChart
                    width={200}
                    height={50}
                    hoverColor="rgb(161,130,214)"
                    data={tstData}
                    fillColor={["red", "black", "blue", "green", "yellow"]}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Approve</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={1} sm={5} md={5} key={"index"}>
            <Item>
              <Card >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

                  </Typography>
                  <MicroBarChart
                    width={200}
                    height={50}
                    hoverColor="rgb(161,130,214)"
                    fillColor="rgb(210,193,237)"
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Approve</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={1} sm={5} md={5} key={"index"}>
            <Item>
              <Card >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Pekka
                  </Typography>
                  <MicroBarChart
                    width={200}
                    height={50}
                    hoverColor="rgb(161,130,214)"
                    fillColor="rgb(210,193,237)"
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Approve</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={1} sm={5} md={5} key={"index"}>
            <Item>
              <Card >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Pekka
                  </Typography>
                  <MicroBarChart
                    width={200}
                    height={50}
                    hoverColor="rgb(161,130,214)"
                    fillColor="rgb(210,193,237)"
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Approve</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default BarChart
