import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <img src="logo.png" alt="logo" style={{ width: '100px', height: '100px' }} />
        <h3 style={{ marginLeft: '10px' }}>ㅇㅇㅇ님</h3>
      </div>
      <div>
        <h2 style={{ fontSize: '1rem', position: 'sticky', top: '0', marginLeft : "150px"}}>죄잇나 ver. 1.0</h2>
      </div>
      <div className="history">
        <h2 style={{fontSize: '1.2rem'}}>Chat History</h2>
      </div>
    </div>
  );
};

export default Header;
