// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.
// Lihat SOAL.md untuk kontrak lengkap.

import { useState } from 'react';

export function KalkulatorMini() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <label htmlFor="a">Angka A</label>
      <input id="a" type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
      <label htmlFor="b">Angka B</label>
      <input id="b" type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
      <p>Hasil: {a + b}</p>
    </div>
  );
}
