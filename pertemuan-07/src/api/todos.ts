// TODO(Level 1-5): semua request ke JSONPlaceholder dikumpulkan di file ini
// (separation of concerns) — komponen nanti hanya memanggil fungsi-fungsi ini.
// Beri tipe yang tepat (impor tipe Todo dari '../types'); tanda tangan
// lengkapnya ada di SOAL.md.
//
import { Todo } from '../types'
export const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

// Level 1 & 2
export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(BASE_URL)
  if (!response.ok) {
    throw new Error("Gagal mengambil data")
  }
  const todos: Todo[] = await response.json()
  return todos
}

// Level 3
export async function addTodo(title: string): Promise<Todo> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      completed: false,
      userId: 1
    })
  })
  if (!response.ok) {
    throw new Error("Gagal menambahkan data")
  }
  const todo: Todo = await response.json()
  return todo
}


// Level 4
export async function updateTodo(id: number, completed: boolean): Promise<Todo> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      completed
    })
  })
  if (!response.ok) {
    throw new Error("Gagal memperbarui data")
  }
  const todo: Todo = await response.json()
  return todo
}

// Level 5
export async function hapusTodo(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error("gagal....")
  }
  const todo: Todo = await response.json()
}
