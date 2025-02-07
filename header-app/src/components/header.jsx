import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Justdial</div>
      <div className="search-info">Search across '4.7 Crore+' Businesses</div>
      <div className="location-info">
        <span className="location">Bettuli, Korwor</span>
        <span className="search-in">Search in Korwor</span>
      </div>
    </div>
  );
};

export default Header;