import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 🔹 Importamos Link para navegación
import logo from '@/assets/logo.png';
import '@/components/Sidebar/Sidebar.css';
import DropDownMenu from '@/components/DropDownMenu/DropDownMenu';

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
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
      </nav>
    </aside>
  );
}




// import React, { useState } from 'react'; //guardo un estado que diga si el menú esta abierto o no
// import logo from '@/assets/logo.png'; //importo el logo
// import '@/components/Sidebar/Sidebar.css';
// import DropDownMenu from '@/components/DropDownMenu/DropDownMenu';

// export default function Sidebar({ setPage }) {

//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <aside className="sidebar">
//       <div className="logo-container">
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//       <nav className="nav-links">
//         <button className="nav-link" onClick={() => setPage('Inicio')}>
//           Inicio
//         </button>
//         <button className="nav-link" onClick={() => setShowMenu(!showMenu)}>
//           Integrantes
//         </button>
//         {showMenu && <DropDownMenu setPage={setPage} />}

//         <button className="nav-link" onClick={() => setPage('Bitacora')}>
//           Bitácora
//         </button>
//       </nav>
//     </aside>
//   );
// }