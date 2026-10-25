// TODO(Level 6-7): komponen TANPA props. Ambil daftar todo lewat getTodos()
// dari '../api/todos' di dalam useEffect (dependency array kosong), lalu:
// - selama data belum datang, render teks "Memuat...",
// - kalau sukses, render <ul> berisi <li> per todo (tampilkan title, key =
//   id) dan "Memuat..." hilang,
// - kalau gagal (error apa pun), render "Terjadi error: {pesan error}" dan
//   "Memuat..." hilang.
// Simpan data/loading/error di useState. JANGAN memanggil fetch() langsung di
// sini (lihat Level 10).
// Lihat SOAL.md untuk kontrak lengkap.
//
import { useEffect, useState } from "react";
import { getTodos } from "../api/todos";
import type { Todo } from "../types";

export function DaftarTodoRemote() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let batal = false;

    getTodos()
      .then((data) => {
        if (!batal) setTodos(data);
      })
      .catch((err: unknown) => {
        if (!batal) setError(err instanceof Error ? err.message : String(err));
      })
      .finally(() => {
        if (!batal) setLoading(false);
      });

    return () => {
      batal = true;
    };
  }, []);

  if (loading) return <p>Memuat...</p>;
  if (error) return <p>Terjadi error: {error}</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default DaftarTodoRemote;
