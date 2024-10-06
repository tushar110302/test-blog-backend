import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    user:{
        type: String,
        required: true
    },
}, {timestamps:true})

export const Like = mongoose.model("Like",LikeSchema);