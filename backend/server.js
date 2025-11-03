import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongo from "./db/connectToMongoos.js";
import userRoutes  from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";


dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT=process.env.PORT || 5000;

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/",(req,res)=>{
//   res.send("Hello Shlok Katiyar");
// });



server.listen(PORT, ()=>{
  connectToMongo();
  console.log(`Server running on ${PORT}`);
});