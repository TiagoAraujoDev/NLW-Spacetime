import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";

import memoriesRoutes from "./routes/memories";
import authRoutes from "./routes/auth";
import jwt from "@fastify/jwt";

const PORT = 3333;

const app = fastify();

app.register(cors, {
  origin: true,
});
app.register(jwt, {
  secret: "tma-spacetime",
});

app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP server running on http://localhost:${PORT}`);
  });
