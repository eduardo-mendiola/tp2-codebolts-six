import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import './App.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Topbar from '@/components/Topbar/Topbar';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import Inicio from '@/pages/Inicio/Inicio';
import Eduardo from '@/pages/Eduardo/Eduardo';
import Carina from '@/pages/Carina/Carina';
import RenderTree from '@/pages/RenderTree/RenderTree';
import DiagramaCarpetas from '@/pages/DiagramaCarpetas/DiagramaCarpetas';
import Bitacora from '@/pages/Bitacora/Bitacora';
import '@/styles/_reset.css';

function App() {
  const width = useWindowWidth();
  return (
    <Router>
      <ThemeProvider>
        <ScrollToTop />
        <div className="app-container">
          {width > 900 ? <Sidebar /> : <Topbar />}
          <main id="main-content" className="main-content">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/carina" element={<Carina />} />
              <Route path="/eduardo" element={<Eduardo />} />
              <Route path="/componentes" element={<RenderTree />} />
              <Route path="/carpetas" element={<DiagramaCarpetas />} />
              <Route path="/bitacora" element={<Bitacora />} />
              <Route path="*" element={<h2>Página no encontrada</h2>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
