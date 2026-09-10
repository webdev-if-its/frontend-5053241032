# frontend-5053241032

Repo tugas mata kuliah **Frontend**, dibuat dari template [`webdev-if-its/frontend-template`](https://github.com/webdev-if-its/frontend-template). Ganti judul di atas jadi nama repo kalian sendiri (`frontend-nrp`, contoh: `frontend-5025201012`).

## Aturan Umum

- Tugas tiap pertemuan disimpan di folder `pertemuan-XX/` pada repo ini — masing-masing adalah project Vite + React + TypeScript sendiri (`npm install` terpisah per folder).
- Commit message wajib menyebut level yang dicapai: `pertemuan-XX: level N selesai`.
- Deadline push: sebelum pertemuan berikutnya dimulai.
- Semua level dicek otomatis lewat `npm run levels` (Vitest) — baca `pertemuan-XX/SOAL.md` tiap minggu untuk detail levelnya.

## Mengambil Pertemuan Baru Tiap Minggu

Repo ini **tidak otomatis sinkron** dengan template dosen. Begitu ada pertemuan baru, jalankan (ganti `pertemuan-02` sesuai minggu berjalan):

```bash
git fetch https://github.com/webdev-if-its/frontend-template.git main
git checkout FETCH_HEAD -- pertemuan-02
```

Perintah ini **aman dijalankan kapan pun** — tidak akan menimpa folder pertemuan lain yang sudah kalian kerjakan, karena hanya mengambil folder yang disebutkan. Setelah itu, `cd pertemuan-02 && npm install`, lalu commit folder barunya seperti biasa.

Kalau dosen memperbaiki sesuatu di pertemuan yang sudah dirilis (mis. ada bug di test), biasanya cukup ambil ulang file yang diperbaiki saja, bukan seluruh folder — akan diumumkan file mana yang berubah.

---

Bagian di bawah ini **isi bertahap** sesuai level yang sedang kalian kerjakan (lihat `pertemuan-XX/SOAL.md`) — heading-nya dicek otomatis, jangan diganti namanya.

## Struktur Project
App.tsx menjadi sebuah komponen root yang nantinya akan dipakai oleh main.tsx, agar mudah mengeditnya di kedepannya. semisal ada yang ingin dirubah, developer hanya perlu mengubah di bagian App.tsx

## Identitas
- Nama: Danendra Nayottama Hadi
- NRP: 5053241032
- Kelas: M

## Commit vs Push
Perbedaan commit dan push adalah, commit adalah fase atau tahapan dimana kode" yang telah di tulis sudah tersimpan dan siap di publish, namun push adalah proses mempublikasi update dan perubahan yang telah dilakukan

## JSX vs TSX
JSX adalah extensi yang menggunakan bahasa JavaSript, sedangkan TSX adalah extensi yang menggunakan bahasa TypeScript. TSX juga mendukung type checking, type checking sendiri dapat mempermudah developer melihat kesalahannya dimana saat terjadinya error data type.

## Kenapa Union Type untuk Status
Union type berguna buat status karena union type memastikan tidak ada ambiguitas/kemungkinan lainnya selain yang di deklarasikan. contoh di status ada 'pending', nah semisal nanti diisi "pendinggg" akan muncul error.

## Refleksi
(tulis di sini)
