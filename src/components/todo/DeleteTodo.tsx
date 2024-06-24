"use client";
import React, { use } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";

interface DeleteTodoProps {
//   handleDelete: (id: string) => void;
  id: string;
  className? : string
}
export default function DeleteTodo({  id, className="" }: DeleteTodoProps) {
  const router = useRouter()
  async function remove() {
try {
    const res = await fetch("/api/todo/"+id, {method:"DELETE"})
    if(!res.ok)  throw Error("Error deleting")
      //send revalidate reqeist
   let revData=  await (await fetch('/api/revalidate?path=/todos')).json()
  //  console.log({revData})
  router.refresh() 
  alert("Successfully dleted!")
} catch (error:any) {
    console.log(error.message)
alert(error.message)
}    
  }
  return <Button 
  className={`p-3 bg-red-600 text-white text-lg rounded-lg ${className}`}
  onClick={() => remove()}>Delete</Button>;
}
