import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 600 },
  { name: 'Jun', value: 800 },
  { name: 'Jul', value: 900 },
  { name: 'Aug', value: 400 },
  { name: 'Sep', value: 300 },
  { name: 'Oct', value: 200 },
  { name: 'Nov', value: 500 },
  { name: 'Dec', value: 600 },
];

const BarGraph = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [timeRange, setTimeRange] = useState('Quarterly'); // Initial time range

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(document.getElementById('graph-container')?.offsetWidth || 0);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  const barStyles = `
    .custom-bar:hover {
      fill: #1A78CF; /* Change the color on hover */
    }
  `;

  return (
    <>
      <style>{barStyles}</style>
      <Card  className="animated-card" variant="outlined" sx={{ borderRadius: '10px', boxShadow: 4, width: '90%', minWidth: '280px', padding: '20px', marginTop: '3%', marginLeft: '16px' }}>
        <CardContent id="graph-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '8px' }}>Overview</Typography>
              <Typography variant="body2" style={{ color: 'grey' }}>Monthly Earnings</Typography>
            </div>
            <Select value={timeRange} onChange={handleTimeRangeChange} variant="outlined" style={{ minWidth: '120px' }}>
              <MenuItem value="Quarterly">Quarterly</MenuItem>
              <MenuItem value="Half-yearly">Half-yearly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </Select>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="value"
                fill="#192A56"
                barSize={chartWidth > 600 ? 30 : 8} // Adjust bar size based on chart width
                stroke="#192A56" // Border color
                strokeWidth={1} // Border width
                className="custom-bar" // Add a class for custom styling
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default BarGraph;
