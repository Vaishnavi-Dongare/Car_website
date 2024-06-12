import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Header.css';

function Header() {
  const [openWishlist, setOpenWishlist] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleOpenWishlist = () => setOpenWishlist(true);
  const handleCloseWishlist = () => setOpenWishlist(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
    handleCloseWishlist();
  };

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <span className="logo-circle"></span>Car Website
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleNav} aria-controls="navbarNav" aria-expanded={navOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/news">News</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/features">Feature</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signup">SignUp</Link></li>
              <li className="nav-item"><span className="nav-link" onClick={handleOpenWishlist}>Wishlist</span></li>
            </ul>
          </div>
        </nav>
      </div>

      <Modal open={openWishlist} onClose={handleCloseWishlist}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#6a0dad',
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h5" sx={{ color: '#fff' }}>Wishlist</Typography>
          {wishlistItems.length > 0 ? (
            <ul>
              {wishlistItems.map((item, index) => (
                <li key={index} style={{ color: '#fff' }}>{item.name} - Rs. {item.price}</li>
              ))}
            </ul>
          ) : (
            <Typography variant="body1" sx={{ color: '#fff' }}>Your wishlist is empty.</Typography>
          )}
          {wishlistItems.length === 0 && (
            <Button component={Link} to="/products" variant="contained" color="primary">Explore Products</Button>
          )}
        </Box>
      </Modal>

      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h5">Login</Typography>
          <TextField fullWidth margin="normal" label="Username" variant="outlined" />
          <TextField fullWidth margin="normal" label="Password" type="password" variant="outlined" />
          <Button variant="contained" color="primary" fullWidth>Login</Button>
        </Box>
      </Modal>

      <Modal open={openSignup} onClose={handleCloseSignup}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h5">Sign Up</Typography>
          <TextField fullWidth margin="normal" label="Username" variant="outlined" />
          <TextField fullWidth margin="normal" label="Password" type="password" variant="outlined" />
          <TextField fullWidth margin="normal" label="Confirm Password" type="password" variant="outlined" />
          <Button variant="contained" color="primary" fullWidth>Sign Up</Button>
        </Box>
      </Modal>
    </header>
  );
}

export default Header;
