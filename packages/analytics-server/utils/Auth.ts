import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-errors';

//TODO: Get from environment variable
const secret = "mysecret";
const expiration = '2h'

//@ts-ignore
export const signToken = ({email, username, _id}) => {
    const payload = {email, username, _id};
    return jwt.sign({data: payload}, secret, {expiresIn: expiration})
}

//@ts-ignore
export const authenticate = async (auth) => {
    if(!auth) throw new AuthenticationError("You must be logged in");

    const token = auth.split('Bearer ')[1];
    if(!token) throw new AuthenticationError("Please provide a JWT token");

    //@ts-ignore
    return await jwt.verify(token, secret, (err, decoded) => {
        if(err) throw new AuthenticationError("Invalid Token");
        return decoded.data;
    });
}