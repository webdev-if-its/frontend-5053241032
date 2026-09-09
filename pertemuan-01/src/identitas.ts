// TODO(Level 4): ganti dengan NRP kalian sendiri, contoh: '5025201012'
export const NRP = '5053241032'

// TODO(Level 3): kembalikan args[0] kalau ada isinya, kalau tidak kembalikan
// fallback.
export function resolveNama(args: string[], fallback: string): string {
  if (args.length == 0) {
      return fallback
    }
  return args[0]
}

// TODO(Level 5): gabungkan Nama, NRP, dan process.version jadi satu string
// siap cetak (lihat contoh format di SOAL.md).
export function cetakInfo(nama: string): string {

return "Nama: " + nama + "\nNRP: " + NRP + process.version
}
