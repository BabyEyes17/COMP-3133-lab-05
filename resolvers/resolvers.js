import MovieModel from '../models/movie.js';

// Resolvers define the technique for fetching the types defined in the schema.

const resolvers = {

    Query: {

        getAllMovies: async() => {

            return await Movie.find().sort({ release_date: -1});
        },

        searchMovieById: async (_, { id }) => {

            return await Movie.findById(id);
        },

        searchMovieByDirectorName: async (_, { director_name }) => {

            return await Movie.find({ director_name }).sort({ release_date: -1 });
        }
    }














}