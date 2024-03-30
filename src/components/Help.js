import React from 'react';
import { Typography, Container, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Help() {
  return (
    <Container
      style={{
        marginTop: '50px',
        border: '2px solid #2196f3',
        borderRadius: '16px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #2196f3, #64b5f6)',
        color: '#fff',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Help & Support
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you need assistance or have any questions, please feel free to reach out to us.
      </Typography>
      <Typography variant="body1" gutterBottom>
        You can contact our support team at{' '}
        <strong>
          <EmailIcon style={{ marginRight: '4px' }} />
          support@example.com
        </strong>{' '}
        or call us at{' '}
        <strong>
          <PhoneIcon style={{ marginRight: '4px' }} />
          +1-234-567-8900
        </strong>
        .
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our support team is available 24/7 to help you with any queries or issues you may have.
      </Typography>
      <Typography variant="body1" gutterBottom>
        For technical support, please email us at{' '}
        <strong>
          <EmailIcon style={{ marginRight: '4px' }} />
          techsupport@example.com
        </strong>
        .
      </Typography>
      <Typography variant="body1" gutterBottom>
        For billing inquiries, please contact our billing department at{' '}
        <strong>
          <EmailIcon style={{ marginRight: '4px' }} />
          billing@example.com
        </strong>
        .
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you have feedback or suggestions, you can reach out to us at{' '}
        <strong>
          <EmailIcon style={{ marginRight: '4px' }} />
          feedback@example.com
        </strong>
        .
      </Typography>
      <Button
        variant="outlined"
        style={{ marginTop: '16px', color: '#fff', borderColor: '#fff' }}
        href="mailto:support@example.com"
      >
        Contact Us
      </Button>
    </Container>
  );
}

export default Help;
