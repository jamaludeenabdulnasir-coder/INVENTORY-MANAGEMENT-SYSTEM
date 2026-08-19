import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header>
      <nav className={`menu ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="icon/log123.jpg" alt="KILIMax logo" width="70" height="40" />
          <span className="logo-text">KILIMax</span>
        </Link>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </div>

        <ul className={`menu-list ${menuOpen ? "active" : ""}`}>
          <li className="menu-brand">
            <Link to="/" onClick={closeMenu}>
              <span>KILIMax</span>
            </Link>
          </li>
          <li
            className={`dropdown-parent ${productsOpen ? "open" : ""}`}
            ref={dropdownRef}
          >
            <button
              className="dropdown-toggle"
              onClick={() => setProductsOpen((o) => !o)}
            >
              Products
              <span className={`dropdown-arrow ${productsOpen ? "rotated" : ""}`}>▾</span>
            </button>
            <ul className={`dropdown-menu ${productsOpen ? "show" : ""}`}>
              <li>
                <Link to="/products/ai-assistant" onClick={closeMenu}>
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/products/killistore" onClick={closeMenu}>
                  KilliStore
                </Link>
              </li>
              <li>
                <Link to="/products/killipos" onClick={closeMenu}>
                  KilliPOS
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/pricing" onClick={closeMenu}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/partners" onClick={closeMenu}>
              Partners
            </Link>
          </li>
          <li>
            <Link to="/customer" onClick={closeMenu}>
              Customer
            </Link>
          </li>
          <li>
            <button className="signin">
              <Link to="/signin" onClick={closeMenu}>
                Sign In
              </Link>
            </button>
          </li>
          <li>
            <button id="bar">
              <Link to="/getstarted" onClick={closeMenu}>
                Get Started
              </Link>
            </button>
          </li>
        </ul>

        <div
          className={`menu-overlay ${menuOpen ? "active" : ""}`}
          onClick={closeMenu}
        />
      </nav>
    </header>
  );
}
