import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Label, ResponsiveContainer } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const data = [
  { name: 'New Customers', value: 65 },
  { name: 'Other Customers', value: 35 },
];

const COLORS = ['#BB2CD9', '#8B78E6'];

const PieGraph = () => {
  return (
    <Card className="animated-card" variant="outlined" elevation={3} sx={{ borderRadius: '10px', marginTop: '6.5%', marginRight:'9%', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <CardContent>
        <Typography variant="h3 " fontWeight={'bold'}>Customers</Typography> {/* Added Customers text */}
        <Typography variant="body2" color="textSecondary"  gutterBottom>
          Customers that buy products
        </Typography> {/* Added Customers that buy products text */}
        <ResponsiveContainer width="100%" height={312}> {/* Increased height to 300 */}
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={110}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={(entry) => {
                if (entry.name === 'New Customers') {
                  return `${entry.name} (${entry.value}%)`;
                }
                return null;
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <Label value="65%" position="center" fontSize={25} color='black' />
              <Label value="New Customer" position="center" fontSize={18} color='black' dy={25} />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PieGraph;
