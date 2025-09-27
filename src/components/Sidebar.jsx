import React from 'react';
import logo from '../assets/logo.png';
import './Sidebar.css'; 

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="">Inicio</a>
        <a href="">Integrantes</a>
        <a href="">Bitácora</a>
      </nav>
    </aside>
  );
}