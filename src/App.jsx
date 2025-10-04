import React, { useState } from 'react';
import './App.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Inicio from '@/pages/Inicio/Inicio';
import Eduardo from '@/pages/Eduardo/Eduardo';
import Carina from '@/pages/Carina/Carina';
import Bitacora from '@/pages/Bitacora/Bitacora';

function App() {
  const [page, setPage] = useState('Inicio'); 
  let Content;
  if (page === 'Inicio') Content = <Inicio />;
  else if (page === 'Carina') Content = <Carina />;
  else if (page === 'Eduardo') Content = <Eduardo />;
  else if (page === 'Bitacora') Content = <Bitacora />;
  else Content = <h2>Página no encontrada</h2>;
    
  return (
    <div className="app-container">
      <Sidebar setPage={setPage} />
      <main className="main-content">
        {Content}
      </main>
    </div>
  );
}


export default App;
