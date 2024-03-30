import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem } from '@mui/material';

// Dummy data for the table with random image URLs
const rows = [
    { id: 1, productName: 'Frist Product', description: 'This is Product first  description.', stock: 50, totalPrice: 1000, share: '20%', imageUrl: 'https://source.unsplash.com/200x300/?computer' },
    { id: 2, productName: 'Secand Product ', description: 'This is  secand Product  description.', stock: 100, totalPrice: 2000, share: '30%', imageUrl: 'https://source.unsplash.com/200x300/?laptop' },
    { id: 3, productName: 'Third Product ', description: 'This is  third Product description.', stock: 75, totalPrice: 1500, share: '25%', imageUrl: 'https://source.unsplash.com/200x300/?smartphone' },
    { id: 4, productName: 'Fourth Product', description: 'This is fourt Product  description.', stock: 120, totalPrice: 2400, share: '40%', imageUrl: 'https://source.unsplash.com/200x300/?tablet' },
    { id: 5, productName: 'Fifth Product', description: 'This is  fifth Product   description.', stock: 50, totalPrice: 1000, share: '20%', imageUrl: 'https://source.unsplash.com/200x300/?computer' },
    { id: 6, productName: 'Sixth Product ', description: 'This is  sixth Product  description.', stock: 100, totalPrice: 2000, share: '30%', imageUrl: 'https://source.unsplash.com/200x300/?laptop' },
];

const ProductList = () => {
    return (
        <div className="animated-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Products</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        id="search"
                        label="Search"
                        variant="outlined"
                        size="small"
                        style={{ marginRight: '10px', marginLeft: '5px' }}
                    />
                    <TextField
                        id="select-time"
                        select
                        label="Select Time"
                        variant="outlined"
                        size="small"
                        defaultValue="last30days"
                    >
                        <MenuItem value="last30days">Last 30 Days</MenuItem>
                        <MenuItem value="last3months">Last 3 Months</MenuItem>
                        <MenuItem value="last6months">Last 6 Months</MenuItem>
                        <MenuItem value="lastyear">Last 1 Year</MenuItem>
                    </TextField>
                </div>
            </div>
            <TableContainer component={Paper} sx={{ borderRadius: '10px', border: '1px solid #e0e0e0' }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ backgroundColor: '#f2f2f2' }}>
                        <TableRow>
                            <TableCell style={{ width: '70%', color: '#666' }}>Product</TableCell>
                            <TableCell align="right" style={{ width: '10%', color: '#666' }}>Stock</TableCell>
                            <TableCell align="right" style={{ width: '10%', color: '#666' }}>Total Price</TableCell>
                            <TableCell align="right" style={{ width: '10%', color: '#666' }}>Share</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id} style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }} className="product-card">
                                <TableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {row.imageUrl && <img src={row.imageUrl} alt={row.productName} style={{ width: '80px', height: '50px', marginRight: '10px', borderRadius: '5px' }} />}
                                        <div>
                                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{row.productName}</div>
                                            <div style={{ fontSize: '0.9rem', color: '#666', maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.description}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell align="right" style={{ paddingRight: '32px' }}>{row.stock}</TableCell>
                                <TableCell align="right" style={{ paddingRight: '32px' }}>{row.totalPrice}</TableCell>
                                <TableCell align="right" style={{ paddingRight: '32px' }}>{row.share}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ProductList;
