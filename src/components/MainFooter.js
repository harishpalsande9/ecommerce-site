import React from "react";
import "./../css/Footer.css";
const MainFooter = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 E-Commerce Website | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
