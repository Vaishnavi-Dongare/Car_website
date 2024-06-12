import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = ({ id, imgSrc, newPrice, oldPrice, name, details, addToCart }) => {
  return (
    <Box className="products-item" sx={{ textAlign: 'center', margin: 2, minWidth: 300 }}>
      <Box className="product-img" sx={{ position: 'relative', cursor: 'pointer', transition: 'transform 0.3s' }}>
        <Avatar src={imgSrc} alt={name} style={{ width: '100%', height: 'auto' }} sx={{ '&:hover': { transform: 'scale(1.1)' } }} />
        <Box className="overlay" sx={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)', opacity: 0,
          transition: 'opacity 0.3s', '&:hover': { opacity: 1, backgroundColor: 'rgba(173, 216, 230, 0.5)' } // Light blue glass color on hover
        }}>
          <Button onClick={() => addToCart(id, name, newPrice, imgSrc)} variant="contained" color="primary" startIcon={<FavoriteBorderIcon />}>
            Add to Wishlist
          </Button>
        </Box>
      </Box>
      <Box className="product-content" sx={{ padding: 2 }}>
        <Typography variant="h6" component="div">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="new-price" style={{ color: 'green', marginRight: 8 }}>Rs. {newPrice.toLocaleString()}</span>
          <span className="old-price" style={{ textDecoration: 'line-through' }}>Rs. {oldPrice.toLocaleString()}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">{details}</Typography>
      </Box>
    </Box>
  );
};

export default Product;
