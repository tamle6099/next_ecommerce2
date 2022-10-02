import mongoose from "mongoose";

export default function connectBb() {
  if (mongoose.connections[0].readyState) {
    console.log("Success connect MonggoDb");
    return;
  }
  mongoose
    .connect(process.env.MONGODB_URL, {
      
    })
    .catch((err) => console.log(err));
}
