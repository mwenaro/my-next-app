import mongoose from "mongoose";
export const dbConnect = async()=>{
    try {
    const con= await    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string)
        // console.log({con})
        console.log("MongoDB Connected Succefffully!")
    } catch (error:any) {
       console.log("Connetion Error "+error.message) 
    }
}