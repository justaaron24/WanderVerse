import React from 'react'
import { Link } from 'react-router-dom'
import { FaLaptop, FaMobile } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <ul className="footer__categories">
            <li><Link to="/posts/categories/Wanderverse">WanderVerse</Link></li>
            <li><Link to="/posts/categories/Art">Art</Link></li>
            <li><Link to="/posts/categories/Vaction">Vacation</Link></li>
            <li><Link to="/posts/categories/Deep">Deep</Link></li>
            <li><Link to="/posts/categories/Selfreflection">SelfReflection</Link></li>
            <li><Link to="/posts/categories/Ponder">Ponder</Link></li>
            <li><Link to="/posts/categories/Explore">Explore</Link></li>
        </ul>
        <div className='footer__copyright'>
            <small>All Rights Reserved &copy; Copyright, WanderVerse.</small>
        </div>
        <div className="footer-content">
        <h3>Download Our App</h3>
        <div className="download-links">
          <a href="https://www.example.com/mobile-app">
            <FaMobile /> Mobile
          </a>
          <a href="https://www.example.com/web-app">
            <FaLaptop /> Laptop
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
