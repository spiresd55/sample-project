import { gql } from "apollo-server-core";

export const typeDefs = gql`
    type User {
        firstName: String,
        lastName: String,
        userName: String
    }

    type Query {
        test: String
    }
    type Mutation {
        register(firstName: String!, lastName: String!, userName: String!, password: String!): Username
    }
`;
