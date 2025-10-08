import React from 'react';
import { Link } from 'react-router-dom'; // 🧭 Importar Link
import '@/components/DropDownMenu/DropDownMenu.css';
import MemberButton from '@/components/MemberButton/MemberButton';
import imgCar from '@/assets/car.png';
import imgEdu from '@/assets/eduardo.webp';

export default function DropDownMenu() {
  return (
    <div className="dropdown-menu">
      <Link to="/carina" className="dropdown-item">
        <MemberButton imgsrc={imgCar} name="Carina" />
      </Link>

      <Link to="/eduardo" className="dropdown-item">
        <MemberButton imgsrc={imgEdu} name="Eduardo" />
      </Link>
    </div>
  );
}

