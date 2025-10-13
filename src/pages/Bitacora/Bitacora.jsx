import { useTheme } from '@/context/ThemeContext';
import "@/pages/Bitacora/Bitacora.css";

export default function Bitacora() {
  const { isDarkMode } = useTheme();

  // 🔹 Estilos dinámicos según el modo
  const containerStyle = {
    backgroundColor: isDarkMode ? 'var(--color-background-body-dark)' : '#fff', // gris oscuro / gris claro
    color: isDarkMode ? '#f1f1f1' : '#272727',
    transition: 'all 0.3s ease',
    padding: '2rem',
    maxWidth: '900px',
    margin: '2rem auto',
    lineHeight: 1.6,
  };

  const headingStyle = {
    color: isDarkMode ? '#a2d5f2' : '#1a1a1a',
    borderBottom: isDarkMode ? '2px solid #555' : '2px solid #ddd',
    transition: 'all 0.3s ease',
    margin: '2rem 0 1rem',
    paddingBottom: '2rem',
    textAlign: 'center',
    fontSize: '3rem'
  };

  const sectionHeadingStyle = {
    color: isDarkMode ? '#a2d5f2' : '#1a1a1a',
    borderBottom: isDarkMode ? '2px solid #555' : '2px solid #ddd',
    paddingBottom: '0.3rem',
    fontSize: '1.8rem',
    margin: '2rem 0 1rem'
  };

  const subHeadingStyle = {
    color: isDarkMode ? '#cfcfcf' : '#444',
    fontSize: '1.4rem',
    margin: '1.5rem 0 0.5rem'
  };

  const paragraphStyle = {
    color: isDarkMode ? '#e0e0e0' : '#000000',
    marginBottom: '2rem'
  };

  const linkStyle = {
    color: isDarkMode ? '#4ec9b0' : '#1e90ff',
    textDecoration: 'none'
  };

  const treeStyle = {
    backgroundColor: isDarkMode ? '#2e2e2e' : '#fff',
    color: isDarkMode ? '#d4d4d4' : '#4c4c4c',
    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)',
    padding: '1.5rem',
    borderRadius: '8px',
    overflowX: 'auto',
    whiteSpace: 'pre',
    lineHeight: '1.4',
    display: 'inline-block',
    textAlign: 'left',
    maxWidth: '100%',
    boxSizing: 'border-box'
  };

  const treeLines = [
    "📁 project-root/",
    "│",
    "├── 📁 src/",
    "│   ├── 📁 assets/",
    "│   ├── 📁 components/",
    "│   │   ├── 📁 Card/",
    "│   │   │   ├── 📄 Card.css",
    "│   │   │   └── 📄 Card.jsx",
    "│   │   ├── 📁 Carrusel/",
    "│   │   │   ├── 📄 Carrusel.css",
    "│   │   │   └── 📄 Carrusel.jsx",
    "│   │   ├── 📁 DropDownMenu/",
    "│   │   │   ├── 📄 DropDownMenu.css",
    "│   │   │   └── 📄 DropDownMenu.jsx",
    "│   │   ├── 📁 FlippingCard/",
    "│   │   │   ├── 📄 FlippingCard.css",
    "│   │   │   └── 📄 FlippingCard.jsx",
    "│   │   ├── 📁 Footer/",
    "│   │   │   ├── 📄 Footer.css",
    "│   │   │   └── 📄 Footer.jsx",
    "│   │   ├── 📁 Header/",
    "│   │   │   ├── 📄 Header.css",
    "│   │   │   └── 📄 Header.jsx",
    "│   │   ├── 📁 Line/",
    "│   │   │   ├── 📄 Line.css",
    "│   │   │   └── 📄 Line.jsx",
    "│   │   ├── 📁 MemberButton/",
    "│   │   │   ├── 📄 MemberButton.css",
    "│   │   │   └── 📄 MemberButton.jsx",
    "│   │   ├── 📁 ScrollTop/",
    "│   │   │   └── 📄 ScrollTop.jsx",
    "│   │   ├── 📁 Section/",
    "│   │   │   ├── 📄 Section.css",
    "│   │   │   └── 📄 Section.jsx",
    "│   │   ├── 📁 SideBar/",
    "│   │   │   ├── 📄 SideBar.css",
    "│   │   │   └── 📄 SideBar.jsx",
    "│   │   ├── 📁 Title/",
    "│   │   │   ├── 📄 Title.css",
    "│   │   │   └── 📄 Title.jsx",
    "│   ├── 📁 data/",
    "│   │   └── 📄 lugares.js",
    "│   ├── 📁 pages/",
    "│   │   ├── 📄 Bitacora/Bitacora.jsx",
    "│   │   ├── 📄 Carina/Carina.jsx",
    "│   │   ├── 📄 Eduardo/Eduardo.jsx",
    "│   │   └── 📄 Inicio/Inicio.jsx",
    "│   ├── 📁 styles/",
    "│   │   ├── 📄 _reset.css",
    "│   │   └── 📄 variables.css",
    "│   ├── 📄 App.css",
    "│   ├── 📄 App.jsx",
    "│   ├── 📄 index.css",
    "│   └── 📄 main.jsx",
    "│",
    "├── 📁 public/",
    "│   ├── 📄 favicon.png",
    "│   ├── 📄 logo.png",
    "│   └── (imágenes e íconos…)",
    "│",
    "├── 📄 package.json",
    "├── 📄 package-lock.json",
    "├── 📄 vite.config.js",
    "└── 📄 README.md"
  ];

  const tree = treeLines.join("\n");

  return (
    <div className="bitacora-container" style={containerStyle} translate="no">
      <h1 style={headingStyle}>Bitácora</h1>
      <p style={paragraphStyle}>
        Esta sección contiene una descripción del proceso de desarrollo del proyecto,
        incluyendo: decisiones de diseño tomadas por el equipo, dificultades encontradas y cómo se resolvieron y cambios importantes realizados durante la implementación.
      </p>

      <p style={paragraphStyle}>
        La bitácora está pensada para registrar el proceso de trabajo y debe ampliarse en el TP2, y
        TP3, incorporando reflexiones sobre la evolución del proyecto.
      </p>

      <ol>
        <li>05/09/25: Se definió el esquema de colores y tipografía.</li>
        <li>07/09/25: Implementadas animaciones en la portada.</li>
        <li>12/09/25: Ajustes de responsive.</li>
        <li>18/09/25: Creación de páginas individuales de cada integrante.</li>
        <li>25/09/25: Mejoras y correcciones generales.</li>
      </ol>

      <section>
        <h2 style={sectionHeadingStyle}>Decisiones de Diseño</h2>
        <p style={paragraphStyle}>
          El equipo decidió utilizar una paleta de colores basada en tonos azules y grises para transmitir
          profesionalismo y modernidad. Además, se seleccionó la tipografía 'Roboto' por su legibilidad y estilo
          contemporáneo. Se optó por un diseño responsive para garantizar una experiencia óptima en dispositivos
          móviles y tablets.
        </p>
      </section>

      <section>
        <h2 style={sectionHeadingStyle}>Dificultades Encontradas</h2>
        <p style={paragraphStyle}>
          Durante el desarrollo, enfrentamos problemas con la implementación de animaciones en la portada, lo que
          requirió investigar y aplicar técnicas de CSS avanzadas. También hubo desafíos al ajustar el diseño para
          pantallas pequeñas, especialmente en la navegación, que se resolvieron utilizando media queries y
          pruebas en diferentes dispositivos.
        </p>
      </section>

      <section>
        <h2 style={sectionHeadingStyle}>Cambios Importantes</h2>
        <p style={paragraphStyle}>
          Inicialmente, se planeó un diseño estático, luego se incorporo interactividad mediante JavaScript
          para mejorar la experiencia del usuario. Además, se reorganizó la estructura de carpetas del proyecto
          para facilitar el mantenimiento y la colaboración entre los integrantes del equipo.
        </p>
      </section>

      <section>
        <h2 style={sectionHeadingStyle}>Análisis Completo del Sistema</h2>
        <h3 style={subHeadingStyle}>Archivos HTML</h3>
        <p style={paragraphStyle}>
          El sistema incluye varias páginas HTML que representan diferentes secciones del sitio web:
          <ul>
            <li><strong>index.html:</strong> Página principal con información sobre el equipo y un diseño
              responsivo.</li>
            <li><strong>crc.html:</strong> Perfil de Carina con detalles personales y un diseño personalizado.</li>
            <li><strong>eduardo.html:</strong> Perfil de Eduardo con detalles personales y un diseño personalizado.
            </li>
            <li><strong>neuyin.html:</strong> Perfil de Neuyin con detalles personales y un diseño personalizado.</li>
            <li><strong>bitacora.html:</strong> Sección dedicada a registrar el proceso de desarrollo del proyecto.
            </li>
          </ul>
        </p>
      </section>

      <section>
        <h3 style={subHeadingStyle}>Archivos CSS</h3>
        <p style={paragraphStyle}>El diseño visual se gestiona mediante varios archivos CSS:
          <ul>
            <li><strong>_reset_edu.css:</strong> Archivo de reinicio para garantizar consistencia entre navegadores.
            </li>
            <li><strong>style_eduardo.css:</strong> Estilos específicos para la página de Eduardo, incluyendo
              variables de colores y tipografías personalizadas.</li>
            <li><strong>style_neuyin.css:</strong> Estilos para la página de Neuyin, concordantes con todo el sitio
              web pero con animaciones que personalizan su perfil.</li>
            <li><strong>style.css:</strong> Estilos generales del sitio, incluyendo soporte para modo oscuro y
              diseño responsivo y estilos de la página de Carina.</li>
          </ul>
        </p>

        <h3 style={subHeadingStyle}>Archivos JavaScript</h3>
        <p style={paragraphStyle}>La interactividad del sitio se implementa con varios scripts:
          <ul>
            <li><strong>main.js:</strong> Gestiona el modo oscuro, menús desplegables y popups interactivos.</li>
            <li><strong>scripts_eduardo.js:</strong> Añade efectos de paralaje y animaciones específicas para la
              página de Eduardo.</li>
            <li><strong>scripts_carina.js:</strong> Contiene funcionalidades específicas para la página de Carina,
              como el carrusel de imágenes.</li>
            <li><strong>scripts_neuyin.js:</strong> Se añaden funcionalidades que le brindan dinamismo al perfil.
            </li>
          </ul>
        </p>
      </section>
      <section>
          <h2 style={sectionHeadingStyle}>Configuración inicial y estructura</h2>
          <p style={paragraphStyle}>Creación del proyecto con React y React Router.
            Configuración de ThemeContext para manejar modo claro/oscuro.
            Definición de la estructura principal en App.jsx con:
            <ul>
              <li><strong>Sidebar:</strong> Lateral izquierda</li>
              <li><strong>Navegación con React Router:</strong> Implementación de React Router para manejar las 
              distintas páginas dentro de 'main'. Con solo un click, cambia la ruta automáticamente y renderiza el componente correspondiente
              sin recargar la página.</li>
              <li><strong>Main:</strong> Muestra el contenido dinámico</li>
              <li><strong>Theme Provider:</strong> Para modo oscuro</li>
              <li><strong>Scroll To Top:</strong> Para navegación fluida</li>
              <li>Uso de <strong>useState</strong> para manejar el estado de la sidebar (abierta/cerrada) de forma inicial.</li>
            </ul>
          </p>
          <h2 style={sectionHeadingStyle}>Componentes</h2>
          <h3 style={subHeadingStyle}>Sidebar y DropDownMenu</h3>
          <p style={paragraphStyle}>Implementación de Barra lateral fija para escritorio
            <ul>
              <li><strong>DropDownMenu:</strong> Menú desplegable para ver los Integrantes del grupo</li>
              <li><strong>MemberButton:</strong> Creación de Botones para cada integrante con estilo propio</li>
              <li><strong>Ajuste de estilos:</strong> .sidebar, .nav-links, .nav-link, .menu-wrapper.</li>
              <li><strong>Mejoras Responsive:</strong> Menú hamburguesa visible en pantallas menores a 900px que despliega
              u oculta la barra lateral al hacer click</li>
            </ul>
          </p>
          <h3 style={subHeadingStyle}>Footer Y Header</h3>
          <p style={paragraphStyle}>Se conservaron estos elementos de la primera parte del proyecto ahora convertidos en componentes reutilizables.
            En el caso del Header se eligió el diseño establecido en Eduardo.html con una imagen de fondo adaptable al modo claro/oscuro. El Footer se mantuvo sin cambios.
          </p>
          <h3 style={subHeadingStyle}>Section y otros </h3>
          <p style={paragraphStyle}> Se dio estructura a las secciones a utilizar en las páginas de integrantes.</p>
          <ul>
              <li><strong>Title - Card - Line:</strong> Componentes comunes a varias secciones</li>
          </ul>
          <h3 style={subHeadingStyle}>Carrusel</h3>
          
      </section>

      

      <h2 style={sectionHeadingStyle}>Árbol de archivos</h2>
      <p style={paragraphStyle}>
        Estructura del proyecto que muestra la organización de carpetas, componentes, estilos y archivos de configuración utilizados en la aplicación.
      </p>
      <pre className="file-tree" style={treeStyle}>{tree}</pre>
    </div>
  );
}
