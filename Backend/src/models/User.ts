import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;


const User = new Schema({
    name: String,
    authKey: String
});


mongoose.model('User', User);