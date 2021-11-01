import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar">
    <h1 className="navbar-brand">Math Magicians</h1>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <span> | </span>
        <NavLink to="/calc" activeClassName="active" exact>Calculator</NavLink>
        <span> | </span>
        <NavLink to="/quote" activeClassName="active" exact>Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
