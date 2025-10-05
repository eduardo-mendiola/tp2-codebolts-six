import React from "react";
import Header from "@/components/Header/Header.jsx";
import Section from "@/components/Section/Section.jsx";
import Footer from "@/components/Footer/Footer.jsx";

export default function Carina() {

    const habilidades = [
        {
            resource: "/src/assets/eduardo/construyendo.webp",
            alt: "Diseñar y construir cosas",
            text: "Diseñar y construir cosas"
        },
        {
            resource: "/src/assets/eduardo/aprendizaje.webp",
            alt: "Aprendizaje continuo",
            text: "Aprendizaje continuo"
        },
        {
            resource: "/src/assets/eduardo/leer.webp",
            alt: "Leer cuentos para dormir",
            text: "Leer cuentos para dormir"
        },
        {
            resource: "/src/assets/eduardo/pizza.webp",
            alt: "Preparar pizzas",
            text: "Preparar pizzas"
        },
    ];


    const peliculas = [
        {
            resource: "/src/assets/eduardo/blade_runner.webp",
            alt: "Blade Runner (1982)",
            text: "Blade Runner (1982)",
            href: "https://en.wikipedia.org/wiki/Blade_Runner"
        },
        {
            resource: "/src/assets/eduardo/the_matrix.webp",
            alt: "The Matrix (1999)",
            text: "The Matrix (1999)",
            href: "https://en.wikipedia.org/wiki/The_Matrix"
        },
        {
            resource: "/src/assets/eduardo/interstellar.webp",
            alt: "Interstellar (2014)",
            text: "Interstellar (2014)",
            href: "https://en.wikipedia.org/wiki/Interstellar_(film)"
        },
    ];

    const musica = [
        {
            resource: "/src/assets/eduardo/beatles_abbey_road.webp",
            alt: "Abbey Road - The Beatles",
            text: "Abbey Road - The Beatles",
            href: "https://www.youtube.com/watch?v=wqaKHHxQFZc&list=OLAK5uy_k2JcEE3_maNjnVBKU2s1JjhaZ4rxwgaME&index=2"
        },
        {
            resource: "/src/assets/eduardo/dark_side.webp",
            alt: "Dark Side of the Moon - Pink Floyd",
            text: "Dark Side of the Moon - Pink Floyd",
            href: "https://www.youtube.com/watch?v=k9ynZnEBtvw"
        },
        {
            resource: "/src/assets/eduardo/black_album.webp",
            alt: "The Black Album - Metallica",
            text: "The Black Album - Metallica",
            href: "https://www.youtube.com/watch?v=CHIWNDAwTqQ&list=OLAK5uy_l3qf_fJNreo3L6_ZPIaLOquqfTda--gZc&index=2"
        },
    ];

    return (
        <>
            <Header
                name="Carina"
                lastName="Rodrigues"
                age="36"
                city="La Plata"
                backgroundImage="/src/assets/carina/carina_header.webp"
                textColor="var(--color-rojo)"
            />

            <Section title="Habilidades" cards={habilidades} />
            <Section title="Películas Favoritas" cards={peliculas} />
            <Section title="Música Favorita" cards={musica} />

            <Footer />
        </>
        // <div class="texto-columna">
        //     <h2>Carina Rodrigues Cabrita</h2>
        //     <p>Hola, soy de la ciudad de La Plata y tengo 36 años. Tengo un gato negro que se llama Salem.</p>
        // </div>
    );
}