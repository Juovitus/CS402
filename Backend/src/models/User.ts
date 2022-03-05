import mongoose from 'mongoose';
import { model, Schema, Model, Mongoose } from 'mongoose';

export { User };

interface User {
    name: string;
    authKey: string;
}


const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    authKey: { type: String, required: true },
});

const User: Model<User> = model<User>('User', UserSchema);

module.exports = { User };
