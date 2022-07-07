import { AuthenticationError } from "apollo-server-errors";
import { User, UserSchema } from "../../db";
import { signToken } from "../../utils/Auth";

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
        register: async (_: unknown, {firstName, lastName, password, userName, email}) => {
            return await User.create({
                firstName,
                lastName,
                password,
                userName,
                email
            });
        },
        //@ts-ignore
        login: async (_: unknown, {userName, password}) => {
            const user = await User.findOne({ userName});

            if(!user) {
                throw new AuthenticationError("User Does Not Exist");
            }

            //@ts-ignore
            if(!await user.isCorrectPassword(password)) {
                throw new AuthenticationError("Password is not correct");
            }

            //@ts-ignore
            const token = signToken(user);

            return {token, user};
        }
    }
};