import { MovieDatabase } from "../data/MovieDatabase"
import { CustomError } from "../error/CustomError"
import { InvalidDescription, InvalidLauch, InvalidTitle } from "../error/MovieErrors"
import { InsertMovieInputDTO, MovieInputDTO } from "../model/movieDTO"
import { generateId } from "../services/idGenerator"

export class MovieBusiness {
   public createMovie = async (input: MovieInputDTO) => {
      try {

         const { title, description, launch } = input
         if (
            !title ||
            !description ||
            !launch
         ) {
            throw new CustomError(400, '"title", "description" e "launch" são obrigatórios')
         }

         if (title.length < 6) {
            throw new InvalidTitle()
         }

         if (title.length < 10) {
            throw new InvalidDescription
         }

         if (title.length < 8) {
            throw new InvalidLauch
         }

         const id: string = generateId()

         const movieDatabase = new MovieDatabase()

         const movieInput: InsertMovieInputDTO = {
            id: id,
            title: title,
            description: description,
            launch: launch
         }

         await movieDatabase.insertMovie(movieInput)

      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
}
