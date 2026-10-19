import { buatBlok } from "./buatBlok";

const css = `
  .hero {
    background-color: #ffffff;
    background-image:
      linear-gradient(to bottom, #eff6ff, transparent),
      url("https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: system-ui, sans-serif;
  }
  .hero-konten {
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 1rem;
    text-align: center;
  }
  .hero-lencana {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 9999px;
    color: #1e40af;
    font-size: 0.875rem;
  }
  .hero-lencana-label {
    padding: 0.125rem 0.5rem;
    background-color: #dbeafe;
    border-radius: 9999px;
    font-weight: 500;
  }
  .hero-lencana svg { width: 16px; height: 16px; }
  .hero-judul {
    margin: 0 0 1.5rem;
    color: #111827;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: 1.15;
  }
  .hero-teks {
    max-width: 700px;
    margin: 0 auto 2rem;
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.6;
  }
  .hero-tombol-grup {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .hero-tombol {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
  }
  .hero-tombol svg { width: 16px; height: 16px; }
  .hero-tombol-utama {
    background-color: #1d4ed8;
    border: 1px solid transparent;
    color: #ffffff;
  }
  .hero-tombol-utama:hover { background-color: #1e40af; }
  .hero-tombol-sekunder {
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    color: #374151;
  }
  .hero-tombol-sekunder:hover { background-color: #e5e7eb; color: #111827; }

  @media (min-width: 640px) {
    .hero-tombol-grup { flex-direction: row; justify-content: center; }
  }
  @media (min-width: 768px) {
    .hero-judul { font-size: 3rem; }
    .hero-teks { font-size: 1.25rem; }
  }
  @media (min-width: 1024px) {
    .hero-konten { padding: 8rem 1rem; }
    .hero-judul { font-size: 3.75rem; }
  }
`;

const panahKanan = `<svg viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>`;
const panahTombol = `<svg viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>`;

export const hero = buatBlok({
  id: "hero",
  label: "Hero",
  kategori: "Komponen Umum",
  html: `
    <section class="hero">
      <div class="hero-konten">
        <div class="hero-lencana">
          <span class="hero-lencana-label">Baru</span>
          <span>Fitur terbaru kami sudah tersedia</span>
          ${panahKanan}
        </div>
        <h1 class="hero-judul">Judul Utama Halaman Anda</h1>
        <p class="hero-teks">Tulis deskripsi singkat di sini. Jelaskan apa yang Anda tawarkan dan mengapa pengunjung perlu tertarik.</p>
        <div class="hero-tombol-grup">
          <a href="#" class="hero-tombol hero-tombol-utama">Mulai Sekarang ${panahTombol}</a>
          <a href="#" class="hero-tombol hero-tombol-sekunder">Pelajari Lebih Lanjut</a>
        </div>
      </div>
    </section>
  `,
  css,
});
