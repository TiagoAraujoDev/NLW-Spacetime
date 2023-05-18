import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export default async function memoriesRoutes(app: FastifyInstance) {
  app.get("/memories", async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 120).concat("..."),
      };
    });
  });

  app.get("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return memory;
  });

  app.post("/memories", async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

    const newMemory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: "69b7eca6-61b4-4164-9f36-007d60285e75",
      },
    });

    return newMemory;
  });

  app.put("/memories/:id", async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });

    const paramsSchema = z.object({
      id: z.string(),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);
    const { id } = paramsSchema.parse(request.params);

    const updatedMemory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    });

    return updatedMemory;
  });

  app.delete("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.memory.delete({
      where: {
        id,
      },
    });
  });
}
