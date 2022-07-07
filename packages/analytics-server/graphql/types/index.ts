import { gql } from "apollo-server-core";

export const typeDefs = gql`
    type User {
        firstName: String
        lastName: String
        userName: String
    }

    type LoginResponse {
        user: User
        token: String
    }

    type Query {
        test: String
    }
    type Mutation {
        register(firstName: String!, lastName: String!, userName: String!, password: String!, email: String!): User
        login(userName: String!, password: String!): LoginResponse
    }
`;
