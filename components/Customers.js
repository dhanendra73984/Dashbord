import React from 'react';
import './Dashboard.css'; // Import the CSS file for animations

// Dummy data for customers
const customers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1-123-456-7890', share: '20%' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+1-234-567-8901', share: '30%' },
  { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', phone: '+1-345-678-9012', share: '25%' },
  { id: 4, name: 'Emily Brown', email: 'emily.brown@example.com', phone: '+1-456-789-0123', share: '40%' },
  { id: 5, name: 'William Taylor', email: 'william.taylor@example.com', phone: '+1-567-890-1234', share: '15%' },
];

function Customers() {
  return (
    <div  className="animated-card" style={{ marginLeft: '16px', marginRight: '3%' }}>
      <h2 style={{ color: 'black', padding: '10px', borderRadius: '5px', background: 'linear-gradient(to right, #2980b9, #2c3e50)', color: 'white' }}>Customers</h2>
      <ul style={{ listStyleType: 'none', padding: '0', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', overflow: 'hidden' }}>
        {customers.map((customer) => (
          <li key={customer.id} style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ddd', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{customer.name}</div>
              <div>{customer.email}</div>
              <div>{customer.phone}</div>
            </div>
            <div style={{ borderRadius: '5px', padding: '6px 12px', background: '#e74c3c', color: 'white' }}>{customer.share}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
