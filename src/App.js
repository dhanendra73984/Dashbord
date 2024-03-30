import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyDrawer from './components/MyDrawer';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Customers from './components/Customers';
import Promote from './components/Promote';
import Income from './components/Income';
import Help from './components/Help';
import Profile from './components/Profile';
import { Typography, Icon } from '@mui/material';
import { Person as PersonIcon, Search as SearchIcon } from '@mui/icons-material';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,marginLeft:'16px',marginBottom:'20px',marginRight:'3%',marginTop:'10px' }}>
            <div>
              <button
                onClick={toggleDrawer}
                style={{
                  
                  backgroundColor: '#192A56',
                  color: '#ffffff',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
              >
                Explore Dashboard
              </button>
              <MyDrawer isOpen={drawerOpen} onClose={toggleDrawer} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
      style={{
        display: 'flex',
        alignItems: 'center',
        background: '#FFFFFF',
        border: '1px solid #CCCCCC',
        borderRadius: '5px',
        padding: '5px 10px',
      }}
    >
      <Icon
        component={SearchIcon}
        style={{
          fontSize: '1rem',
          color: '#2B2B52',
          marginRight: '5px', // Add spacing between icon and placeholder text
        }}
      />
      <input
        type="text"
        placeholder="Search"
        style={{
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontSize: '0.5rem',
          color: '#2B2B52',
          width: '60%', // Adjust the width as needed
        }}
      />
    </div>
              <Typography variant="h7" style={{ color: '#2B2B52' ,marginLeft:'10px' }}>
                Dhanendra ,
              </Typography>
              <Icon component={PersonIcon} style={{ marginRight: '10px', fontSize: '1.5rem', color: '#2B2B52' }} />
              
            </div>
          </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/income" element={<Income />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
