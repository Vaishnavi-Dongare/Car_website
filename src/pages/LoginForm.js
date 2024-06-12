import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import loginImage from '../images/login.gif';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', { username, password });

      if (response.data.success) {
        alert('Login successful!');
        setError('');
        history.push('/contact'); // Redirect to the contact page after successful login
      } else {
        setError(response.data.message || 'Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
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
          onSubmit={handleLogin}
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
            Login
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
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ borderRadius: 1, backgroundColor: '#fafafa' }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, borderRadius: 2, backgroundColor: '#800080' }}>
            Login
          </Button>
          <Typography sx={{ mt: 2 }}>
            <Button href="/signup" variant="outlined" color="primary" fullWidth sx={{ borderRadius: 2 }}>
              Sign Up
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
            src={loginImage}
            alt="Login"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '16px' }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
