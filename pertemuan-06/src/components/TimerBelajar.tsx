// TODO(Level 10): beri tipe props yang benar — { detikAwal: number }.
// Gabungkan semua materi pertemuan ini jadi timer belajar:
// - teks "Sisa: {n} detik" (mulai dari detikAwal), tombol "Mulai"/"Jeda"
//   (bergantian) dan tombol "Reset",
// - saat berjalan, sisa berkurang tiap detik; "Jeda" menghentikan timer
//   (tidak ada timer tersisa); "Reset" mengembalikan sisa ke detikAwal
//   dan berhenti,
// - saat sisa = 0: tampil teks "Selesai!", timer berhenti otomatis, dan
//   tombol "Mulai" dinonaktifkan (disabled),
// - judul tab (document.title) selalu "Sisa: {n} detik" selama komponen
//   terpasang, dan KEMBALI ke judul semula saat komponen dilepas
//   (cleanup).
// Lihat SOAL.md untuk kontrak lengkap.
//
import { useEffect } from "react";
import { useState } from "react";

export function TimerBelajar({ detikAwal }: { detikAwal: number }) {
  const [sisa, setSisa] = useState(detikAwal);
  const [jalan, setJalan] = useState(false);

  const selesai = sisa <= 0;
  const berjalan = jalan && !selesai;

  // Timer: hanya aktif saat berjalan dan belum selesai
  useEffect(() => {
    if (!berjalan) return;

    const id = setInterval(() => {
      setSisa((d) => Math.max(0, d - 1));
    }, 1000);

    return () => clearInterval(id);
  }, [berjalan]);

  // Judul tab: cleanup mengembalikan judul lama
  useEffect(() => {
    const judulLama = document.title;
    document.title = `Sisa: ${sisa} detik`;

    return () => {
      document.title = judulLama;
    };
  }, [sisa]);

  const reset = () => {
    setSisa(detikAwal);
    setJalan(false);
  };

  return (
    <div>
      <p>Sisa: {sisa} detik</p>
      {selesai && <p>Selesai!</p>}
      <button onClick={() => setJalan((j) => !j)} disabled={selesai}>
        {berjalan ? "Jeda" : "Mulai"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
