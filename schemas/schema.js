import { gql } from 'graphql-tag';

const typeDefs = gql`

    type Movie {

        _id: ID!
        name: String!
        director_name: String!
        production_house: String!
        release_date: String!
        rating: Float!
    }



    input AddMovieInput {
    
        name: String!
        director_name: String!
        production_house: String!
        release_date: String!
        rating: Float!
    }



    input UpdateMovieInput {
    
        name: String
        director_name: String
        production_house: String
        release_date: String
        rating: Float
    }



    type MovieResponse {
    
        success: Boolean!
        message: String!
        movie: Movie
    }



    type Query {
    
        getAllMovies: [Movie!]!

        searchMovieById(id: ID!): Movie

        searchMovieByDirectorName(director_name: String): [Movie]
    }



    type Mutation {
    
        addMovie(input: AddMovieInput!): MovieResponse!

        updateMovieById(id: ID!, input: UpdateMovieInput!): MovieResponse!

        deleteMovieById(id: ID!): MovieResponse!
    }
`;

export default typeDefs;
