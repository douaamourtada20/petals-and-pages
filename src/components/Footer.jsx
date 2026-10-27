import { Link } from "react-router-dom";
import {
  Flower2,
  Camera,
  Mail,
  ArrowUp,
  Heart,
  Coffee,
  BookOpen,
} from "lucide-react";

import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">

      <div className="container">

        <div className="row gy-5">

          {/* BRAND */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="footer-logo">
              <Flower2 size={34} strokeWidth={1.3} />

              <div>
                <span>Petals & Pages</span>
                <small>CAFÉ • FLOWERS • BOOKS</small>
              </div>
            </Link>

            <p className="footer-description">
              A little place where coffee is comforting,
              flowers are blooming, and every book
              has a story waiting to be discovered.
            </p>

            <div className="footer-socials">
              <span className="footer-social-icon" title="Instagram coming soon">
                <Camera size={19} />
              </span>

              <Link to="/contact" aria-label="Contact us">
                <Mail size={19} />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6 col-6">
            <h3 className="footer-heading">Explore</h3>

            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="col-lg-3 col-md-6 col-6">
            <h3 className="footer-heading">Discover</h3>

            <ul className="footer-links">
              <li><Link to="/menu">Specialty Coffee</Link></li>
              <li><Link to="/menu">Refreshing Drinks</Link></li>
              <li><Link to="/menu">Sweet Treats</Link></li>
              <li><Link to="/menu">Fresh Flowers</Link></li>
              <li><Link to="/menu">Lovely Books</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-6">
            <h3 className="footer-heading">Stay a While</h3>

            <p className="footer-contact-text">
              Your cozy corner is waiting.
              Have a question or a lovely idea?
            </p>

            <Link to="/contact" className="footer-contact-link">
              Get in Touch
              <span>↗</span>
            </Link>

            <div className="footer-decoration">
              <Coffee size={24} strokeWidth={1.2} />
              <Flower2 size={24} strokeWidth={1.2} />
              <BookOpen size={24} strokeWidth={1.2} />
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
            © {year} Petals & Pages. All rights reserved.
          </p>

          <p className="footer-made">
            Made with <Heart size={13} fill="currentColor" />
            and a little coffee.
          </p>

          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
