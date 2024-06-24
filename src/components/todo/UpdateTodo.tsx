"use client";
import { Todo } from "@/types";
import React from "react";
import { FaEdit } from "react-icons/fa";

interface EditTodoProps {
//   handleDelete: (id: string) => void;
  activeTodo:Todo
}
export default function EditTodo({  activeTodo}: EditTodoProps) {

  async function remove() {
try {
    const res = await fetch("/api/todo/"+activeTodo._id, 
      {method:"PUT"})
    if(!res.ok)  throw Error("Error deleting")
      //send revalidate reqeist
   let revData=  await (await fetch('/api/revalidate?path=/todos')).json()
  //  console.log({revData})
    alert("Succfefully dleted!")
} catch (error:any) {
    console.log(error.message)
alert(error.message)
}    
  }
  return <button 
  className="px-6 py-3 bgblue-800 text-white text-lg rounded-lg"
  onClick={() => remove()}><FaEdit className="text-orange-700 text-xl" /></button>;
}
