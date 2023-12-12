// Navigation.js
import React from 'react';
import Navbar from '../NavPractice/Nav';
import "./Navigation.css";
import Home from '../home/Home';

const Navigation = () => {
  const navItems = {
    section1: [
      {
        image: 'https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png',
      },
    ],
    section2: [  
      {
        image: 'https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png',
      }
    ]
  };

  return (
    <div className='Navigation-main'>
      {/* Render Navbar with section1 data */}
      <Navbar items={navItems.section1} />
      {/* Render Home with section2 data */}
      <Home items2={navItems.section2} />
    </div>
  );
};

export default Navigation;
