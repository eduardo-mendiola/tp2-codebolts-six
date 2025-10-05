import React, { useState } from 'react'; //guardo un estado que diga si el menú esta abierto o no
import logo from '@/assets/logo.png'; //importo el logo
import '@/components/Sidebar/Sidebar.css';
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu';

export default function Sidebar({setPage}) {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <button className="nav-link" onClick={() => setPage('Inicio')}>
          Inicio
        </button>
        <button className="nav-link" onClick={() => setShowMenu(!showMenu)}>
          Integrantes
        </button>
        {showMenu && <DropDownMenu setPage={setPage} />}
        
        <button className="nav-link" onClick={() => setPage('Bitacora')}>
          Bitácora
        </button>
      </nav>
    </aside>
  );
}