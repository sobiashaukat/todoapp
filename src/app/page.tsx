"use client";
import { useState } from "react";
import { TodoObject } from "../models/Todo";
import { v4 as uuid } from "uuid";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoObject[]>([]);
  const addTodo = () => {
    console.log("add todo:", todo);
    setTodos([{ id: uuid(), value: todo, done: false }, ...todos]);
    setTodo("");
  };
  const makeTodoDone = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  };

  return (
    <>
      <header className="bg-slate-950 p-4">
        <h1 className="text-3xl">Todos</h1>
      </header>
      <main className="p-4">
        <input
          type="text"
          placeholder="Enter a new todo"
          className="p-2 rounded mr-5 text-slate-900"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />

        <button className="border-2 p-2 rounded" onClick={() => addTodo()}>
          Add Todo
        </button>
        <ul className="mt-5">
          {todos.map((todo) => (
            <li
              onClick={() => makeTodoDone(todo.id)}
              className="text-3xl ml-5 cursor-pointer"
              key={todo.id}
            >
              {todo.value}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
