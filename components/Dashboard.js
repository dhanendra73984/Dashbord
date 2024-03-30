import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BarGraph from './BarGraph'; // Import the BarGraph component
import PieGraph from './PieGraph'; // Import the PieGraph component
import './Dashboard.css'; // Import the CSS file for animations
import ProductList from './ProductList'; // Import ProductList component

function Dashboard() {
  // Custom style for the circular shadow background
  const circleShadowStyle = {
    borderRadius: '50%',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
  };

  return (
    <div>

      

 

      <div style={{marginLeft:'16px'}}> 
      <Grid container spacing={3}>
        {/* First Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="animated-card" variant="outlined" sx={{ borderRadius: '8px', boxShadow: 4, display: 'flex', alignItems: 'center', padding: '12px', width: '80%' }}>
            <div style={{ ...circleShadowStyle, background: '#6AB04A' }}>
              <MonetizationOnIcon fontSize="large" color="primary" style={{ fontSize: 64, color: '#fff' }} />
            </div>
            <CardContent>
              <Typography variant="body2" sx={{ marginLeft: '12px', color: 'grey' }}>Earning</Typography>
              <Typography variant="h5" sx={{ marginLeft: '12px', fontWeight: 'bold' }}>$198K</Typography>
              <Typography variant="body2" sx={{ marginLeft: '12px' }}>
                <span style={{ color: 'green' }}>+27% </span>
                <span>this month</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="animated-card" variant="outlined" sx={{ borderRadius: '8px', boxShadow: 4, display: 'flex', alignItems: 'center', padding: '12px', width: '80%' }}>
            <div style={{ ...circleShadowStyle, background: '#BB2CD9' }}>
              <ListAltIcon fontSize="large" color="primary" style={{ fontSize: 64, color: '#fff' }} />
            </div>
            <CardContent>
              <Typography variant="body2" sx={{ marginLeft: '12px', color: 'grey' }}>Order</Typography>
              <Typography variant="h5" sx={{ marginLeft: '12px', fontWeight: 'bold' }}>$2.4K</Typography>
              <Typography variant="body2" sx={{ marginLeft: '12px' }}>
                <span style={{ color: 'red' }}>-2% </span>
                <span>this month</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="animated-card" variant="outlined" sx={{ borderRadius: '8px', boxShadow: 4, display: 'flex', alignItems: 'center', padding: '12px', width: '80%' }}>
            <div style={{ ...circleShadowStyle, background: '#2B2B52' }}>
              <AttachMoneyIcon fontSize="large" color="primary" style={{ fontSize: 64, color: '#fff' }} />
            </div>
            <CardContent>
              <Typography variant="body2" sx={{ marginLeft: '12px', color: 'grey' }}>Balance</Typography>
              <Typography variant="h5" sx={{ marginLeft: '12px', fontWeight: 'bold' }}>$2.4K</Typography>
              <Typography variant="body2" sx={{ marginLeft: '12px' }}>
                <span style={{ color: 'green' }}>+24% </span>
                <span>this month</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Fourth Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="animated-card" variant="outlined" sx={{ borderRadius: '8px', boxShadow: 4, display: 'flex', alignItems: 'center', padding: '12px', width: '80%' }}>
            <div style={{ ...circleShadowStyle, background: '#E71C23' }}>
              <ShoppingCartIcon fontSize="large" color="primary" style={{ fontSize: 64, color: '#fff' }} />
            </div>
            <CardContent>
              <Typography variant="body2" sx={{ marginLeft: '12px', color: 'grey' }}>Total Score</Typography>
              <Typography variant="h5" sx={{ marginLeft: '12px', fontWeight: 'bold' }}>$89K</Typography>
              <Typography variant="body2" sx={{ marginLeft: '12px' }}>
                <span style={{ color: 'red' }}>-7% </span>
                <span>this month</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      </div>

      <div style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          {/* Bar Graph - 80% width on small screens, 66.67% width on larger screens */}
          <BarGraph />
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Pie Graph - 20% width on small screens, 33.33% width on larger screens */}
          <PieGraph />
        </Grid>
      </Grid>
    </div>


    <div style={{marginTop:'20px',marginRight:'2%'}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>

              <ProductList /> {/* Add the ProductList component here */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>


    </div>
  );
}

export default Dashboard;
