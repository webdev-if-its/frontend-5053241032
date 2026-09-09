// TODO(Level 1): beri tipe props yang benar (bukan `any`) — objek dengan
// dua field: nama (string) dan nrp (string). Lalu render SATU root element
// yang memuat teks "Nama: {nama}" dan "NRP: {nrp}" (boleh di elemen
// terpisah, asal berada di dalam satu pembungkus). Lihat SOAL.md untuk
// kontrak lengkap.
interface dataDiri{
  nama: string
  nrp: string
}

export function Profil(props: dataDiri) {
  return <div>
    <h1>Nama: {props.nama}</h1>
    <h1>NRP: {props.nrp}</h1>

  </div>
}
