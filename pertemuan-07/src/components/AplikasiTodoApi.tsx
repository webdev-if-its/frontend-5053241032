// TODO(Level 8-10): komponen TANPA props — aplikasi todo yang tersambung ke
// API lewat fungsi di '../api/todos' (JANGAN memanggil fetch() langsung di
// sini):
// - saat pertama tampil: ambil daftar (getTodos) dan tampilkan sebagai <li>,
//   tiap <li> berisi checkbox berlabel title + tombol "Hapus",
// - form dengan input berlabel "Todo baru" + tombol "Tambah": panggil
//   addTodo(title), lalu tambahkan todo HASIL RESPONS ke akhir daftar dan
//   kosongkan input,
// - klik checkbox: panggil updateTodo(id, !completed), lalu ganti todo itu di
//   state dengan HASIL RESPONS,
// - klik "Hapus": panggil hapusTodo(id), lalu buang todo itu dari state.
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from "react";
import { addTodo, getTodos, hapusTodo, updateTodo } from "../api/todos";
import type { Todo } from "../types";

export function AplikasiTodoApi() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [judulBaru, setJudulBaru] = useState("");
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

  const pesan = (err: unknown) =>
    err instanceof Error ? err.message : String(err);

  async function handleTambah(e: React.FormEvent) {
    e.preventDefault();
    const judul = judulBaru.trim();
    if (!judul) return;
    try {
      const baru = await addTodo(judul);
      setTodos((prev) => [...prev, baru]);
      setJudulBaru("");
      setError(null);
    } catch (err) {
      setError(pesan(err));
    }
  }

  async function handleToggle(todo: Todo) {
    try {
      const hasil = await updateTodo(todo.id, !todo.completed);
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? hasil : t)));
      setError(null);
    } catch (err) {
      setError(pesan(err));
    }
  }

  async function handleHapus(id: number) {
    try {
      await hapusTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
      setError(null);
    } catch (err) {
      setError(pesan(err));
    }
  }

  if (loading) return <p>Memuat...</p>;

  return (
    <div>
      {error && <p>Terjadi error: {error}</p>}

      <form onSubmit={handleTambah}>
        <label htmlFor="todo-baru">Todo baru</label>
        <input
          id="todo-baru"
          value={judulBaru}
          onChange={(e) => setJudulBaru(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => handleToggle(todo)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
            <button type="button" onClick={() => handleHapus(todo.id)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AplikasiTodoApi;
