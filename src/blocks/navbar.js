import { buatBlok } from "./buatBlok";

const cssNavbar = `
  .navbar {
    position: sticky;
    top: 0;
    z-index: 20;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    font-family: system-ui, sans-serif;
  }
  .navbar-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 0.75rem;
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem;
  }
  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-right: auto;
  }
  .navbar-brand img { height: 28px; width: 28px; }
  .navbar-brand span {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
    white-space: nowrap;
  }
  .navbar-btn {
    padding: 0.5rem 0.75rem;
    background-color: #1d4ed8;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 8px;
    text-decoration: none;
  }
  .navbar-btn:hover { background-color: #1e40af; }
  .navbar-burger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    color: #374151;
    border-radius: 8px;
    cursor: pointer;
  }
  .navbar-burger:hover { background-color: #f3f4f6; }
  .navbar-burger svg { width: 24px; height: 24px; }
  .navbar-collapse { display: none; width: 100%; }
  .navbar.terbuka .navbar-collapse { display: block; }
  .navbar-menu {
    display: flex;
    flex-direction: column;
    margin: 1rem 0 0;
    padding: 1rem;
    list-style: none;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
  }
  .navbar-menu a {
    display: block;
    padding: 0.5rem 0.75rem;
    color: #111827;
    font-weight: 500;
    text-decoration: none;
    border-radius: 6px;
  }
  .navbar-menu a:hover { background-color: #e5e7eb; }
  .navbar-menu a.aktif { background-color: #1d4ed8; color: #ffffff; }

  @media (min-width: 768px) {
    .navbar-container { column-gap: 2rem; }
    .navbar-burger { display: none; }
    .navbar-collapse { display: block; width: auto; order: 1; }
    .navbar-btn { order: 2; }
    .navbar-menu {
      flex-direction: row;
      gap: 2rem;
      margin: 0;
      padding: 0;
      background: none;
      border: 0;
    }
    .navbar-menu a { padding: 0; }
    .navbar-menu a:hover { background: none; color: #1d4ed8; }
    .navbar-menu a.aktif { background: none; color: #1d4ed8; }
  }
`;

const cssDropdown = `
  .navbar-dropdown { position: relative; }
  .navbar-dropdown-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 0.75rem;
    background: none;
    border: 0;
    color: #111827;
    font: inherit;
    font-weight: 500;
    cursor: pointer;
  }
  .navbar-dropdown-menu {
    margin: 0;
    padding: 0 0 0 1rem;
    list-style: none;
  }
  @media (min-width: 768px) {
    .navbar-dropdown-toggle { padding: 0; }
    .navbar-dropdown-toggle:hover { color: #1d4ed8; }
    .navbar-dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 180px;
      padding: 0.5rem;
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .navbar-dropdown:hover .navbar-dropdown-menu,
    .navbar-dropdown:focus-within .navbar-dropdown-menu { display: block; }
    .navbar-dropdown-menu a { padding: 0.5rem 0.75rem; }
    .navbar-dropdown-menu a:hover { background-color: #f3f4f6; }
  }
`;

const burgerIkon = `<svg viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>`;

const logoBawaan = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><rect width='28' height='28' rx='6' fill='%231d4ed8'/></svg>`;

const scriptNavbar = function () {
  var nav = this;
  var burger = nav.querySelector(".navbar-burger");
  if (!burger) return;
  burger.addEventListener("click", function () {
    nav.classList.toggle("terbuka");
  });
};
const htmlNavbar = (menu) => `
  <div class="navbar-container">
    <div class="navbar-brand">
      <img src="${logoBawaan}" alt="Logo">
      <span>Nama Situs</span>
    </div>
    <a href="#" class="navbar-btn">Mulai</a>
    <button type="button" class="navbar-burger" aria-label="Buka menu">${burgerIkon}</button>
    <div class="navbar-collapse">
      <ul class="navbar-menu">${menu}</ul>
    </div>
  </div>
`;

export const navbar = buatBlok({
  id: "navbar",
  label: "Navbar",
  kategori: "Komponen Umum",
  tag: "nav",
  kelas: "navbar",
  script: scriptNavbar,
  html: htmlNavbar(`
    <li><a href="#" class="aktif">Beranda</a></li>
    <li><a href="#">Tentang</a></li>
    <li><a href="#">Layanan</a></li>
    <li><a href="#">Kontak</a></li>
  `),
  css: cssNavbar,
});

export const navbarDropdown = buatBlok({
  id: "navbar-dropdown",
  label: "Navbar + Dropdown",
  kategori: "Komponen Umum",
  tag: "nav",
  kelas: "navbar",
  script: scriptNavbar,
  html: htmlNavbar(`
    <li><a href="#" class="aktif">Beranda</a></li>
    <li><a href="#">Tentang</a></li>
    <li class="navbar-dropdown">
      <button type="button" class="navbar-dropdown-toggle">Layanan ▾</button>
      <ul class="navbar-dropdown-menu">
        <li><a href="#">Desain Web</a></li>
        <li><a href="#">Aplikasi</a></li>
        <li><a href="#">Konsultasi</a></li>
      </ul>
    </li>
    <li><a href="#">Kontak</a></li>
  `),
  css: cssNavbar + cssDropdown,
});
