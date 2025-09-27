import React from 'react';
import './DropDownMenu.css';


export default function DropDownMenu({setPage}) {
  return (
    <div className="dropdown-menu">
      <button onClick={() => setPage('Carina')}>Carina</button>
      <button onClick={() => setPage('Eduardo')}>Eduardo</button>
      <button onClick={() => setPage('Neuyin')}>Neuyin</button>
    </div>
  );
}