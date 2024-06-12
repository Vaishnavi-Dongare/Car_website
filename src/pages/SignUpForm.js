import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 
import signupImage from '../images/sign.gif';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/signup', { username, email, password });

      if (response.data.success) {
        alert('Signup successful! Please login.');
        history.push('/login');
      } else {
        setError(response.data.message || 'Signup failed. Please try again later.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

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
        <Box
          component="form"
          onSubmit={handleSignup}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 3,
            boxShadow: 2,
            borderRadius: 2,
            marginRight: { md: 4 },
            marginBottom: { xs: 4, md: 0 },
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#800080' }}>
            Sign Up
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ borderRadius: 1, backgroundColor: '#fafafa' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ borderRadius: 1, backgroundColor: '#fafafa' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ borderRadius: 1, backgroundColor: '#fafafa' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ borderRadius: 1, backgroundColor: '#fafafa' }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, borderRadius: 2, bgcolor: '#800080' }}>
            Sign Up
          </Button>
          <Typography sx={{ mt: 2 }}>
            <Button href="/login" variant="outlined" color="primary" fullWidth sx={{ borderRadius: 2 }}>
              Login
            </Button>
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            backgroundColor: 'white',
            padding: 3,
            boxShadow: 2,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <img
            src={signupImage}
            alt="Signup"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '16px' }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SignupForm;
