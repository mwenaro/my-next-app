import { TodoModel } from "@/models/TodoModel";
import { Todo } from "@/types";
import React from "react";
import DeleteTodo from "./DeleteTodo";
import { dbConnect } from "@/libs/mongoose/dbConnect";
// export const revalidate = 3 // revalidate at most every hour
export default async function Todos() {
  //load db con
  await dbConnect();
  const fetchedTodos = await TodoModel.find({});
 
  if (!fetchedTodos || !fetchedTodos.length)
    return (
      <div>
        <h3>No Todos Found ...</h3>
      </div>
    );
  return (
    <div className="">
      {fetchedTodos.map((todo: Todo, idx: number) => (
        <div key={todo?._id+''} className="flex">
          <h3>{todo.title}</h3>
          <DeleteTodo id={String(todo._id)} />
        </div>
      ))}
    </div>
  );
}
