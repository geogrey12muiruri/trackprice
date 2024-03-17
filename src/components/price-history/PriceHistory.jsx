import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PriceHistory = () => {
  const [priceData, setPriceData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1); // February (month index starts from 0)

  useEffect(() => {
    // Fetch price history data for the current year (2024) from your backend
    fetch('/api/price/getPrices')
      .then(response => response.json())
      .then(data => {
        // Filter the data to include only February 2024 and the specified commodities
        const filteredData = data.filter(item => {
          const date = new Date(item.date);
          return (
            date.getFullYear() === 2024 &&
            date.getMonth() === selectedMonth &&
            (item.commodity === 'Dry Maize')
          );
        });
        setPriceData(filteredData);
      })
      .catch(error => console.error('Error fetching price history:', error));
  }, [selectedMonth]);

  const handleChangeMonth = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <h2>Select Month:</h2>
        <select onChange={handleChangeMonth} defaultValue="1"> {/* Default to February */}
          <option value="0">January</option>
          <option value="1">February</option>
          {/* Add more months as needed */}
        </select>
      </div>
      <div>
        <ResponsiveContainer width={800} height={500}>
          <LineChart data={priceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="averageWholesalePrice" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="averageRetailPrice" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceHistory;
