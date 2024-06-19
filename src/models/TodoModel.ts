import { Todo } from "@/types";
import mongoose from "mongoose";

const todoSchema =  new mongoose.Schema<Todo>({
title:{type:String, required:true},
completed:{type:Boolean, required:true}
})


const TodoModel = mongoose.models.Todo || mongoose.model("Todo", todoSchema)

export {TodoModel}