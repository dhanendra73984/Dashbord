import React from 'react';
import './Dashboard.css'; // Import the CSS file for animations

// Dummy data for promotions
const promotions = [
  { id: 1, title: 'Get 20% off on all products', description: 'Limited time offer. Use code: SAVE20' },
  { id: 2, title: 'Buy one, get one free on selected items', description: 'Limited stock available. Grab yours now!' },
  { id: 3, title: 'Free shipping on orders over $50', description: 'Valid for standard shipping within the US' },
  { id: 4, title: 'Refer a friend and earn rewards', description: 'Share your referral code and earn points for each successful referral' },
];

function Promote() {
  return (
    <div className="animated-card" style={{ marginLeft: '16px', marginRight: '3%' }}>
      <h2 style={{ color: 'black', padding: '10px', borderRadius: '5px', background: 'linear-gradient(to right, #2980b9, #2c3e50)', color: 'white' }}>Pramotion</h2>
      {promotions.map((promotion) => (
        <div key={promotion.id} style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', marginBottom: '20px', padding: '20px' }}>
          <h3 style={{ color: '#FF5F6D', marginBottom: '10px', fontSize: '1.5rem', fontWeight: 'bold' }}>{promotion.title}</h3>
          <p style={{ color: '#333', fontSize: '1rem' }}>{promotion.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Promote;
