import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { FaInfo } from "react-icons/fa";
import InsightSummary from "./InsightSummary";
import PropTypes from "prop-types";

const data = [
  { category: "Downward Trends", commodities: ["Dry Maize", "Beans (Yellow-Green)", "Red Irish potato", "Tilapia"], value: 4 },
  { category: "Stable Prices", commodities: ["Meat Beef", "Kales/Sukuma Wiki"], value: 2 }
];

const COLORS = ["#16a34a", "#4c0519"];

const insightsSummary = `
Price Trends:
- Downward Trends: Prices for Dry Maize, Beans (Yellow-Green), Red Irish potato, and Tilapia have shown a downward trend over the week.
- Stable Prices: Meat Beef and Kales/Sukuma Wiki prices have remained relatively stable.

Market Dynamics:
- Fluctuations in prices can be influenced by factors such as seasonal variations, production levels, transportation costs, and consumer preferences.
- Understanding these trends can help stakeholders make informed decisions regarding production, marketing, and pricing strategies.
`;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-md shadow-md">
        <p className="text-sm font-bold font-mono ">{payload[0].payload.category}</p>
        <ul className="list-disc pl-4">
          {payload[0].payload.commodities.map((commodity, index) => (
            <li key={index}>{commodity}</li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
};

const MarketSnapshotChart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <InsightSummary summary={insightsSummary} />
      </div>
      <div className="bg-slate-50 rounded-md w-1/2 relative">
        <h1 className="text-center font-sanserif font-bold">General Market Snapshot from Weekly Retail Average Chart (Feb 7th - Feb 14th, 2024)</h1>
        <PieChart width={500} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="black"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {data[index].category}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
            formatter={(value, entry, index) => data[index].category}
          />
        </PieChart>
        <FaInfo onClick={handleModalToggle} className="absolute top-0 right-0 hover:bg-green-600" />
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md shadow-md max-w-md">
              <h2 className="text-lg font-bold mb-2">Insights Summary</h2>
              <p>{insightsSummary}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700" onClick={handleModalToggle}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketSnapshotChart;
