import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StatisticsBox = ({ month }) => {
    const [stats, setStats] = useState({ totalSalesAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

  const fetchStatistics = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/statistics", { params: { month } });
      setStats(response.data);
    } catch (error) {
      console.error("Failed to fetch statistics", error);
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, [month]);
  return (
    <div className="row text-center mb-4">
      <div className="col-md-4">
        <div className="card bg-light shadow-sm">
          <div className="card-body">
            <h5>Total Sales Amount</h5>
            <p className="h4">{stats.totalSalesAmount}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-light shadow-sm">
          <div className="card-body">
            <h5>Total Sold Items</h5>
            <p className="h4">{stats.totalSoldItems}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-light shadow-sm">
          <div className="card-body">
            <h5>Total Not Sold Items</h5>
            <p className="h4">{stats.totalNotSoldItems}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsBox
