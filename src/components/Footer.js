import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material'; // Importing Material-UI icons
import '../skins/crimson.css';
import '../style/bootstrap.css';
import '../style/responsive.css';
import '../style/style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="footer-logo">
              <a href="/"><span className="logo-circle"></span>Car Website</a>
            </div>
            <div className="footer-text">
              <p>Thank You For Visiting Our Website..!</p>
            </div>
            <div className="footer-social-links">
              <a href="/"><Facebook /></a> {/* Facebook icon */}
              <a href="/"><Twitter /></a> {/* Twitter icon */}
              <a href="/"><Instagram /></a> {/* Instagram icon */}
              <a href="/"><LinkedIn /></a> {/* LinkedIn icon */}
              <a href="/"><YouTube /></a> {/* YouTube icon */}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; Car Website 2024</p>
          <p>Vaishnavi_Dongare</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
