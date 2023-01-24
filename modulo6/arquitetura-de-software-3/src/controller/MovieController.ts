import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/movieDTO";

export class MovieController {

    public createMovie = async (req: Request, res: Response) => {
        try {
            const { title, description, launch } = req.body

            const input: MovieInputDTO = {
                title,
                description,
                launch
            }

            const movieBusiness = new MovieBusiness()

            await movieBusiness.createMovie(input)

            res.status(201).send({ message: "Filme cadastrado!" })
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}
