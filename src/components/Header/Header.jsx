import React from 'react';
import '@/components/Header/Header.css';

const Header = ({ name, lastName, city, age, backgroundImage, textColor }) => {
  const headerStyle = {
    background: `url(${backgroundImage}) no-repeat center top`,
    backgroundSize: 'cover',
    width: 'calc(100vw - var(--sidebar-width))',
    height: '100vh',
    position: 'relative',
    gridArea: 'header',
  };

  const textStyle = {
    color: textColor || 'var(--color-white-yellow)', // valor por defecto
  };

  return (
    <header style={headerStyle} className="header-information">
      <div className="header-left">
        <p style={textStyle} className="name">{name}</p>
        <p style={textStyle} className="lastname">{lastName}</p>
      </div>
      <div className="header-right">
        <div className="city-container">
          <p style={textStyle} className="city">{city}</p>
          <div className="sun_icon" id="sun_icon"></div>
        </div>
        <p style={textStyle} className="age_number">
          {age}
          <span style={textStyle} className="age_years">años</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
