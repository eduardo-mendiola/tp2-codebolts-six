import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import '@/components/Sidebar/Sidebar.css';
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu';
import DarkModeButton from '../DarkModeButton/DarkModeButton';


export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkMode } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 🔹 Variable de estilo para el fondo
  const sidebarStyle = {
    backgroundColor: isDarkMode ? 'var(--color-encabezado-dark)' : 'var(--color-encabezado)', 
    transition: 'background-color 0.3s ease'
  };

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}
       style={{
        color: isSidebarOpen ? "var(--color-fondo)" : "var(--color-secundario)",
        transition: "color 0.3s ease"
      }}>
        ☰
      </button>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={sidebarStyle}>
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>

        <nav className="nav-links">
          <Link className="nav-link" to="/">Inicio</Link>

          <div className="menu-wrapper">

            <button
              className="nav-link"
              onClick={() => setShowMenu(!showMenu)}
              style={sidebarStyle}
            >
              Integrantes
            </button>

            {showMenu && <DropDownMenu />} 
        </div>
          <Link className="nav-link" to="/simpsons">Simpsons</Link>
          <Link className="nav-link" to="/componentes">Componentes</Link>
          <Link className="nav-link" to="/carpetas">Carpetas</Link>
          <Link className="nav-link" to="/bitacora">Bitácora</Link>
          <DarkModeButton />
        </nav>
      </aside>
    </>  
  );
}
