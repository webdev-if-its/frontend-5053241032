// TODO(Level 7): beri tipe props yang benar — { nama?: string } (nama
// OPSIONAL). Kalau nama tidak diberikan, gunakan nilai default "Tamu" —
// cari tahu caranya lewat default parameter destructuring, bukan lewat
// if/else manual. Render <p>Halo, {nama}!</p>. Lihat SOAL.md.
//
interface sapaanProps{
  nama?: string
}


export function Sapaan({ nama = "Tamu" }: sapaanProps) {
  return (
    <p>Halo, {nama}!</p>
  );
}
