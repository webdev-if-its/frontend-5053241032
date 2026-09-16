// TODO(Level 2b): beri tipe props yang benar — { tugas: Tugas[] } (impor
// tipe Tugas dari '../types'). Render sebuah <ul>, satu <ItemTugas> per
// elemen array (manfaatkan kembali komponen ItemTugas dari Level 2a, jangan
// tulis ulang markup-nya). key ditaruh di <ItemTugas key={...} />, bukan di
// dalam ItemTugas itu sendiri. Lihat SOAL.md untuk kontrak lengkap.
//
import type { Tugas } from '../types';
import { ItemTugas } from './ItemTugas';

type daftarTugasProps = {
  tugas: Tugas[]
}

export function DaftarTugas({tugas}: daftarTugasProps) {
  return (
    <ul>
      {tugas.map((item) => (
      <ItemTugas key={item.id} tugas={item} />
      ))}
    </ul>
  );
}
