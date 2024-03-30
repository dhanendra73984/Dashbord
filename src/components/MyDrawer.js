import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HelpIcon from '@mui/icons-material/Help';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MyDrawer = ({ isOpen, onClose }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleListItemClick = (item) => {
    setSelectedItem(item);
    onClose(); // Close the drawer after selecting an item
  };

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#192A56',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        },
      }}
    >
      <div>
        <Typography variant="h6" sx={{ color: '#ffffff', marginTop: '16px', marginBottom: '8px', paddingLeft: '24px' }}>
          <DashboardIcon sx={{ fontSize: '18px', marginRight: '8px' }} />
          Dashboard
        </Typography>
        <List sx={{ width: 250, marginTop: '8px', fontFamily: 'Arial, sans-serif' }}>
          <ListItem
            button
            component={Link}
            to="/"
            selected={selectedItem === 'dashboard'}
            onClick={() => handleListItemClick('dashboard')}
            sx={{
              paddingLeft: '16px',
              borderRadius: '8px',
              '&:hover': { backgroundColor: '#1A5276' },
              color: selectedItem === 'dashboard' ? '#f1c40f' : '#ffffff',
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff', minWidth: '24px', marginLeft: '4px' }}>
              <DashboardIcon sx={{ fontSize: '14px' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ fontSize: '10px' }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/products"
            selected={selectedItem === 'products'}
            onClick={() => handleListItemClick('products')}
            sx={{
              paddingLeft: '16px',
              borderRadius: '8px',
              '&:hover': { backgroundColor: '#1A5276' },
              color: selectedItem === 'products' ? '#f1c40f' : '#ffffff',
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff', minWidth: '24px', marginLeft: '4px' }}>
              <StorefrontIcon sx={{ fontSize: '14px' }} />
            </ListItemIcon>
            <ListItemText primary="Products" sx={{ fontSize: '10px' }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/customers"
            selected={selectedItem === 'customers'}
            onClick={() => handleListItemClick('customers')}
            sx={{
              paddingLeft: '16px',
              borderRadius: '8px',
              '&:hover': { backgroundColor: '#1A5276' },
              color: selectedItem === 'customers' ? '#f1c40f' : '#ffffff',
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff', minWidth: '24px', marginLeft: '4px' }}>
              <PeopleIcon sx={{ fontSize: '14px' }} />
            </ListItemIcon>
            <ListItemText primary="Customers" sx={{ fontSize: '10px' }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/promote"
            selected={selectedItem === 'promote'}
            onClick={() => handleListItemClick('promote')}
            sx={{
              paddingLeft: '16px',
              borderRadius: '8px',
              '&:hover': { backgroundColor: '#1A5276' },
              color: selectedItem === 'promote' ? '#f1c40f' : '#ffffff',
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff', minWidth: '24px', marginLeft: '4px' }}>
              <TrendingUpIcon sx={{ fontSize: '14px' }} />
            </ListItemIcon>
            <ListItemText primary="Promote" sx={{ fontSize: '10px' }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/income"
            selected={selectedItem === 'income'}
            onClick={() => handleListItemClick('income')}
            sx={{
              paddingLeft: '16px',
              borderRadius: '8px',
              '&:hover': { backgroundColor: '#1A5276' },
              color: selectedItem === 'income' ? '#f1c40f' : '#ffffff',
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff', minWidth: '24px', marginLeft: '4px' }}>
              <MonetizationOnIcon sx={{ fontSize: '14px' }} />
            </ListItemIcon>
            <ListItemText primary="Income" sx={{ fontSize: '10px' }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/help"
            selected={selectedItem === 'help'}
            onClick={() => handleListItemClick('help')}
            sx={{
              paddingLeft: '16px',
              borderRadius: '8px',
              '&:hover': { backgroundColor: '#1A5276' },
              color: selectedItem === 'help' ? '#f1c40f' : '#ffffff',
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff', minWidth: '24px', marginLeft: '4px' }}>
              <HelpIcon sx={{ fontSize: '14px' }} />
            </ListItemIcon>
            <ListItemText primary="Help" sx={{ fontSize: '10px' }} />
          </ListItem>
        </List>
      </div>

      <List sx={{ width: '100%', marginBottom: '40px' }}>
        <ListItem
          button
          component={Link}
          to="/profile"
          onClick={() => handleListItemClick('profile')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px',
            backgroundColor: '#3C40C6',
            color: selectedItem === 'profile' ? '#f1c40f' : '#ffffff',
          }}
        >
          <ListItemIcon sx={{ color: '#ffffff', minWidth: '24px', marginRight: '8px' }}>
            <Avatar alt="Profile Picture" src="path to your image" sx={{ width: 34, height: 34 }} />
          </ListItemIcon>
          <div>
            <ListItemText primary="Dhanendra Sahu" sx={{ fontSize: '14px' }} />
            <Typography variant="body2" sx={{ fontSize: '12px', color: '#ffffff' }}>
              Project Engineer
            </Typography>
          </div>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MyDrawer;
