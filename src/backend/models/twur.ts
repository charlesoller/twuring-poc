import mongoose from "mongoose";
const Schema = mongoose.Schema

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    appearance: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String
    },
    posts: {
        type: Array
    }
}, { timestamps: true })

export const Twur = mongoose.model("Twur", postSchema)
