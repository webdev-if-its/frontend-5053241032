// TODO(Level 2): komponen TANPA props. Dua state: nama (string) dan jumlah
// klik (number). Render:
// - input berlabel "Nama" (controlled),
// - tombol "+1" dan teks "Klik: {jumlah}".
// Pakai useEffect untuk mengubah document.title menjadi "Halo, {nama}"
// (kalau nama kosong: "Halo, Tamu"). Efek HANYA boleh jalan ulang saat nama
// berubah — klik tombol "+1" tidak boleh memicu efek (atur dependency array).
// Lihat SOAL.md untuk kontrak lengkap.

import { useEffect } from "react";
import { useState } from "react";



export function SapaNama() {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState(0);

  useEffect(() => {
    document.title = `Halo, ${nama || "Tamu"}`;
  }, [nama]);

  return (
    <div>
      <label htmlFor="nama">Nama</label>
      <input
        id="nama"
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <button type="button" onClick={() => setJumlah((j) => j + 1)}>
        +1
      </button>
      <span>Klik: {jumlah}</span>
    </div>
  );
}
