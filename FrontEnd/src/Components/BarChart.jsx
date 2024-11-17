import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';


const BarChart = ({ month }) => {
  const [chartData, setChartData] = useState([]);

  const fetchChartData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bar-chart", { params: { month } });
      setChartData(response.data);
    } catch (error) {
      console.error("Failed to fetch chart data", error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [month]);

  const data = {
    labels: chartData.map((item) => item.range),
    datasets: [
      {
        label: "Items in Price Range",
        data: chartData.map((item) => item.count),
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      {/* <Bar data={data} /> */}
    </div>
  );
};


export default BarChart
