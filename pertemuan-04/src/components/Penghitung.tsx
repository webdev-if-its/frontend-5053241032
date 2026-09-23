// TODO(Level 5): beri tipe props yang benar — { awal?: number }. Simpan
// angka di useState<number> (nilai awal = props.awal, default 0) dan render
// teks "Jumlah: {angka}" plus tiga tombol: "+" (tambah 1), "-" (kurangi 1),
// "Reset" (kembali ke nilai awal).
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from 'react';

type hitungProps = {
  awal?: number;
}
export function Penghitung({ awal = 0 }: hitungProps) {
  const [state, setState] = useState(awal);
  return <div>
    <p>Jumlah: {state}</p>
    <button onClick={() => setState(state + 1)}>+</button>
    <button onClick={() => setState(state - 1)}>-</button>
    <button onClick={() => setState(awal)}>Reset</button>
  </div>
}
