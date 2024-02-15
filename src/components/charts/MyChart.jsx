import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";
import RetailChart from "./RetailChart";

const data = [
  { DateTime: "2024-02-08 21:00:00", Meru: null, Nairobi: 52, Nakuru: null },
  { DateTime: "2024-02-09 21:00:00", Meru: null, Nairobi: 52, Nakuru: 0 },
  { DateTime: "2024-02-11 21:00:00", Meru: null, Nairobi: 52, Nakuru: 57 },
  { DateTime: "2024-02-12 21:00:00", Meru: 55, Nairobi: 64, Nakuru: 52 },
  { DateTime: "2024-02-13 21:00:00", Meru: 50, Nairobi: 44, Nakuru: 38 },
  { DateTime: "2024-02-14 21:00:00", Meru: 50, Nairobi: 44, Nakuru: 57 }
];

const MyChart = () => {
  return (
    <div className="flex">
      <div className="bg-slate-50 rounded-md w-1/2">
        <h2 className="flex justify-center font-serif font-bold">Weekly Wholesale Average for Dry Maize</h2>
        <LineChart width={700} height={400} data={data} className="bg-slate-50 rounded-md">
          <XAxis dataKey="DateTime" />
          <YAxis domain={[0, 70]}>
            <Label angle={-90} value='Wholesale Prices' position='insideLeft' style={{ textAnchor: 'middle' }} className="font-bold" />
          </YAxis>
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: "40px" }} />
          <Line activeOpacity={0.05} type="monotone" dataKey="Meru" stroke="#831843" strokeWidth={1} />
          <Line activeOpacity={0.05} type="monotone" dataKey="Nairobi" stroke="#1e40af" strokeWidth={1} />
          <Line activeOpacity={0.05} type="monotone" dataKey="Nakuru" stroke="#22c55e" strokeWidth={1} />
        </LineChart>
      </div>
      <div className="w-1/2">
        <RetailChart />
      </div>
    </div>
  );
};

export default MyChart;
