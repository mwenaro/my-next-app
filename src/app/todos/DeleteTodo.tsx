"use client";
import React from "react";

interface DeleteTodoProps {
//   handleDelete: (id: string) => void;
  id: string;
}
export default function DeleteTodo({  id }: DeleteTodoProps) {
  async function remove() {
try {
    const res = await fetch("/api/todo/"+id)
    if(!res.ok)  throw Error("Error deleting")
    alert("Succfefully dleted!")
} catch (error:any) {
    console.log(error.message)
alert(error.message)
}    
  }
  return <button 
  className="px-6 py-3 bgblue-800 text-white text-lg rounded-lg"
  onClick={() => remove()}>Delete</button>;
}
