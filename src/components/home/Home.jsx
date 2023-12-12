// Home.js
import React from 'react';
import './Home.css';
import Navigation from '../navigation/Navigation';

const Home = ({ items2 }) => {
  // Check if items2 is defined and is an array
  if (!items2 || !Array.isArray(items2)) {
    return (
      <div className="MainContainer">
        <div className="firstPart">
          <p>Error: items2 is undefined or not an array</p>
        </div>
        <div className="secondPart">
          {/* Content for the second part */}
          <h2>Second Part (70%)</h2>
          {/* Add your content here */}
        </div>
      </div>
    );
  }

  return (
    <div className="MainContainer">
      <Navigation/>
      <div className="firstPart">
        {/* Content for the first part */}
        <ul>
          {items2.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.text} />
            </li>
          ))}
        </ul>
        <h2>First Part (30%)</h2>

        {/* Add your content here */}
      </div>
      <div className="secondPart">
        {/* Content for the second part */}
        <h2>Second Part (70%)</h2>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Home;
