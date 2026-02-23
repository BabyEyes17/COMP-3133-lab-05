import Movie from '../models/movie.js';

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
    },

    Mutation: {

        addMovie: async (_, { input }) => {
            
            try {

                const movie = await Movie.create({

                    ...input
                });

                return { success: true, message: "Movie created", movie};
            }

            catch (e) {

                return { success: false, message: e.message || "Failed to create movie", movie: null};
            }
        },

        updateMovieById: async (_, { id, input }) => {
            
            const update = { ...input };

            try {

                const updatedMovie = await Movie.findByIdAndUpdate(id, update, { new: true });

                if (!updatedMovie) {
                    return { success: false, message: "Movie not found", movie: null };
                }

                return { success: true, message: "Movie updated", movie: updatedMovie };
            }

            catch (e) {

                return { success: false, message: e.message || "Failed to update movie", movie: null};
            }
        },

        deleteMovieById: async (_, { id }) => {

            try {

                const deletedMovie = await Movie.findByIdAndDelete(id)

                if (!deletedMovie) {
                    return { success: false, message: "Movie not found", movie: null };
                }

                return { success: true, message: "Movie deleted", movie: deletedMovie };
            }

            catch (e) {

                return { success: false, message: e.message || "Failed to delete movie", movie: null };
            }
        }
    },

    Movie: {

        release_date: (movie) => 
            movie.release_date 
                ? (movie.release_date instanceof Date 
                    ? movie .release_date.toISOString() 
                    : String(movie.release_date))
                : null
    }
};

module.exports = resolvers;
