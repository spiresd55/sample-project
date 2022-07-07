import { User, UserSchema } from "../../db";

export const resolvers = {
    Query: {
        test: () => {
            return 'test';
        }
    },
    //TODO: Add Datasources To Context
    //TODO: Add Error Handler
    Mutation: {
        //@ts-ignore
        register: async (_: unknown, {firstName, lastName, password, userName}) => {
            return await User.create({
                firstName,
                lastName,
                password,
                userName
            });
        }
    }
};