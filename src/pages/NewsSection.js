import React from 'react';
import '../skins/crimson.css'
import '../style/bootstrap.css'
import '../style/responsive.css'
import '../style/style.css'

function NewsSection() {
  return (
    <section className="newsletter-section" id="news">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            {/* Section Title Start */}
            <div className="section-title">
              <h1 className="title">Newsletter</h1>
              <h2 className="subtitle">Subscribe for Car News and Updates</h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-7">
            <form className="newsletter-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Your Email" />
                <button type="submit" className="btn mybtn2">
                  <span>Subscribe</span>
                  <i className="far fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
