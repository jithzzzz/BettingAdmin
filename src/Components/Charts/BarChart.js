import React, { useEffect, useState } from 'react'
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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer
} from "recharts";


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


function BarCharts({ dataset, pekka, PID, HID, WID, AID }) {
  const [chartstate, setChartState] = useState("")
  const [value, setValue] = React.useState(0) // tab vale
  const [data, setData] = useState()
  const [spellId, setSpellId] = useState(0)

  useEffect(() => {
    // console.log(pekka?.[0]?.spell_Id, " : YYYYYY")
    // console.log(dataset)
    setData(dataset)
    setSpellId(`${pekka?.[0]?.spell_date}/${pekka?.[0]?.spell_Id}`)
  }, [pekka])


  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 10;
  
    return (
      <g>
        {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#8884d8"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}
        </text>
      </g>
    );
  };

  
  const ChartSmall = ({ gameName, id }) => {
    let red = 0
    let green = 0
    let gold = 0
    let zero = 0
    let one = 0
    let two = 0
    let three = 0
    let four = 0
    let five = 0
    let six = 0
    let seven = 0
    let eight = 0
    let nine = 0

    data?.map((item, index) => {
      if (item?.data?.game_name == gameName && item?.data?.spellId == id) {
        if (item?.data?.color == "Red") {
          red = red + item?.data?.bettingAmount
        } else if (item?.data?.color == "Green") {
          green = green + item?.data?.bettingAmount
        } else if (item?.data?.color == "Gold") {
          gold = gold + item?.data?.bettingAmount
        } else if (item?.data?.number == 0) {
          zero = zero + item?.data?.bettingAmount
        } else if (item?.data?.number == 1) {
          one = one + item?.data?.bettingAmount
        } else if (item?.data?.number == 2) {
          two = two + item?.data?.bettingAmount
        } else if (item?.data?.number == 3) {
          three = three + item?.data?.bettingAmount
        } else if (item?.data?.number == 4) {
          four = four + item?.data?.bettingAmount
        } else if (item?.data?.number == 5) {
          five = five + item?.data?.bettingAmount
        } else if (item?.data?.number == 6) {
          six = six + item?.data?.bettingAmount
        } else if (item?.data?.number == 7) {
          seven = seven + item?.data?.bettingAmount
        } else if (item?.data?.number == 8) {
          eight = eight + item?.data?.bettingAmount
        } else if (item?.data?.number == 9) {
          nine = nine + item?.data?.bettingAmount
        }
      }

    })

    const ChartData = [
      {
        red: red,
        green: green,
        gold: gold,
        N0: zero,
        N1: one,
        N2: two,
        N3: three,
        N4: four,
        N5: five,
        N6: six,
        N7: seven,
        N8: eight,
        N9: nine,
      },
    ]
    return (
      <ResponsiveContainer width={430} height={400}>
      <BarChart
      width={400}
      height={400}
      data={ChartData}
      margin={{
        top: 60,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="red" fill="red" maxPointSize={100}>
          <LabelList dataKey="red" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="green" fill="green">
          <LabelList dataKey="green" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="gold" fill="gold">
          <LabelList dataKey="gold" content={renderCustomizedLabel} />
        </Bar>

        <Bar dataKey="N0" fill="gray" >
          <LabelList dataKey="N0" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="N1" fill="gray" >
          <LabelList dataKey="N1" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="N2" fill="gray" >
          <LabelList dataKey="N2" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="N3" fill="gray" >
          <LabelList dataKey="N3" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="N4" fill="gray" >
          <LabelList dataKey="N4" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="N5" fill="gray" >
          <LabelList dataKey="N5" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="N6" fill="gray" >
          <LabelList dataKey="N6" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="N7" fill="gray" >
          <LabelList dataKey="N7" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="N8" fill="gray" >
          <LabelList dataKey="N8" content={renderCustomizedLabel} />
        </Bar>
        <Bar dataKey="N9" fill="gray" >
          <LabelList dataKey="N9" content={renderCustomizedLabel} />
        </Bar>
      </BarChart>
      </ResponsiveContainer>
    )
  }

  const ChartHealer = () => {

  }


  // update tab value 
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className='chart'>
      <div className='chartData'>
        <h3 className='chartTitle' >{`Betting Analytics on current Spell ${spellId}`}</h3>
        <h3 className='chartName'>{chartstate}</h3>
        {/* <div className='selection'>
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
          <Grid item xs={1} sm={5} md={5}>
            <Item>
              <Card >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Pekka
                  </Typography>
                  {/**Chart */}
                  <ChartSmall gameName="Pekka" key={data} id={PID} />
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={1} sm={5} md={5}>
            <Item>
              <Card >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Healer
                  </Typography>
                  {/**Chart */}
                  <ChartSmall gameName="Healer" key={data} id={HID} />
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={1} sm={5} md={5} >
            <Item>
              <Card >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Wizard
                  </Typography>
                  {/**Chart */}
                  <ChartSmall gameName="Wizard" key={data} id={WID} />
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={1} sm={5} md={5} >
            <Item>
              <Card >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Archer
                  </Typography>
                  {/**Chart */}
                  <ChartSmall gameName="Archer" key={data} id={AID} />
                </CardContent>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default BarCharts
