import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import DarkModeButton from "@/components/DarkModeButton/DarkModeButton";
import "@/components/Topbar/Topbar.css";

export default function Topbar(){
    const [menuOpen, setMenuOpen]=useState(false);
    const {isDarkMode}=useTheme();

    const barStyle = {
    backgroundColor: isDarkMode
      ? "var(--color-encabezado-dark)"
      : "var(--color-encabezado)",
  };

  return (
    <header className="topbar" style={barStyle}>
      <div className="topbar-content">
        <img src="/logo.png" alt="Logo" className="topbar-logo" />
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
        {menuOpen && (
            <nav className="dropdown-menu">
            <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/carina" onClick={() => setMenuOpen(false)}>Carina</Link>
            <Link to="/eduardo" onClick={() => setMenuOpen(false)}>Eduardo</Link>
            <Link to="/bitacora" onClick={() => setMenuOpen(false)}>Bitácora</Link>
            <DarkModeButton />
            </nav>
        )}
    </header>
  );
}