import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, Typography, Button, Modal, Avatar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Product from './Product'; // Assuming Product component is in the same directory

// Import images
import car1 from '../images/car1.jpeg';
import car2 from '../images/car2.jpeg';
import car3 from '../images/car3.png';
import car4 from '../images/car7.jpeg';
import car8 from '../images/car8.jpeg';
import car9 from '../images/car9.jpeg';
import car7 from '../images/car4.avif';
import car5 from '../images/car5.jpg';
import car6 from '../images/car6.avif'; // Additional images for two rows
import car11 from '../images/car10.jpeg';
import car10 from '../images/car11.jpg';
import car12 from '../images/car12.jpg';

const products = [
  { id: 1, imgSrc: car1, newPrice: 1249000, oldPrice: 1399000, name: '2024 Range Rover Evoque', details: 'Luxury compact SUV with advanced features.' },
  { id: 2, imgSrc: car2, newPrice: 2699000, oldPrice: 2999000, name: '2024 Mercedes-Benz EQG', details: 'Electric G-Class with exceptional performance.' },
  { id: 3, imgSrc: car3, newPrice: 3199000, oldPrice: 3499000, name: '2024 Audi A6 Avant E-Tron', details: 'Electric wagon with cutting-edge technology.' },
  { id: 4, imgSrc: car7, newPrice: 2299000, oldPrice: 2599000, name: 'ACURA UNVEILED A NEW NSX CONCEPT', details: 'Another high-performance car with modern amenities.' },
  { id: 8, imgSrc: car8, newPrice: 2399000, oldPrice: 2699000, name: 'Jeep’s plug-in hybrid SUV concept debuts with a ~40 miles all-electric range', details: 'Another electric wagon with cutting-edge technology.' },
  { id: 9, imgSrc: car9, newPrice: 2499000, oldPrice: 2799000, name: 'Land Range Rover', details: 'Another electric G-Class with exceptional performance.' },
  { id: 4, imgSrc: car4, newPrice: 1599000, oldPrice: 1899000, name: 'New Mercedes-Benz EQG Exterior And Colors', details: 'High-performance car with modern amenities.' },
  { id: 5, imgSrc: car5, newPrice: 2099000, oldPrice: 2399000, name: 'New Audi A4 2024 Release', details: 'Stylish sedan with premium features.' },
  { id: 6, imgSrc: car6, newPrice: 2199000, oldPrice: 2499000, name: '2024 Cadillac Celestiq', details: 'Another stylish sedan with premium features.' },
   { id: 11, imgSrc: car10, newPrice: 2599000, oldPrice: 2899000, name: '2024 Tesla Model S', details: 'Another luxury compact SUV with advanced features.' },
  { id: 10, imgSrc: car11, newPrice: 1699000, oldPrice: 1899000, name: 'New Mahindra Thar AX and LX', details: 'Luxury SUV with spacious interior and advanced technology.' },
  { id: 12, imgSrc: car12, newPrice: 2999000, oldPrice: 3299000, name: 'KN 50 series a little automation car ', details: 'High-performance electric sports car with cutting-edge features.' },
];

const ProductsSection = () => {
  const [cartItems, setCartItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('forward');

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollStep = 1;
    const delay = 10;

    const scroll = () => {
      if (scrollDirection === 'forward') {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          setScrollDirection('backward');
        } else {
          scrollContainer.scrollLeft += scrollStep;
        }
      } else {
        if (scrollContainer.scrollLeft === 0) {
          setScrollDirection('forward');
        } else {
          scrollContainer.scrollLeft -= scrollStep;
        }
      }
    };

    const intervalId = setInterval(scroll, delay);

    return () => clearInterval(intervalId);
  }, [scrollDirection]);

  const addToCart = (id, name, price, imgSrc) => {
    setCartItems([...cartItems, { id, name, price, imgSrc }]);
    setOpenModal(true);
    alert(`${name} added to cart!`);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <section className="products-section" id="products">
      <Container>
        <Box className="section-title" sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h3" color='purple'>Our Products</Typography>
          <Typography variant="h6" color="purple" >
            We have lots of excellent and high-quality products
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            overflowX: 'auto',
            padding: 2,
            scrollbarWidth: 'thin',
            scrollbarColor: '#ccc #f4f4f4',
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ccc',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f4f4f4',
              borderRadius: '4px',
            },
          }}
          ref={scrollRef}
        >
          {products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              imgSrc={product.imgSrc}
              name={product.name}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              details={product.details}
              addToCart={addToCart}
            />
          ))}
        </Box>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={{ width: 400, bgcolor: '#fff', borderRadius: 4, boxShadow: 24, p: 4 }}>
            <Typography variant="h5">Shopping Cart</Typography>
            {cartItems.length === 0 ? (
              <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
              <Box>
                {cartItems.map(item => (
                  <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <Avatar src={item.imgSrc} alt={item.name} style={{ width: '50px',
                    height: '50px', marginRight: '10px' }} />
                    <Typography variant                    ="body1" sx={{ flexGrow: 1 }}>{item.name} - Rs. {item.price.toLocaleString()}</Typography>
                    <Button onClick={() => removeFromCart(item.id)} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Remove</Button>
                  </Box>
                ))}
                <Typography variant="h6" sx={{ marginTop: 2 }}>Total Amount: Rs. {totalAmount.toLocaleString()}</Typography>
              </Box>
            )}
            <Button onClick={handleCloseModal} variant="contained" color="primary" sx={{ marginTop: 2 }}>Close</Button>
          </Box>
        </Modal>
      </Container>
    </section>
  );
};

export default ProductsSection;

