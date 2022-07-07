import mongoose from 'mongoose';
export * from './models';

export const connect = async () => {
    //TODO: Put this behind an environment variable
    await mongoose.connect('mongodb://localhost:27017/analytics');
}