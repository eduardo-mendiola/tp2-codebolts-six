import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
//importamos las páginas
import Carina from './pages/Carina.jsx'
import Bitacora from './pages/Bitacora.jsx'
import Inicio from './pages/Inicio.jsx';

function App() {
  const [page, setPage] = useState('Inicio'); // valor inicial = página principal
    let Content;
    if (page === 'Inicio') Content = <Inicio />;
    else if (page === 'Carina') Content = <Carina />;
    else if (page === 'Bitacora') Content = <Bitacora />;
    else Content = <h2>Página no encontrada</h2>;
    
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar setPage={setPage} />
        <main style={{ padding: '20px', flex: 1 }}>
          {Content}
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App
