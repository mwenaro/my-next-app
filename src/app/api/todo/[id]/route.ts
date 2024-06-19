import { dbConnect } from "@/libs/mongoose/dbConnect";
import { TodoModel } from "@/models/TodoModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request, query: { params: { id: any } }) {
  const {
    params: { id },
  } = query;
  try {
    await dbConnect();
    const fetchedTodo = await TodoModel.findById(id);
    if (!fetchedTodo)
      return new NextResponse(
        JSON.stringify({ msg: "No todo with the gen id: " + id }),
        {
          status: 404,
        }
      );
    return new NextResponse(JSON.stringify(fetchedTodo));
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ msg: "Error " + error.message }), {
      status: 500,
    });
  }
}

export async function PUT(req: Request, query: { params: { id: any } }) {
  const {
    params: { id },
  } = query;

  try {
    const data = await req.json();
    //  db connect
    await dbConnect();
    const updateTodo = await TodoModel.findByIdAndUpdate(id, data);
    if (!updateTodo) throw Error("error updating the todo");
    return new NextResponse(JSON.stringify(updateTodo));
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ msg: "Error " + error.message }), {
      status: 500,
    });
  }
}

export async function DELETE(req: Request, query: { params: { id: any } }) {
  const {
    params: { id },
  } = query;

  try {
    await dbConnect();
    const deletedTodo = await TodoModel.findByIdAndDelete(id);
    if (!deletedTodo) throw Error("error deleting the todo");
    revalidatePath("/todos") 

    return new NextResponse(JSON.stringify(deletedTodo));
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ msg: "Error " + error.message }), {
      status: 500,
    });
  }
}
