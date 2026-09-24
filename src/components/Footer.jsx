import { Link } from 'react-router-dom';
import { siteConfig } from '../data/dummy';
import '../styles/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>{siteConfig.brandName}</h3>
          <p className="text-muted">{siteConfig.tagline}</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/tours">Tours</Link>
          <Link to="/tours">Destinations</Link>
          <Link to="/tours">Popular Trips</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Talk to us</h4>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p className="text-muted">&copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
