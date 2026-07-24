// Źródło danych galerii realizacji — JEDNO miejsce (wcześniej tablica była
// zduplikowana we frontmatterze i w <script> lightboxa).
//
// GOTOWOŚĆ POD GLOBALNE PORTFOLIO: schemat { src, alt?, category? } jest zgodny
// z centralnym galleries.json (panel na AWS). Docelowa integracja = podmiana
// zawartości tej tablicy na fetch z https://media.torweb.pl/<domena>/galleries.json
// (albo import wygenerowanego pliku) — komponent Portfolio.astro nie zmienia się.
//
// UWAGA: część URL-i to jeszcze hotlinki (meblesystem.pl/wp-content, cdn.myportfolio.com).
// Zostają 1:1 do czasu migracji obrazów do centralnego bucketa (następny etap).

export interface PortfolioImage {
  src: string;
  alt?: string;
  category?: string;
}

export const portfolio: PortfolioImage[] = [
  { src: "https://media.meblesystem.pl/meble-bydgoszcz.pl/realizacje-legacy/Dorota-projektMIESZKANIE_CIECHOCINEK_1_opt.webp", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/b266f6f9-7066-4fac-a179-e072ffe0b442_rw_1920.jpg?h=30421dce90a3ad1c299a7e86cc2ab90a", alt: "" },
  { src: "https://media.meblesystem.pl/meble-bydgoszcz.pl/realizacje-legacy/Dorota-projektPROJEKT_JASKOLCZA_TORUN_9_opt.webp", alt: "" },
  { src: "https://media.meblesystem.pl/meble-bydgoszcz.pl/realizacje-legacy/Dorota-projektPROJEKT_JASKOLCZA_TORUN_3_opt.webp", alt: "" },
  { src: "https://media.meblesystem.pl/meble-bydgoszcz.pl/realizacje-legacy/Dorota-projektRESTAURACJA_PANORAMA_10_opt.webp", alt: "" },
  { src: "https://media.meblesystem.pl/meble-bydgoszcz.pl/realizacje-legacy/Dorota-projektPROJEKT_SALON_Z_ANEKSEM_SZABAT_5_opt.webp", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/ece5504d-43cd-4fe5-8ceb-bdaf94ffcea3_rw_1920.jpg?h=62796c0c4c1839efa2b9c24bd1f2b37c", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/28f07804-8ba2-491c-b7c5-ff883c80633e_rw_1920.jpg?h=597c2b19308cd0bf033213254c85855a", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/38de0233-2f3d-4c64-b0bd-a7999f213a57_rw_1920.jpg?h=64053976df41b34b9eeab748e47ff089", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/25faa4c1-d8f9-4f18-82af-18e70f69c568_rw_1920.jpg?h=a8319ae58e602ded3ab7b6816b847dfa", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/1b75e168-9f16-45b7-a877-c2f132b54de9_rw_1920.jpg?h=88ef3ff347f91a33616ade140294a454", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/edef81cf-9b81-4158-ae89-90bede33afa0_rw_1920.jpg?h=db370ddf3eb6d2c277f45bc581888452", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/3bb5db99-771c-4a5a-8242-1d270fcbd38f_rw_1920.jpg?h=b7bfba667ac6468bfaf5b616f2324bda", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/6125ceb8-cb2a-4a2f-9dc9-e82dcace73a8_rw_1920.jpg?h=7ff6077e6226a1494b3274094fde5f74", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/33e157fd-387a-4497-b8b1-fd535fedba37_rw_3840.jpeg?h=188ec54d0707a0bd69e5a16bdb8de668", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/9d4af452-264d-48e8-b0b4-51de8a0eead3_rw_3840.jpeg?h=cfa372e82abfc7933be056cc847dd048", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/36c5a446-8065-43c4-9f6e-6c8e009e70b2_rw_3840.jpeg?h=7d8b43239c221c416cfb66ab247d9220", alt: "" },
  { src: "https://cdn.myportfolio.com/41734a72-15e8-43e5-bf6c-48e68f950787/044db97a-3efa-4787-adb0-21e9c2b6a1a3_rw_3840.jpg?h=6ac670c1f706f524a87f4ac20de32a7d", alt: "" },
  { src: "https://media.meblesystem.pl/meble-bydgoszcz.pl/realizacje-legacy/Dorota-projektSLIWY_POKOJ_DZIECIECY_14_opt.webp", alt: "" },
];
