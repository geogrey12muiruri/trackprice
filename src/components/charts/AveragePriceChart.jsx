import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    "DateTime": "3/5/24",
    "Dry Maize": "51",
    "Beans (Yellow-Green)": "173",
    "Red Irish potato": "65",
    "Tilapia": "187",
    "Meat Beef": "600",
    "Kales/Sukuma Wiki": "46"
},
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
}
];
const AveragePriceChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: '#fff', border: '1px solid #ccc', padding: '10px' }}>
          <p>{`Date: ${label}`}</p>
          {payload.map((entry) => (
            <p key={entry.name} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
  
    return null;
  };
  

  
  
  return (

<>
<ResponsiveContainer width="100%" aspect={2} >
    <LineChart
      width={700}
      height={700}
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
      
      <Tooltip content={<CustomTooltip />} />
      <Line type="monotone" dataKey="Dry Maize" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Beans (Yellow-Green)" stroke="#82ca9d" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Red Irish potato" stroke="#ffc658" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Tilapia" stroke="#ff0000" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Meat Beef" stroke="#00ff00" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Kales/Sukuma Wiki" stroke="#0000ff" activeDot={{ r: 8 }} />

    </LineChart>
  </ResponsiveContainer>
  
</>
  );
};

export default AveragePriceChart;
