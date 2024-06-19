"use client";
import { Todo } from "@/types";
import React, { ChangeEvent, EventHandler, MouseEvent, useState } from "react";
type AddTodoProps = {
  passedTodo?: Todo | null;
};
export default function AddTodo({ passedTodo = null }: AddTodoProps) {
  const defaultTodo = { title: "", completed: false };
  const [newTodo, setNewTodo] = useState<Todo>(passedTodo || defaultTodo);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (!e.target.value) return;
    setNewTodo({ ...newTodo, title: e.target.value });
  }

  async function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    try {
      const res = await fetch("/api/todo", {
        body: JSON.stringify(newTodo),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw Error("Error creating todo");
      setNewTodo(defaultTodo);
      alert("Todo created successfully!");
    } catch (error: any) {
      console.error(error);
      alert("Error " + error.message);
    }
  }
  return (
    <div className="min-w-[400px] mx-auto px-8 py-6 bg-slate-400 ">
      <input
        type="text"
        value={newTodo.title}
        onChange={handleChange}
        placeholder="Enter todo title"
      />{" "}
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
