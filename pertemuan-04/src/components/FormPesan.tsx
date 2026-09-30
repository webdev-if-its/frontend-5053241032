// TODO(Level 10): beri tipe props yang benar — { onKirim: (pesan: string) =>
// void }. Gabungkan semua konsep pertemuan ini: controlled input berlabel
// "Pesan" + tombol submit "Kirim" di dalam <form>. Tombol disabled kalau
// isi pesan (setelah trim) kosong. Saat submit: cegah reload, panggil
// onKirim(pesan yang sudah di-trim), lalu kosongkan input.
// Lihat SOAL.md untuk kontrak lengkap.
//
import React, { useState } from 'react';

type FormPesanProps = {
  onKirim: (pesan: string) => void;
};
export function FormPesan({ onKirim }: FormPesanProps) {
  const [pesan, setPesan] = useState<string>('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setPesan(event.target.value);
    }

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
      event.preventDefault();
      const bersih = pesan.trim();
      if (!bersih) return;
      onKirim(bersih);
      setPesan('');
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="pesan">Pesan</label>
        <input id="pesan" type="text" value={pesan} onChange={handleChange} />
        <button type="submit" disabled={pesan.trim() === ''}>
          Kirim
        </button>
      </form>
    );
}
