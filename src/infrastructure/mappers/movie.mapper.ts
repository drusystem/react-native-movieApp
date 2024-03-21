import { FullMovie, Movie } from "../../core/entities/movie.entity";
import type { MovieDBMovie, Result } from "../interfaces/movie-db.responses";

export class MovieMapper{

    static fromMovieDBResultToEntity(result:Result):Movie{

        return {
            id:result.id,
            title:result.title,
            description:result.overview,
            releaseDate:new Date(result.release_date),
            rating:result.vote_average,
            poster:`https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop:`https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
        }
    }

    static formMovieDBToEntity(movieByAPI:MovieDBMovie):FullMovie{


        return {
            id:movieByAPI.id,
            title:movieByAPI.title,
            description:movieByAPI.overview,
            releaseDate:new Date(movieByAPI.release_date),
            rating:movieByAPI.vote_average,
            poster:`https://image.tmdb.org/t/p/w500${movieByAPI.poster_path}`,
            backdrop:`https://image.tmdb.org/t/p/w500${movieByAPI.backdrop_path}`,
            genres:movieByAPI.genres.map(genre=>genre.name),
            duration:movieByAPI.runtime,
            budget:movieByAPI.budget,
            originalTitle:movieByAPI.original_title,
            productionCompanies:movieByAPI.production_companies.map(company=>company.name)
        }
    }
}