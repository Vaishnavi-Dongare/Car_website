import React from 'react';
import { Link } from 'react-router-dom'; 
import CarImage from '../images/img4.gif'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function HomeSection() {
  return (
    <section className="home-section" id="home">
      <div className="bg-shapes">
        {/* Add your background shapes here */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="home-content">
              <h1>Explore Our Cars</h1>
              <p>Discover the perfect car for your needs</p>
              <p>We offer a wide range of vehicles, from compact cars to SUVs, with advanced features and reliable performance.</p>
              <p>Starting from $19,999 <span style={{ fontSize: '12px' }}><strike>$24,999</strike> ($5,000 OFF)</span></p>
              <Link to="/products" className="btn mybtn1">Buy Now</Link>
            </div>
          </div>

          <div className="col-lg-6 order-first order-lg-last">
            <div className="home-img">
              <img src={CarImage} alt="Car" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;

