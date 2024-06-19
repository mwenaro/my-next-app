import { TodoModel } from "@/models/TodoModel";
import { Todo } from "@/types";
import React from "react";
import DeleteTodo from "./DeleteTodo";
import { dbConnect } from "@/libs/mongoose/dbConnect";

export default async function Todos() {
  //load db con
  await dbConnect();
  const fetchedTodos = await TodoModel.find({});
  const handleDeleteTodo = async(id:string)=> await TodoModel.findByIdAndDelete(id)
console.log({fetchedTodos})
  if (!fetchedTodos || !fetchedTodos.length)
    return (
      <div>
        <h3>No Todos Found ...</h3>
      </div>
    );
  return (
    <div className="">
      {fetchedTodos.map((todo: Todo, idx: number) => (
        <div key={todo?._id} className="flex">
          <h3>{todo.title}</h3>
          <DeleteTodo id={todo._id as string} />
        </div>
      ))}
    </div>
  );
}
