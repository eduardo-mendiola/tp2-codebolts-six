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
    <div className="bitacora-container">
      <h1>Bitácora</h1>
      <p>Aquí va la bitácora del proyecto.</p>

      <pre className="file-tree">{tree}</pre>
    </div>
  );
}
