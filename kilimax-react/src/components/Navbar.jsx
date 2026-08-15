import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="menu">
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
          <li>
            <Link to="/products" onClick={closeMenu}>
              Products
            </Link>
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
