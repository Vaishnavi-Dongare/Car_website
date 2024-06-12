import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import contactImage from '../images/contact.gif'; // Make sure to replace with your actual image path

const ContactForm = () => {
  return (
    <Container sx={{ marginTop: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: { xs: 4, md: 0 },
            marginRight: { md: 4 },
          }}
        >
          <img
            src={contactImage}
            alt="Contact"
            style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            flex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#800080' }}>
            Thank You for Contacting Us
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: '#333', textAlign: 'center' }}>
            Welcome to Car Website! We look forward to hearing from you. For any inquiries, please use the contact details below.
          </Typography>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#800080' }}>Contact Details</Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>Email: info@carwebsite.com</Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>Phone: +123 456 7890</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
