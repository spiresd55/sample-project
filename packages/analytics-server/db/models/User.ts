import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    //TODO: Add A Salt
    password: String,
    //TODO: Make this unique
    userName: String,
});

export const User = mongoose.model('User', UserSchema);