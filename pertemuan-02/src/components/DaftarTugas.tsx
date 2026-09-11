// TODO(Level 9): beri tipe props yang benar — { tugas: string[] }. Kalau
// array kosong, render teks "Tidak ada tugas". Kalau tidak kosong, render
// <ul> berisi satu <li> per tugas — WAJIB beri `key` yang tepat di tiap
// <li> (React akan mencatat warning kalau key hilang/salah, dan itu
// dicek otomatis). Lihat SOAL.md untuk kontrak lengkap.
//
interface tugasProps{
  tugas: string[]

}


export function DaftarTugas({ tugas }: tugasProps) {
  if (tugas.length === 0) {
    return <p>Tidak ada tugas.</p>
  }

  return (
    <ul>
      {tugas.map((item, index) => (
        <li key={`${index}-${item}`}>{item}</li>
      ))}
    </ul>
  );
}
