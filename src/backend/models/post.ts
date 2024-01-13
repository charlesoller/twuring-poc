import mongoose from "mongoose";
const Schema = mongoose.Schema

const postSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    text: {
        type: String,
    },
    prompt: {
        type: String
    },
    image_url: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array
    }
}, { timestamps: true })

export const Post = mongoose.model("Post", postSchema)
