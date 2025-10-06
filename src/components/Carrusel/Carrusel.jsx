import React from "react";
import { useState } from "react";
import "@/components/Carrusel/Carrusel.css";
import Title from  "@/components/Title/Title";

export default function Carrusel ({lugares}){
    const [index, setIndex]= useState(0);
    const total = lugares.length;

    const siguiente = () => setIndex((index+1) % total);
    const anterior = () => setIndex((index-1 + total) % total);

    return(
        <div>
            <div style={{ textAlign: "center"}}>
                <Title title="Lugares que me gustaría conocer" />
            </div>
            <div className="carrusel">
                <button className="btn prev" onClick={anterior}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>

                <div className="carrusel-imagenes" >
                    <img src={lugares[index].img} alt={lugares[index].nombre}/>
                
                    <div className="caption">
                        <h3>{lugares[index].nombre}</h3>
                        <p>{lugares[index].ubicación}</p>
                    </div>
                </div>

                <button className="btn next" onClick={siguiente}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}