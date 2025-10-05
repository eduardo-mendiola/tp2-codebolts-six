import React from "react";
import Header from "@/components/Header/Header.jsx";
import Section from "@/components/Section/Section.jsx";
import Footer from "@/components/Footer/Footer.jsx";

// 🖼️ Importamos las imágenes de Carina
import carinaHeader from "@/assets/carina/carina_header.webp";

// Habilidades (pueden ser distintas, pero de momento usaremos las de ejemplo)
import construyendo from "@/assets/eduardo/construyendo.webp";
import aprendizaje from "@/assets/eduardo/aprendizaje.webp";
import leer from "@/assets/eduardo/leer.webp";
import pizza from "@/assets/eduardo/pizza.webp";

// Películas
import bladeRunner from "@/assets/eduardo/blade_runner.webp";
import theMatrix from "@/assets/eduardo/the_matrix.webp";
import interstellar from "@/assets/eduardo/interstellar.webp";

// Música
import beatlesAbbeyRoad from "@/assets/eduardo/beatles_abbey_road.webp";
import darkSide from "@/assets/eduardo/dark_side.webp";
import blackAlbum from "@/assets/eduardo/black_album.webp";

export default function Carina() {
  const habilidades = [
    { resource: construyendo, alt: "Diseñar y construir cosas", text: "Diseñar y construir cosas" },
    { resource: aprendizaje, alt: "Aprendizaje continuo", text: "Aprendizaje continuo" },
    { resource: leer, alt: "Leer cuentos para dormir", text: "Leer cuentos para dormir" },
    { resource: pizza, alt: "Preparar pizzas", text: "Preparar pizzas" },
  ];

  const peliculas = [
    {
      resource: bladeRunner,
      alt: "Blade Runner (1982)",
      text: "Blade Runner (1982)",
      href: "https://en.wikipedia.org/wiki/Blade_Runner",
    },
    {
      resource: theMatrix,
      alt: "The Matrix (1999)",
      text: "The Matrix (1999)",
      href: "https://en.wikipedia.org/wiki/The_Matrix",
    },
    {
      resource: interstellar,
      alt: "Interstellar (2014)",
      text: "Interstellar (2014)",
      href: "https://en.wikipedia.org/wiki/Interstellar_(film)",
    },
  ];

  const musica = [
    {
      resource: beatlesAbbeyRoad,
      alt: "Abbey Road - The Beatles",
      text: "Abbey Road - The Beatles",
      href: "https://www.youtube.com/watch?v=wqaKHHxQFZc&list=OLAK5uy_k2JcEE3_maNjnVBKU2s1JjhaZ4rxwgaME&index=2",
    },
    {
      resource: darkSide,
      alt: "Dark Side of the Moon - Pink Floyd",
      text: "Dark Side of the Moon - Pink Floyd",
      href: "https://www.youtube.com/watch?v=k9ynZnEBtvw",
    },
    {
      resource: blackAlbum,
      alt: "The Black Album - Metallica",
      text: "The Black Album - Metallica",
      href: "https://www.youtube.com/watch?v=CHIWNDAwTqQ&list=OLAK5uy_l3qf_fJNreo3L6_ZPIaLOquqfTda--gZc&index=2",
    },
  ];

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

      <Section title="Habilidades" cards={habilidades} />
      <Section title="Películas Favoritas" cards={peliculas} />
      <Section title="Música Favorita" cards={musica} />

      <Footer />
    </>
  );
}
