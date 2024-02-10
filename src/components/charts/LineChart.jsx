import React from 'react';
import { Line } from 'react-chartjs-2';
import {TimeScale} from 'chart.js'
import ChartJS from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
ChartJS.register(TimeScale);  
const LineChart = () => {
  const data = {
    labels: [
      '2024-01-31',
      '2024-02-01',
      '2024-02-02',
      '2024-02-03',
      '2024-02-04',
      '2024-02-05',
      '2024-02-06',
      '2024-02-07',
    ],
    datasets: [
      {
        label: 'Dry Maize',
        data: [59, 51, 941, 52, 57, 49, 65, 59],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Beans (Yellow-Green)',
        data: [149, 199, 179, 160, 1104, 200, 176, 0],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Red Irish Potato',
        data: [100, 55, null, 40, 65, 67, 75, 98],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
      },
      {
        label: 'Tilapia',
        data: [null, 467, 340, 500, 557, 390, 330, 390],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Meat Beef',
        data: [600, 630, 600, null, 533, 620, 633, 550],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
      {
        label: 'Kales/Sukuma Wiki',
        data: [41, 33, 25, 70, 37, 27, 36, 44],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
    ],
  };



  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },
      },
      y: {
        beginAtZero: true
      },
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Weekly Retail Averages</h2>
      <div className="w-full max-w-lg">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
