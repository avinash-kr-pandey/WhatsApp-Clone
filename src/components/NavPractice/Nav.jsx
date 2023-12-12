// Navbar.js
import React from 'react';
import "./Nav.css"

const Navbar = ({ items }) => {
  return (
    <div className='NavMain'>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
