import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
 const [todos, setTodos] = useState([])

 const addTodo = (todo) => {
  setTodos((prev) => [ {id: Date.now(), ...todo} ,...prev])
 }

 const updateTodo = (id, todo) => {
   setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === Todo.id ? todo : prevTodo))) 
 }

 const deleteTodo = (id) => {
   setTodos((prev) => prev.filter((todo) => todo.id !== id))
 }

 const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodox)))
 }

 useEffect(() => {
           const todos = JSON.parse(localStorage.getItem('Todos'))
            if (todos && todos.length > 0) {
              setTodos(todos)
            }
 },[])

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#162d4e] min-h-screen py-8">
              <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-white bg-neutral-900">
                  <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                  <div className="mb-4">
                      {/* Todo form goes here */} 
                      <TodoForm />
                  </div>
                  <div className="flex flex-wrap gap-y-3">
                      {/*Loop and Add TodoItem here */}
                      {todos.map((todo) => (
                        <div key={todo.id}
                        className='w-full'
                        >
                          <TodoItem todo={todo} />
                        </div>
                      ))}
                  </div>
              </div>
          </div>
  </TodoProvider>
  )
}

export default App
