

import React from 'react'

// import the necessary components from recharts

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// lets add our data, it's an array of objects

const data = [
  {
    "DateTime": "3/6/24",
    "Dry Maize": "48",
    "Beans (Yellow-Green)": "187",
    "Red Irish potato": "0",
    "Tilapia": "",
    "Meat Beef": "566",
    "Kales/Sukuma Wiki": "48"
},
{
    "DateTime": "3/7/24",
    "Dry Maize": "54",
    "Beans (Yellow-Green)": "199",
    "Red Irish potato": "130",
    "Tilapia": "700",
    "Meat Beef": "610",
    "Kales/Sukuma Wiki": "59"
},
{
    "DateTime": "3/8/24",
    "Dry Maize": "56",
    "Beans (Yellow-Green)": "215",
    "Red Irish potato": "",
    "Tilapia": "",
    "Meat Beef": "600",
    "Kales/Sukuma Wiki": "70"
},
{
    "DateTime": "3/9/24",
    "Dry Maize": "50",
    "Beans (Yellow-Green)": "175",
    "Red Irish potato": "50",
    "Tilapia": "500",
    "Meat Beef": "",
    "Kales/Sukuma Wiki": "40"
},
{
    "DateTime": "3/10/24",
    "Dry Maize": "46",
    "Beans (Yellow-Green)": "174",
    "Red Irish potato": "62",
    "Tilapia": "550",
    "Meat Beef": "533",
    "Kales/Sukuma Wiki": "32"
},
{
    "DateTime": "3/11/24",
    "Dry Maize": "71",
    "Beans (Yellow-Green)": "214",
    "Red Irish potato": "69",
    "Tilapia": "387",
    "Meat Beef": "630",
    "Kales/Sukuma Wiki": "42"
},
{
    "DateTime": "3/12/24",
    "Dry Maize": "45",
    "Beans (Yellow-Green)": "185",
    "Red Irish potato": "",
    "Tilapia": "315",
    "Meat Beef": "633",
    "Kales/Sukuma Wiki": "111"
},
{
    "DateTime": "3/13/24",
    "Dry Maize": "960",
    "Beans (Yellow-Green)": "130",
    "Red Irish potato": "",
    "Tilapia": "340",
    "Meat Beef": "650",
    "Kales/Sukuma Wiki": ""
}
]

const AverageRetailPricesChart = () => {
  return (
    <div>
      {/* wrap our chart inside a responsive container */}

      <ResponsiveContainer width = "100%" aspect={2} >
      {/* render the LineChart component from recharts */}

      <LineChart
      width={700}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      
      >

      {/* render the CartesianGrid */}

      <CartesianGrid strokeDasharray="1" horizontal={true} vertical=""/>

      {/* RENDER HE X AND Y AXES */}
      <XAxis dataKey="DateTime" />
      <YAxis />

      {/* RENDER THE TOOLTIP TO DISPLAY MORE INFO */}

      <Tooltip />

      {/* RENDER THE LINES TO REPRESENT THE DATA WE HAVE 6 PRODUCTS */}

      <Line type="monotone" dataKey="Dry Maize" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Beans (Yellow-Green)" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Red Irish potato" stroke="#ff7300" />
      <Line type="monotone" dataKey="Tilapia" stroke="#ff0000" />
      <Line type="monotone" dataKey="Meat Beef" stroke="#0000ff" />
      <Line type="monotone" dataKey="Kales/Sukuma Wiki" stroke="#00ff00" />



      </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

export default AverageRetailPricesChart

