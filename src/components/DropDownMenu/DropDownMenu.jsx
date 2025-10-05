import React from 'react';
import '@/components/DropDownMenu/DropDownMenu.css';
import MemberButton from '@/components/MemberButton/MemberButton';
import imgCar from '@/assets/car.png';
import imgEdu from '@/assets/eduardo.webp';


export default function DropDownMenu({setPage}) {
  return (
    <div className="dropdown-menu">
      <MemberButton imgsrc={imgCar} name='Carina' onClick={() => setPage('Carina')}/>
      <MemberButton imgsrc={imgEdu} name='Eduardo' onClick={() => setPage('Eduardo')}/>
    </div>
  );
}