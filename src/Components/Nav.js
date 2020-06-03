import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo-x2.png'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY === 0 ? setScrolled(false) : setScrolled(true)
    };
    window.addEventListener("scroll", onScroll, {passive: true});

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <nav className={`${scrolled ? "sticky" : ""}`}>
      <div className={`nav-container`}>
        <div className="logo-and-name">
          <NavLink exact to="/">
          <img className="logo" src={logo} alt="Logo" />
          <h1>Joel Perren</h1>
          </NavLink>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cv">Curriculum Vitae</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
