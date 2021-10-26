import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      id: 0,
      path: '/',
      text: 'Home',
    },
    {
      id: 1,
      path: '/calc',
      text: 'Calculator',
    },
    {
      id: 2,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Math Magicians</h1>
      <ul className="navbar-nav">
        {links.map((link) => (
          <li key={link.id} className="nav-item">
            <NavLink to={link.path} activeClassName="active" exact>
              {link.text}
            </NavLink>
            <span> | </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
