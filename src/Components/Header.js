import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Joel Perren</h1>
      <h2>Trainee Software Engineer at Ordnance Survey</h2>
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/cv">Curriculum Vitae</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
