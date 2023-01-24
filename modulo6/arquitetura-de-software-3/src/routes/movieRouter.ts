import { MovieController } from '../controller/MovieController';
import express from "express";

const movieController = new MovieController();

export const movieRouter = express.Router();

movieRouter.post("/create", movieController.createMovie)