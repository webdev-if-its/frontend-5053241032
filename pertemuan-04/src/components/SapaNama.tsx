// TODO(Level 7): komponen TANPA props (tipe props-nya harus kosong). Buat
// controlled input berlabel "Nama" yang nilainya disimpan di
// useState<string>, dan tampilkan teks "Halo, {nama}!" — kalau nama masih
// kosong, tampilkan "Halo, Tamu!".
// Lihat SOAL.md untuk kontrak lengkap.
//
//
import React, { useState } from 'react';

export function SapaNama() {
  const [nama, setNama] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNama(event.target.value);
  }


  return (
    <div>
      <label htmlFor="nama">Nama</label>
      <input id="nama" value={nama} onChange={handleChange} />
      <p>Halo, {nama ? nama : 'Tamu'}!</p>
    </div>
  );
}
