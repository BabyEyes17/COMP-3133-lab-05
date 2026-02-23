import { gql } from 'graphql-tag';

const typeDefs = gql`

    type Movie {
    
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


    type Query {
    
        getAllMovies: [Movie!]!

        searchMovieById(id: ID!): Movie

        searchMovieByDirectorName(director_name: String): [Movie]
    }



    type Mutation {
    
        addMovie(input: AddMovieInput!): Movie!

        updateMovieById(id: ID!, input: UpdateMovieInput!): Movie!

        deleteMovieById(id: ID!): Movie!
    }
`;

module.exports = typeDefs;