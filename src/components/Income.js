import React from 'react';
import { Typography, Container, Paper } from '@mui/material';
import { PieChart, Pie, Tooltip, Cell, Label, ResponsiveContainer } from 'recharts';

// Dummy data for income categories
const incomeCategories = [
  { id: 1, category: 'Salary', amount: 5000 },
  { id: 2, category: 'Freelancing', amount: 1200 },
  { id: 3, category: 'Investments', amount: 700 },
  { id: 4, category: 'Rental Income', amount: 1000 },
  { id: 5, category: 'Other', amount: 500 },
];

function Income() {
  // Calculate total income
  const totalIncome = incomeCategories.reduce((sum, category) => sum + category.amount, 0);

  // Prepare data for the donut chart
  const data = incomeCategories.map((category) => ({
    name: category.category,
    value: (category.amount / totalIncome) * 100, // Percentage of total income
  }));

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5722'];

  return (
    <Container
      style={{
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center', // Align the chart in the center horizontally
        marginBottom:'50px'
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: '16px',
          borderRadius: '10px',
          width: '80%', // Set a width for the paper container
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{ textAlign: 'center', marginBottom: 24, color: 'white', padding: '10px', borderRadius: '5px', background: 'linear-gradient(to right, #2980b9, #2c3e50)' }}
        >
          Income
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                label={({ name }) => name}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label
                  value={`$${totalIncome}`}
                  position="center"
                  style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {incomeCategories.map((category) => (
          <Paper
            key={category.id}
            style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
              padding: '16px',
              marginBottom: '16px',
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              style={{
                color: '#4CAF50',
                marginBottom: '10px',
                fontSize: '1.25rem',
                fontWeight: 'bold',
              }}
            >
              {category.category}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              style={{
                color: '#333',
                fontSize: '1rem',
              }}
            >
              Amount: {category.amount}
            </Typography>
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}

export default Income;
