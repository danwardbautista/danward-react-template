import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import About from './pages/About';
import './App.css';
import logo from './assets/images/logo.svg';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className="logo-container">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img className='navLogo' src={logo} alt="Logo" />
            </Link>
          </div>
          <span className="menu-toggle" onClick={toggleMenu}>Menu</span>
          <ul className={menuOpen ? 'show' : ''}>
            <NavItem to="/" label="Home" onClick={() => setMenuOpen(false)} />
            <NavItem to="/page1" label="Page 1" onClick={() => setMenuOpen(false)} />
            <NavItem to="/page2" label="Page 2" onClick={() => setMenuOpen(false)} />
            <NavItem to="/about" label="About" onClick={() => setMenuOpen(false)} />
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className="footer">
          <p>&copy; 2024 Website</p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a> | 
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a> | 
          <a href="mailto:email@example.com">Email</a>
        </div>
      </div>
    </Router>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li>
      <Link to={to} onClick={onClick} className={isActive ? 'active' : ''}>
        {label}
      </Link>
    </li>
  );
};

export default App;
