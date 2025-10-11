import { useState, useEffect } from "react";
import '@/components/DarkModeButton/DarkModeButton.css';

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => setIsDarkMode(!isDarkMode);

  return (
    <button
      id="darkModeBtn"
      onClick={handleToggle}
      className={isDarkMode ? "dark" : "light"}
      style={{ justifyContent: isDarkMode ? "flex-start" : "flex-end" }}
    >
      <i
        className={`fa-solid mode-icon ${isDarkMode ? "fa-sun" : "fa-moon"}`}
      ></i>
    </button>
  );
};

export default DarkModeButton;
