// TODO(Level 6): beri tipe props yang benar — { min: number; max: number }.
// Angka dimulai dari min, ditampilkan sebagai "Nilai: {angka}", dengan tombol
// "+" dan "-". Tombol "+" harus disabled saat angka sudah = max, tombol "-"
// harus disabled saat angka sudah = min.
// Lihat SOAL.md untuk kontrak lengkap.
//
import { useState } from "react";

type hitungBatasProps = {
  min: number;
  max: number;
}
export function PenghitungBatas({min,max}: hitungBatasProps) {
  const [state, setState] = useState(min)
  return <div>
    <button disabled={state === max} onClick={() => setState(state + 1)}>+</button>
    <button disabled={state === min} onClick={() => setState(state - 1)}>-</button>
    <p>Nilai: {state}</p>
  </div>
}
