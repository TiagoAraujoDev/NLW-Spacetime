import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import multipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";

import memoriesRoutes from "./routes/memories";
import authRoutes from "./routes/auth";
import uploadRoutes from "./routes/upload";
import { resolve } from "path";

const PORT = 3333;

const app = fastify();

// Modules
app.register(fastifyStatic, {
  root: resolve(__dirname, "..", "uploads"),
  prefix: "/uploads",
});
app.register(multipart);
app.register(cors, {
  origin: true,
});
app.register(jwt, {
  secret: "tma-spacetime",
});

// Routes
app.register(authRoutes);
app.register(uploadRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP server running on http://localhost:${PORT}`);
  });
