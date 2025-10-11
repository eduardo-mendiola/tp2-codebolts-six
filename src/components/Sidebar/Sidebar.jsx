import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 🔹 Importamos Link para navegación
import '@/components/Sidebar/Sidebar.css';
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu';
import DarkModeButton from '../DarkModeButton/DarkModeButton';

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>

      <nav className="nav-links">
 
        <Link className="nav-link" to="/">Inicio</Link>

        <button
          className="nav-link"
          onClick={() => setShowMenu(!showMenu)}
        >
          Integrantes
        </button>

        {showMenu && <DropDownMenu />} 

        <Link className="nav-link" to="/componentes">Componentes</Link>
        <Link className="nav-link" to="/carpetas">Carpetas</Link>
        <Link className="nav-link" to="/bitacora">Bitácora</Link>
        <DarkModeButton />
      </nav>
    </aside>
  );
}