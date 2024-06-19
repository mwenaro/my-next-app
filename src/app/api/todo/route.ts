import { dbConnect } from "@/libs/mongoose/dbConnect";
import { TodoModel } from "@/models/TodoModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //run db connection
    await dbConnect();
    // get todos
    const fetchedTodos = await TodoModel.find({});
    return new NextResponse(JSON.stringify(fetchedTodos), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ msg: "Error " + error.message }), {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const todoBody = await req.json();
    await dbConnect();
    let savedTodo = null;
    if (Array.isArray(todoBody)) {
      savedTodo = await TodoModel.insertMany(todoBody);
    } else {
      const newTodo = new TodoModel(todoBody);
      savedTodo = await newTodo.save();
    }

    if (!savedTodo) throw Error("Error insertind todo");
    revalidatePath("/todos", 'page');
    return new NextResponse(JSON.stringify(savedTodo));
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ msg: "Error " + error.message }), {
      status: 500,
    });
  }
}
