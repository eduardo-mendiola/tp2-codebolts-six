import "@/pages/Bitacora/Bitacora.css";

export default function Bitacora() {
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
    <div className="bitacora-container" translate="no">
      <h1>Bitácora</h1>
      <p>
        Esta sección conteniene una descripción del proceso de desarrollo del proyecto,
        incluyendo: decisiones de diseño tomadas por el equipo, dificultades encontradas y cómo se resolvieron y cambios importantes realizados durante la implementación.
      </p>
      <p>
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
        <h2>Decisiones de Diseño</h2>
        <p>
          El equipo decidió utilizar una paleta de colores basada en tonos azules y grises para transmitir
          profesionalismo y modernidad. Además, se seleccionó la tipografía 'Roboto' por su legibilidad y estilo
          contemporáneo. Se optó por un diseño responsive para garantizar una experiencia óptima en dispositivos
          móviles y tablets.
        </p>
      </section>

      <section>
        <h2>Dificultades Encontradas</h2>
        <p>
          Durante el desarrollo, enfrentamos problemas con la implementación de animaciones en la portada, lo que
          requirió investigar y aplicar técnicas de CSS avanzadas. También hubo desafíos al ajustar el diseño para
          pantallas pequeñas, especialmente en la navegación, que se resolvieron utilizando media queries y
          pruebas en diferentes dispositivos.
        </p>
      </section>

      <section>
        <h2>Cambios Importantes</h2>
        <p>
          Inicialmente, se planeó un diseño estático, luego se incorporo interactividad mediante JavaScript
          para mejorar la experiencia del usuario. Además, se reorganizó la estructura de carpetas del proyecto
          para facilitar el mantenimiento y la colaboración entre los integrantes del equipo.
        </p>
      </section>

      <section>
        <h2>Análisis Completo del Sistema</h2>
        <h3>Archivos HTML</h3>
        <p>El sistema incluye varias páginas HTML que representan diferentes secciones del sitio web:
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

        <h3>Archivos CSS</h3>
        <p>El diseño visual se gestiona mediante varios archivos CSS:
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

        <h3>Archivos JavaScript</h3>
        <p>La interactividad del sitio se implementa con varios scripts:
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

      <h2>Árbol de archivos</h2>
      <p>
        Estructura del proyecto que muestra la organización de carpetas, componentes, estilos y archivos de configuración utilizados en la aplicación.
      </p>
      <pre className="file-tree">{tree}</pre>
    </div>
  );
}
