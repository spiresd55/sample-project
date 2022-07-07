import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const UserSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
        minLength: 5, //TODO: Add stronger password enforcement
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must Match An Email Address']
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
});

UserSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        //TODO: Store this in a environment variable
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

UserSchema.methods.isCorrectPassword = async function(password: string) {
    return bcrypt.compare(password, this.password)
}

export const User = mongoose.model('User', UserSchema);