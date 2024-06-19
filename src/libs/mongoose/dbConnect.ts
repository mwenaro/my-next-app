import mongoose from "mongoose";
export const dbConnect = async () => {
    console.log(process.env.NODE_ENV)
  const URI =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_MONGODB_URI_PROD
      : process.env.NEXT_PUBLIC_MONGODB_URI;
  try {
    const con = await mongoose.connect(URI as string);
    // console.log({con})
    console.log("MongoDB Connected Succefffully!");
  } catch (error: any) {
    console.log("Connetion Error " + error.message);
  }
};
