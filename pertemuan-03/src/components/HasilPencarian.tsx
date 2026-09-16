// TODO(Level 3): beri tipe props yang benar — { query: string; hasil:
// string[] }. Pakai if/else (di LUAR return, sebelum JSX) untuk tiga
// kemungkinan:
// - query kosong ("")          -> render teks yang memuat "Ketik sesuatu
//                                  untuk mencari"
// - query tidak kosong TAPI
//   hasil.length === 0         -> render teks yang memuat "Tidak ditemukan"
// - selain itu                 -> render <ul> berisi satu <li> per item
//                                  hasil, dengan key yang tepat
// Lihat SOAL.md untuk kontrak lengkap.

type queryProps = {
  query: string,
  hasil: string[]
}

export function HasilPencarian({query, hasil}: queryProps) {
  if (query === "") {
    return <p>Ketik sesuatu untuk mencari</p>
  } else if (hasil.length === 0) {
    return <p>Tidak ditemukan</p>
  }

  return (
    <ul>
      {hasil.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
