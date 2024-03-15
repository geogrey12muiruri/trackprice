import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
        "DateTime": "3/4/24",
        "Bungoma": "",
        "Kisumu": "44",
        "Meru": "33",
        "Nairobi": "44",
        "Nakuru": "51"
    },
    {
        "DateTime": "3/5/24",
        "Bungoma": "49",
        "Kisumu": "",
        "Meru": "",
        "Nairobi": "44",
        "Nakuru": "57"
    },
    {
        "DateTime": "3/6/24",
        "Bungoma": "",
        "Kisumu": "",
        "Meru": "30",
        "Nairobi": "44",
        "Nakuru": "57"
    },
    {
        "DateTime": "3/7/24",
        "Bungoma": "",
        "Kisumu": "",
        "Meru": "",
        "Nairobi": "",
        "Nakuru": "57"
    },
    {
        "DateTime": "3/8/24",
        "Bungoma": "",
        "Kisumu": "",
        "Meru": "",
        "Nairobi": "",
        "Nakuru": "0"
    },
    {
        "DateTime": "3/10/24",
        "Bungoma": "",
        "Kisumu": "",
        "Meru": "",
        "Nairobi": "44",
        "Nakuru": "51"
    }
];
const WeeklyWholesaleAverageChart = () => {
  
  
  return (

<>
<ResponsiveContainer width="100%" aspect={2} >
    <LineChart
      width={700}
      height={1200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1" horizontal={true} vertical=""/>
      <XAxis dataKey="DateTime" />
      <YAxis />
      <Tooltip />
      
      <Line type="monotone" dataKey="Bungoma" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Kisumu" stroke="#82ca9d" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Nakuru" stroke="#ffc658" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Meru" stroke="#ff0000" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Nairobi" stroke="#00ff00" activeDot={{ r: 8 }} />
     

    </LineChart>
  </ResponsiveContainer>
  

</>
  );
};

export default WeeklyWholesaleAverageChart;
