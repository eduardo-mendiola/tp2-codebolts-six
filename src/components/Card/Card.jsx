import React from "react";
import { useTheme } from "@/context/ThemeContext";
import "@/components/Card/Card.css";

const Card = ({ resource, alt, text, href }) => {
  const { isDarkMode } = useTheme();

  const cardStyle = {
    backgroundColor: isDarkMode ? "#717171ff" : "#f5f5f5", 
    color: isDarkMode ? "#f1f1f1" : "#000000", 
    boxShadow: isDarkMode
      ? "0 4px 8px rgba(255, 255, 255, 0.1)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)", 
  };

  return (
    <div className="card" style={cardStyle}>
      <a href={href} target="_blank" rel="noreferrer">
        <img src={resource} alt={alt} className="card-img" />
        <p>{text}</p>
      </a>
    </div>
  );
};

export default Card;
