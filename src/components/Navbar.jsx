import React from 'react';
import logo from '../assets/react.svg';
function Navbar() {

  return (
    <div>
      <header>
        <div className="site-header">
          <div className="header-container">
            <div className="logo">
              <a className="logo" href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="header-info">
              <div className="contact">
                <div className="h-text"><h2>Get a Free Estimate!</h2></div>
                <div className="phone-call"><a href="tel:(647) 689-2644">Call us: (647) 689-2644 </a></div>
              </div>
              <div className="links">
                <ol id="navi">
                  <li><a href="https://www.houzz.com/hznb/projects/standout-interior-projects-pj-vj~1604139">Our Work</a></li>
                  <li><a href="about.html">About Us</a></li>
                </ol>
              </div>
              <div className="scedule-banner">
                <a href="form.php">Schedule Free Estimate</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="nav-min-bar">
        <ul>
          <li>Free Colour Consultations</li>
          <li>100% Satisfaction Guarantee</li>
          <li>Over 20 Years Experience</li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
