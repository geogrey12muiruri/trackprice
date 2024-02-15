import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { FaInfo } from "react-icons/fa";

const pieChartData = [
  { category: "Meru", value: 105 },
  { category: "Nairobi", value: 256 },
  { category: "Nakuru", value: 204 }
];

const COLORS = ["#16a34a", "#1e40af", "#22c55e"];

const MyChart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const insightsSummary = `
    Market Share:
    - Meru: 18.6%
    - Nairobi: 45.4%
    - Nakuru: 36.1%

    Market Analysis:
    - Nairobi has the highest market share.
    - Meru and Nakuru have comparable market shares.
  `;

  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="bg-slate-50 rounded-md  w-1/2 relative">
          <h2 className="text-center font-serif font-bold">Market Share</h2>
          <PieChart width={500} height={300}>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="category"
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
                    {`${pieChartData[index].category} (${(value / 565 * 100).toFixed(0)}%)`}
                  </text>
                );
              }}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend align="center" verticalAlign="bottom" />
          </PieChart>
          <FaInfo onClick={handleModalToggle} className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer hover:text-blue-500" />
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
    </div>
  );
};

export default MyChart;
