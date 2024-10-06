import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
}, {timestamps:true})

export const Post = mongoose.model("Post",PostSchema);