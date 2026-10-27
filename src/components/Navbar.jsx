
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  Flower2,
  Search,
  Sun,
  Moon,
  ShoppingCart,
  Heart,
  Menu,
  X,
} from "lucide-react";

import "../styles/Navbar.css";

function Navbar({ cartCount, favoritesCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);

    return () => {
      document.body.classList.remove("dark-theme");
    };
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <Flower2 size={38} strokeWidth={1.3} />

            <div className="brand-text">
              <span>Petals & Pages</span>
              <small>CAFÉ • FLOWERS • BOOKS</small>
            </div>
          </Link>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-btn d-lg-none"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          {/* Navigation links */}
          <div className={`nav-content ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto gap-lg-4">
              {navLinks.map((item) => (
                <li className="nav-item" key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="nav-actions d-flex align-items-center gap-3">

              <button
                className="nav-icon-btn"
                type="button"
                aria-label="Search"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search size={21} />
              </button>

              <button
                className="nav-icon-btn theme-btn"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Moon size={21} /> : <Sun size={21} />}
              </button>

              {/* Favorites */}
              <Link
                to="/favorites"
                className="nav-icon-btn cart-icon"
                aria-label="Favorites"
              >
                <Heart size={22} />
                {favoritesCount > 0 && (
                  <span className="cart-count">{favoritesCount}</span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="nav-icon-btn cart-icon"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={23} />
                <span className="cart-count">{cartCount}</span>
              </Link>

            </div>
          </div>
        </div>
      </nav>

      {/* Search field */}
      {searchOpen && (
        <form
          className="navbar-search container"
          onSubmit={(event) => {
            event.preventDefault();

            const query = searchText.trim();
            window.location.href = `/menu?q=${encodeURIComponent(query)}`;
          }}
        >
          <input
            type="search"
            className="form-control"
            placeholder="Search coffee, flowers, books..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            aria-label="Search products"
          />
        </form>
      )}
    </header>
  );
}

export default Navbar;
