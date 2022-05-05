import express from "express";
import { SubmitFeedbackUseCase } from "./useCases/SubmitFeedbackUseCase";
import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/NodemailerMailAdapter";

export const routes = express.Router();

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const nodemailerAdapter = new NodemailerMailAdapter();
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return response.status(201).send();
});
