import mongoose from "mongoose";
export default async function dbConnect(){
   await mongoose.connect(
     `mongodb+srv://ghiyaee:ghiyaee47@cluster0.ro6kjtk.mongodb.net/test?retryWrites=true&w=majority`
   );
}