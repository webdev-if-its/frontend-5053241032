// TODO(Level 6): beri tipe props yang benar — { status: Status } (impor
// `Status` dari '../types', jangan tulis ulang union-nya di sini). Lalu
// render teks berbeda sesuai status: pending -> "Menunggu", selesai ->
// "Selesai", batal -> "Dibatalkan". Lihat SOAL.md untuk kontrak lengkap.
import type { Status } from "../types";

interface statusProps{
  status: Status
}

export function StatusPesanan(props: statusProps) {
  if (props.status === "pending") {
    return <p>Menunggu</p>
  }
  if (props.status === "selesai") {
    return <p>Selesai</p>
  }
  if (props.status === "batal") {
    return <p>Dibatalkan</p>
  }
}
