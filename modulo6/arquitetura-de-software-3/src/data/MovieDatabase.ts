import { CustomError } from "../error/CustomError";
import { InsertMovieInputDTO } from "../model/movieDTO";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {

    private movieTable = 'Architecture_Movie'

    public insertMovie = async (movie: InsertMovieInputDTO
    ) => {
        try {
            MovieDatabase.connection.initialize()
            await MovieDatabase.connection(this.movieTable)
                .insert(movie)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        } finally {
            MovieDatabase.connection.destroy();
        }
    }

}
