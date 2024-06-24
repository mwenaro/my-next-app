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
    <div className="flex flex-col gap-2">
      <AddTodo className="bg-green-400 w-24" />
      {!todos.length ? (
        <div>
          <h3>No todos found ...</h3>
        </div>
      ) : (
        todos.map((todo: Todo, idx: number) => (
          <div key={todo?._id as  string + idx} className="grid grid-cols-2 list-decimal w-[400px] mx-auto">
            <h3 className="font-bold text-left text-lg">{todo.title}</h3>
            <DeleteTodo id={String(todo._id)} className="p-3" />
          </div>
        ))
      )}
    </div>
  );
}
