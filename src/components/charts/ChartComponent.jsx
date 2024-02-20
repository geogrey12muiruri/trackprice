import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, Line } from 'recharts';

const ChartComponent = () => {
  const data = [
    { Market: 'Nairobi Wakulima', Commodity: 'Tomatoes', Wholesale: 80.00, Retail: 100.00 },
    { Market: 'Nairobi Wakulima', Commodity: 'Spinach', Wholesale: 130.00, Retail: 150.00 },
    { Market: 'Nairobi Wakulima', Commodity: 'Okra (Lady\'s fingers or Gumbo)', Wholesale: 40.00, Retail: 60.00 },
    { Market: 'Nyamakima', Commodity: 'Rice Pishori', Wholesale: 162.00, Retail: 190.00 },
    { Market: 'Nairobi Wakulima', Commodity: 'Lettuce', Wholesale: 120.00, Retail: 140.00 },
    { Market: 'Nairobi Wakulima', Commodity: 'Kales/Sukuma Wiki', Wholesale: 30.00, Retail: 50.00 },
    { Market: 'Nairobi Wakulima', Commodity: 'Green Maize', Wholesale: 60.00, Retail: 80.00 },
    { Market: 'Nyamakima', Commodity: 'Rice Sindano', Wholesale: 156.00, Retail: 170.00 },
    { Market: 'Nairobi Wakulima', Commodity: 'Ginger', Wholesale: 150.00, Retail: 170.00 },
    { Market: 'Nyamakima', Commodity: 'Red Sorghum', Wholesale: 70.00, Retail: 80.00 },
    // Add more data as needed
  ];

  const chartData = data.map((item) => ({
    ...item,
    [`${item.Market} - Wholesale`]: item.Wholesale,
    [`${item.Market} - Retail`]: item.Retail,
  }));

  return (
    <div >
      <div>
        <h2 className="flex justify-center font-serif font-bold">Commodity Prices Across Markets</h2>
        <LineChart width={500} height={400} data={chartData} >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="Commodity" angle={-45} textAnchor="end" />
          <YAxis domain={[0, 'dataMax']} >
            <Label angle={-90} value='Prices' position='insideLeft' style={{ textAnchor: 'middle' }} className="font-bold" />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: "40px" }} />
          {Array.from(new Set(data.map((item) => item.Market))).map((market, index) => (
            <Line key={index} type="monotone" dataKey={`${market} - Wholesale`} name={`Wholesale - ${market}`} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
          ))}
          {Array.from(new Set(data.map((item) => item.Market))).map((market, index) => (
            <Line key={index} type="monotone" dataKey={`${market} - Retail`} name={`Retail - ${market}`} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
          ))}
        </LineChart>
      </div>
      {/* Add other components as needed */}
    </div>
  );
};

export default ChartComponent;
