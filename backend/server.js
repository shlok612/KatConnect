import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongo from "./db/connectToMongoos.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Correct path to your frontend build
const frontendPath = join(__dirname, "../frontend/vite-project/dist");

// Serve static files from Vite build
app.use(express.static(frontendPath));

// Your API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// ✅ Catch-all route — safe version
app.get(/.*/, (req, res) => {
  res.sendFile(join(frontendPath, "index.html"));
});


server.listen(PORT, () => {
  connectToMongo();
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
