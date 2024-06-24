"use client";
import { Todo } from "@/types";
import React, { ChangeEvent, EventHandler, MouseEvent, useState } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";

type AddTodoProps = {
  passedTodo?: Todo | null;
  className?: string
};
export default function AddTodo({ passedTodo = null, className = "" }: AddTodoProps) {
  const router = useRouter()
  const defaultTodo = { title: "", completed: false };
  const [newTodo, setNewTodo] = useState<Todo>(passedTodo || defaultTodo);
  
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (!e.target.value) return;
    setNewTodo({ ...newTodo, title: e.target.value });
  }

   function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    submit()
    
  }

  function handleSubmitByEnter(e: any){
    e.preventDefault()
    if(e.key.toLowerCase() === "enter"){
      submit()
    } 
  }
  async function submit() {
    try {
      const res = await fetch("/api/todo", {
        body: JSON.stringify(newTodo),
        method: "POST",
   
      headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw Error("Error creating todo");
      setNewTodo(defaultTodo);
      router.refresh()
      alert("Todo created successfully!");
    } catch (error: any) {
      console.error(error);
      alert("Error " + error.message);
    }
  }
  return (
    <div className="min-w-[400px] mx-auto px-8 py-6 rounded-2xl bg-slate-400 ">
      <input
      className="p-2 rounded-lg"
      onKeyUp={handleSubmitByEnter}
        type="text"
        value={newTodo.title}
        onChange={handleChange}
        placeholder="Enter todo title"
      />{" "}

      <Button onClick={handleSubmit} className={`bg-yellow-300 ${className}`}>Add</Button>
    </div>
  );
}
