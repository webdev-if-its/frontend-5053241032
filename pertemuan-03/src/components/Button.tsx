// TODO(Level 7): beri tipe props yang benar — { variant: 'primary' |
// 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }.
// Render sebuah <button> yang:
// - memuat children di dalamnya,
// - memanggil onClick saat diklik (kalau diberikan),
// - className-nya BERBEDA untuk tiap nilai variant (pakai Tailwind, mis.
//   warna latar berbeda per variant) — ini komponen REUSABLE: satu
//   komponen, tiga tampilan, diatur lewat props.
// Lihat SOAL.md untuk kontrak lengkap.


type btnProps = {
  variant: 'primary' | 'secondary' | 'danger',
  children: React.ReactNode,
  onClick?: () => void,
}


export function Button({ variant, children, onClick }: btnProps) {
  if (variant === "primary") {
    return <button className="bg-green-400" onClick={onClick}>{children}</button>
  } else if (variant === "secondary") {
    return <button className="bg-purple-500" onClick={onClick}>{children}</button>
  } else if (variant === "danger") {
    return <button className="bg-red-500" onClick={onClick}>{children}</button>
  }
}
