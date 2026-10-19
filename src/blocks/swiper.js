import { buatBlok } from "./buatBlok";

const gambarBawaan = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='240'><rect width='400' height='240' fill='%23e5e7eb'/></svg>`;

const slide = (n) => `
  <div class="swiper-slide">
    <div class="swiper-kartu">
      <img class="swiper-gambar" src="${gambarBawaan}" alt="">
      <h3 class="swiper-judul">Judul Slide ${n}</h3>
      <p class="swiper-teks">Tulis deskripsi singkat slide ini.</p>
    </div>
  </div>
`;

export const swiperKartu = buatBlok({
  id: "swiper-kartu",
  label: "Swiper Kartu",
  kategori: "Konten",
  html: `
    <div class="swiper" style="height: 380px" data-gjs-slides-per-view="3" data-gjs-space-between="20">
      <div class="swiper-wrapper">
        ${[1, 2, 3, 4, 5, 6].map(slide).join("")}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  `,
  css: `
    .swiper-kartu {
      box-sizing: border-box;
      height: 100%;
      padding: 1.5rem;
      background-color: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      text-align: left;
      font-family: system-ui, sans-serif;
    }
    .swiper-gambar {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      border-radius: 8px;
    }
    .swiper-judul {
      margin: 1rem 0 0.5rem;
      color: #111827;
      font-size: 1.25rem;
    }
    .swiper-teks { margin: 0; color: #4b5563; line-height: 1.6; }
  `,
});
