import React from "react";
import Header from "@/components/Header/Header.jsx";
import Section from "@/components/Section/Section.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Card from '@/components/Card/Card.jsx';
import FlippingCard from '@/components/FlippingCard/FlippingCard';
import lugares from "@/data/lugares.js";
import Carrusel from "../../components/Carrusel/Carrusel";



// 🖼️ Importamos las imágenes de Carina
import carinaHeader from "@/assets/carina/carina_header.webp";

// Habilidades (pueden ser distintas, pero de momento usaremos las de ejemplo)
import SkillOne from "@/assets/carina/SkillOne.png";
import SkillTwo from "@/assets/carina/SkillTwo.png";
import SkillThree from "@/assets/carina/SkillThree.png";
import SkillFour from "@/assets/carina/SkillFour.png";

// Películas
import ButterflyEffect from "@/assets/carina/film1.jpg";
import HarryPotter4 from "@/assets/carina/film2.jpg";
import HideAndSeek from "@/assets/carina/film3.jpg";

// Música
import ColdPlay from "@/assets/carina/music1.webp";
import Ntvg from "@/assets/carina/music2.jpg";
import GustavoCerati from "@/assets/carina/music3.jpg";

export default function Carina() {
  const habilidades = [
    { resource: SkillOne, alt: "Cocinar", text: "Cocinar" },
    { resource: SkillTwo, alt: "Enseñar", text: "Enseñar" },
    { resource: SkillThree, alt: "Sacar Fotos", text: "Sacar Fotos" },
    { resource: SkillFour, alt: "Leer", text: "Leer Libros" },
  ];

  const peliculas = [
    {
      resource: ButterflyEffect,
      alt: "Efecto mariposa",
      text: "The Butterfly Effect",
      href: "https://en.wikipedia.org/wiki/The_Butterfly_Effect",
    },
    {
      resource: HarryPotter4,
      alt: "Harry Potter y el Caliz de Fuego",
      text: "Harry Potter y el Caliz de Fuego",
      href: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire_(film)",
    },
    {
      resource: HideAndSeek,
      alt: "Hide and Seek",
      text: "Hide and Seek",
      href: "https://en.wikipedia.org/wiki/Hide_and_Seek_(2005_film)",
    },
  ];

  const musica = [
    {
      resource: ColdPlay,
      alt: "ColdPlay",
      text: "ColdPlay",
      href: "https://www.youtube.com/watch?v=yKNxeF4KMsY&list=RDyKNxeF4KMsY&start_radio=1",
    },
    {
      resource: Ntvg,
      alt: "No te va Gustar",
      text: "No te va Gustar",
      href: "https://www.youtube.com/watch?v=GBsRPUxMkkw&list=RDGBsRPUxMkkw&start_radio=1",
    },
    {
      resource: GustavoCerati,
      alt: "Gustavo Cerati",
      text: "Gustavo Cerati",
      href: "https://www.youtube.com/watch?v=eAO7CEcCD3s&list=RDeAO7CEcCD3s&start_radio=1",
    },
  ];

  // Simpsons Cards
  const simpsonsCards = [
    { characterId: 1 },
    { characterId: 3 },
    { characterId: 16 },
  ];

  const lugaresfav = lugares.filter(l => [9, 10, 12].includes(l.id));


  return (
    <>
      <Header
        name="Carina"
        lastName="Rodrigues"
        age="36"
        city="La Plata"
        backgroundImage={carinaHeader}
        textColor="var(--color-rojo)"
      />

      <Section title="Habilidades" cards={habilidades} CardComponent={Card} />
      <Section title="Películas Favoritas" cards={peliculas} CardComponent={Card} />
      <Section title="Música Favorita" cards={musica} CardComponent={Card} />
      <Section title="Personajes Favoritos de Los Simpsons" cards={simpsonsCards} CardComponent={FlippingCard} />
      <Carrusel lugares={lugaresfav} />
      <Footer />
    </>
  );
}
