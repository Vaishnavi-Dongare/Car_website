import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import '../style/Header.css';  // Importing the CSS file for additional styling

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
    handleCloseWishlist(); // Automatically close the wishlist modal after adding an item
  };

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            <span className="logo-circle"></span>Car Website
          </Link>
        
          {/* Toggler/collapsible Button */}
          <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
        
          {/* Navbar links */}
          <div className={`collapse navbar-collapse justify-content-end ${navOpen ? 'show' : ''}`} id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Feature</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={handleOpenWishlist}>wishlist</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Wishlist Modal */}
      <Modal open={openWishlist} onClose={handleCloseWishlist}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: '#6a0dad',
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
          }}
        >
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

      {/* Login Modal */}
      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5">Login</Typography>
          <TextField fullWidth margin="normal" label="Username" variant="outlined" />
          <TextField fullWidth margin="normal" label="Password" type="password" variant="outlined" />
          <Button variant="contained" color="primary" fullWidth>Login</Button>
        </Box>
      </Modal>

      {/* Signup Modal */}
      <Modal open={openSignup} onClose={handleCloseSignup}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
          }}
        >
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
