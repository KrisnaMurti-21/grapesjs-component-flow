import { buatBlok } from "./buatBlok";

// Gambar pengganti (abu-abu), tidak butuh internet
const gambarBawaan = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='240'><rect width='400' height='240' fill='%23e5e7eb'/></svg>`;

const panah = `<svg viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>`;

// CSS yang dipakai kedua card
const cssDasar = `
  .kartu-gambar {
    display: block;
    width: 100%;
    border-radius: 8px;
  }
  .kartu-judul {
    margin: 0 0 0.5rem;
    color: #111827;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.3;
  }
  .kartu-teks {
    margin: 0 0 1.5rem;
    color: #4b5563;
    line-height: 1.6;
  }
  .kartu-tombol {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.625rem 1rem;
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    color: #374151;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    text-decoration: none;
  }
  .kartu-tombol:hover { background-color: #e5e7eb; color: #111827; }
  .kartu-tombol svg { width: 16px; height: 16px; }
    .kartu-aksi {
    display: flex;
    justify-content: flex-start;
  }
`;

const cssTegak = `
  .kartu {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    font-family: system-ui, sans-serif;
  }
  .kartu .kartu-gambar {
    height: auto;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }
  .kartu .kartu-judul { margin-top: 1.5rem; }
`;

const cssMendatar = `
  .kartu-datar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    font-family: system-ui, sans-serif;
  }
  .kartu-datar .kartu-gambar {
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
  .kartu-isi {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    .kartu-datar { flex-direction: row; align-items: stretch; }
    .kartu-datar .kartu-gambar {
      flex: 0 0 35%;
      width: 35%;
      aspect-ratio: auto;
    }
  }
`;

export const kartuTegak = buatBlok({
  id: "kartu-tegak",
  label: "Card (Gambar Atas)",
  kategori: "Konten",
  html: `
    <div class="kartu">
      <img class="kartu-gambar" src="${gambarBawaan}" alt="">
      <h5 class="kartu-judul">Judul Card Anda di Sini</h5>
      <p class="kartu-teks">Tulis deskripsi singkat card. Jelaskan isi atau manfaat yang ingin disampaikan kepada pengunjung.</p>
      <div class="kartu-aksi">
      <a href="#" class="kartu-tombol">Selengkapnya ${panah}</a>
      </div>
    </div>
  `,
  css: cssDasar + cssTegak,
});

export const kartuMendatar = buatBlok({
  id: "kartu-mendatar",
  label: "Card (Gambar Samping)",
  kategori: "Konten",
  html: `
    <div class="kartu-datar">
      <img class="kartu-gambar" src="${gambarBawaan}" alt="">
      <div class="kartu-isi">
        <h5 class="kartu-judul">Judul Card Anda di Sini</h5>
        <p class="kartu-teks">Tulis deskripsi singkat card. Jelaskan isi atau manfaat yang ingin disampaikan kepada pengunjung.</p>
        <div class="kartu-aksi">
          <a href="#" class="kartu-tombol">Selengkapnya ${panah}</a>
        </div>
      </div>
    </div>
  `,
  css: cssDasar + cssMendatar,
});
