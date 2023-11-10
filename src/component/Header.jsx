import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <img src="logo.png" alt="logo" style={{ width: '100px', height: '100px' }} />
      <h3 style={{ marginLeft: '10px' }}>ㅇㅇㅇ님</h3>
    </div>
  );
};

export default Header;
