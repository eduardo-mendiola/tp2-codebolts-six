import Header from '@/components/Header/Header';
import inicioHeader from '@/assets/inicio/inicio_header.webp';
import Section from '@/components/Section/Section';
import Card from '@/components/Card/Card.jsx';
import Footer from '@/components/Footer/Footer';

export default function Inicio() {

  const stack =
    [
      { resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", text: "HTML5" },
      { resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", text: "CSS3" },
      { resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", text: "JavaScript" },
      { resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", text: "React" }
    ]



  const tools = [
    { resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", text: "Git" },
    { resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", text: "GitHub" },
    { resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VSCode", text: "Visual Studio Code" },
    { resource: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", alt: "Vercel", text: "Vercel" }
  ];


  return (
    <div className='sectionInicio'>
      <Header
        name="Grupo 6"
        lastName="Codebolts Six"
        age=""
        city=""
        backgroundImage={inicioHeader}
        textColor="var(--color-white-yellow)"
      />

      <h1 style={{ padding: '2rem', margin: '0', fontSize: '2.3rem', fontWeight: 'bold' }}>
        Bienvenidos a nuestra página web
      </h1>

      <p style={{ padding: '2rem', margin: '0', fontSize: '1rem', lineHeight: '1.6', background: 'var(--color-white-yellow)' }}>
        Somos Carina, de La Plata, y Eduardo, de Mar del Plata, estudiantes de la Tecnicatura en Desarrollo de Software a distancia del <a href='https://ifts29.edu.ar/'>INSTITUTO DE Instituto de Formación Técnica Superior N° 29.</a>
        Hemos trabajado juntos en otros proyectos académicos, pero este es nuestro primer trabajo desarrollado con React, realizado para la materia Desarrollo de Sistemas Web Frontend.
        Nuestro objetivo es crear una página web que refleje nuestra identidad, intereses y habilidades, combinando elegancia y funcionalidad.
        A través de este proyecto, buscamos aplicar nuestros conocimientos en diseño web y desarrollo frontend, ofreciendo una experiencia que permita a los visitantes conocernos mejor como futuros profesionales del área.
      </p>
      <Section title="Stack Tecnológico" cards={stack} CardComponent={Card} />
      <Section title="Herramientas de Desarrollo" cards={tools} CardComponent={Card} showLine={false} />
      <Footer />
    </div>

  );
}





