// TODO(Level 9): beri tipe props yang benar — { detikAwal: number;
// onSelesai: () => void }. Tampilkan "Sisa: {n}" yang mulai dari detikAwal
// dan berkurang 1 tiap detik. Saat mencapai 0: panggil onSelesai TEPAT
// SEKALI, berhenti di 0 (tidak negatif), dan tidak ada timer tersisa.
// Saat komponen dilepas di tengah jalan, timer harus dibersihkan dan
// onSelesai tidak boleh terpanggil.
// Lihat SOAL.md untuk kontrak lengkap.
//
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export function Countdown({
  detikAwal,
  onSelesai,
}: {
  detikAwal: number;
  onSelesai: () => void;
}) {
  const [n, setN] = useState(detikAwal);
  const selesai = n <= 0;

  const onSelesaiTerbaru = useRef(onSelesai);
  const sudahDipanggil = useRef(false);

  useEffect(() => {
    onSelesaiTerbaru.current = onSelesai;
  }, [onSelesai]);

  useEffect(() => {
    if (selesai) return;

    const id = setInterval(() => {
      setN((d) => Math.max(0, d - 1));
    }, 1000);

    return () => clearInterval(id);
  }, [selesai]);

  useEffect(() => {
    if (selesai && !sudahDipanggil.current) {
      sudahDipanggil.current = true;
      onSelesaiTerbaru.current();
    }
  }, [selesai]);

  return <p>Sisa: {n}</p>;
}
