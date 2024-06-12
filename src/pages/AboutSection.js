import React from 'react';
import { Container, Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CarImage from '../images/car.gif'; // Import the image

function AboutSection() {
  return (
    <section id="about" style={{ padding: '50px 0', backgroundColor: '#f4f4f9' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h3" component="h1"  pugutterBottom sx={{ fontWeight: 'bold', color: 'purple' }}>
            About Sports Cars
          </Typography>
          <Typography variant="h5" component="h2" sx={{ color: '#800080' }}> {/* Purple text color */}
            Experience the Thrill of Speed and Performance
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={CarImage}
                alt="Sports Car"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  border: '8px solid purple' // Added thick purple border
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2 }}>
              <Typography variant="body1" paragraph sx={{ color: '#666', lineHeight: 1.6 }}>
                A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, the thrill of driving, and racing capability. Sports cars originated in Europe in the early 1910s and are currently produced by many manufacturers around the world.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#666', lineHeight: 1.6 }}>
                Our sports car combines cutting-edge technology with unparalleled performance. With a sleek design, powerful engine, and luxurious interiors, it's built to provide an extraordinary driving experience.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'purple' }} />
                  </ListItemIcon>
                  <ListItemText primary="High-performance engine delivering top speeds" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'purple' }} />
                  </ListItemIcon>
                  <ListItemText primary="Advanced aerodynamics for superior handling" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'purple' }} />
                  </ListItemIcon>
                  <ListItemText primary="Luxurious and comfortable interiors" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'purple' }} />
                  </ListItemIcon>
                  <ListItemText primary="State-of-the-art safety features" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default AboutSection;
