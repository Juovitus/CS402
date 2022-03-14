import mongoose from 'mongoose';
import { model, Schema, Model, Mongoose } from 'mongoose';



const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    authKey: { type: String, required: true },
});

export interface User {
    name: string;
    authKey: string;
}

// const User: Model<User> = model<User>('User', UserSchema);

export default model<User>("User", UserSchema);

export const User = mongoose.model("User", UserSchema);