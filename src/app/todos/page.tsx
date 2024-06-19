import { TodoModel } from "@/models/TodoModel";
import { Todo } from "@/types";
import React from "react";
import DeleteTodo from "../../components/todo/DeleteTodo";
import { dbConnect } from "@/libs/mongoose/dbConnect";
import AddTodo from "@/components/todo/AddTodo";
// export const revalidate = 3 // revalidate at most every hour

const getTodos = async () => {
  await dbConnect();
  return await TodoModel.find({});
};
export default async function Todos() {
  //load db con
  const todos = await getTodos();

  return (
    <div className="">
      <AddTodo />
      {!todos.length ? (
        <div>
          <h3>No todos found ...</h3>
        </div>
      ) : (
        todos.map((todo: Todo, idx: number) => (
          <div key={todo?._id as  string + idx} className="flex">
            <h3>{todo.title}</h3>
            <DeleteTodo id={String(todo._id)} />
          </div>
        ))
      )}
    </div>
  );
}
