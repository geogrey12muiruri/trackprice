import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";

const weeklyRetailAverages = [
  { DateTime: "2024-02-07 21:00:00", "Dry Maize": 57, "Beans (Yellow-Green)": 164, "Red Irish potato": 77, Tilapia: 337, "Meat Beef": 533, "Kales/Sukuma Wiki": 80 },
  { DateTime: "2024-02-08 21:00:00", "Dry Maize": 558, "Beans (Yellow-Green)": 196, "Red Irish potato": 126, Tilapia: 746, "Meat Beef": 633, "Kales/Sukuma Wiki": 106 },
  { DateTime: "2024-02-09 21:00:00", "Dry Maize": 1234, "Beans (Yellow-Green)": 180, "Red Irish potato": null, Tilapia: null, "Meat Beef": 600, "Kales/Sukuma Wiki": 111 },
  { DateTime: "2024-02-10 21:00:00", "Dry Maize": 44, "Beans (Yellow-Green)": 175, "Red Irish potato": 30, Tilapia: null, "Meat Beef": null, "Kales/Sukuma Wiki": 40 },
  { DateTime: "2024-02-11 21:00:00", "Dry Maize": 580, "Beans (Yellow-Green)": 192, Tilapia: 550, "Meat Beef": 550, "Kales/Sukuma Wiki": 43 },
  { DateTime: "2024-02-12 21:00:00", "Dry Maize": 311, "Beans (Yellow-Green)": 168, "Red Irish potato": 70, Tilapia: 277, "Meat Beef": 587, "Kales/Sukuma Wiki": 47 },
  { DateTime: "2024-02-13 21:00:00", "Dry Maize": 442, "Beans (Yellow-Green)": 177, "Red Irish potato": 50, "Meat Beef": 537, "Kales/Sukuma Wiki": 46 },
  { DateTime: "2024-02-14 21:00:00", "Dry Maize": 60, "Beans (Yellow-Green)": 165, "Red Irish potato": 57, "Meat Beef": 25 }
];

const RetailChart = () => {
  return(
    <div className="bg-slate-50 rounded-md w-full">
      <h1 className="text-center font-sanserif font-bold">Weekly Retail Averages</h1>
      <div className="container">
        <LineChart width={500} height={400} data={weeklyRetailAverages} className="bg-slate-50 rounded-md">
          <XAxis dataKey="DateTime" />
          <YAxis interval={0} tickCount={6} domain={[0, 1500]}>
            <Label angle={-90} value='Retail Prices' position='insideLeft' style={{textAnchor: 'middle'}} />
          </YAxis>
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: "40px" }}/>
          <Line activeOpacity={0.05} type="monotone" dataKey="Dry Maize" stroke="#F44236" strokeWidth={1} dot={false} />
          <Line activeOpacity={0.05} type="monotone" dataKey="Beans (Yellow-Green)" stroke="#8884d8" strokeWidth={1} dot={false} />
          <Line activeOpacity={0.05} type="monotone" dataKey="Red Irish potato" stroke="#82ca9d" strokeWidth={1} dot={false} />
          <Line activeOpacity={0.05} type="monotone" dataKey="Tilapia" stroke="#123456" strokeWidth={1} dot={false} />
          <Line activeOpacity={0.05} type="monotone" dataKey="Meat Beef" stroke="#654321" strokeWidth={1} dot={false} />
          <Line activeOpacity={0.05} type="monotone" dataKey="Kales/Sukuma Wiki" stroke="#abcdef" strokeWidth={1} dot={false} />
        </LineChart>
      </div>
    </div>
  )
};

export default RetailChart;