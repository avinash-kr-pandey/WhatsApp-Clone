import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faCode, faMusic, faBook, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faCog, faCheckCircle, faComment, faCommentAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './SideBarNav.css';
import Home from '../home/Home';

const FontAwesomeComponent = () => {
  return (
    <div className="MainSidebar">
      {/* Sidebar */}
      <div className="sidebar">
        {/* <h2>Sidebar</h2> */}
        <FontAwesomeIcon icon={faComment} className="icon" />
        <FontAwesomeIcon icon={faComment} className="icon" />
        <FontAwesomeIcon icon={faCommentAlt} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faCog} className="icon" />
      </div>

      {/* Content area */}
      <div className="content">
        {/* <Home/> */}
      </div>
    </div>
  );
};

export default FontAwesomeComponent;
