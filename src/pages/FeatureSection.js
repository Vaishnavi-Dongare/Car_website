import React from 'react';
import { Container, Box, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCogs, faCar, faShieldAlt, faGlobe, faGasPump } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faTachometerAlt,
    title: "Performance",
    description: "Our cars are engineered for optimal performance, providing a smooth and powerful driving experience."
  },
  {
    icon: faCogs,
    title: "Technology",
    description: "Equipped with advanced technology features, our cars ensure a connected and convenient driving experience."
  },
  {
    icon: faCar,
    title: "Comfort",
    description: "Experience luxurious comfort with our cars' spacious interiors, premium materials, and ergonomic design."
  },
  {
    icon: faShieldAlt,
    title: "Safety",
    description: "Your safety is our priority. Our cars are equipped with advanced safety features to keep you and your passengers protected on the road."
  },
  {
    icon: faGlobe,
    title: "Navigation",
    description: "Stay on track with our cars' built-in navigation systems, providing real-time directions and traffic updates."
  },
  {
    icon: faGasPump,
    title: "Fuel Efficiency",
    description: "Our cars are designed for maximum fuel efficiency, saving you money at the pump while reducing emissions."
  }
];

function FeaturesSection() {
  return (
    <section id="features" style={{ padding: '50px 0', backgroundColor: '#d8b8f9', borderRadius: '20px', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.5)' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#6d289f' }}>
            Features
          </Typography>
          <Typography variant="h5" component="h2" sx={{ color: '#555', color: '#6d289f' }}>
            Explore the Amazing Features of Our Cars
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)', // Increase size on hover
                    backgroundColor: '#e7d9f9', // Lighter purple color on hover
                  },
                }}
              >
                <CardMedia>
                  <Box sx={{ textAlign: 'center', pt: 2 }}>
                    <FontAwesomeIcon icon={feature.icon} size="3x" color="#6d289f" />
                  </Box>
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#6d289f' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ color: '#6d289f' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default FeaturesSection;
