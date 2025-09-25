import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiAtomicSlashes } from "react-icons/gi";
import { RiLayoutGridFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToId(id);
      }, 100);
    } else {
      scrollToId(id);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/">
          <div className="img">
            <GiAtomicSlashes />
          </div>
          <span className="logo-text">KMU ATOMICS</span>
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Analyzer</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Public Validation</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Case Study</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <RiLayoutGridFill />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
