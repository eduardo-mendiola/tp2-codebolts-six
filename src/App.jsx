import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ padding: '20px', flex: 1 }}>
          <h1>CODEBOLTS SIX</h1>
        </main>
      </div>
      <Footer />
    </div>
   
  );
}

export default App
