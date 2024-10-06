import { Post } from "../models/post.model.js";
import { Like } from "../models/like.model.js";

async function postLike(req, res) {
    try {
        const {post, user} = req.body;

        const newLike = await Like.create({
            post,
            user
        });
        const likedPost = await Post.findByIdAndUpdate(
            post,
            {$push: {likes: newLike._id}},
            {new: true}
        )
        return res.status(200).json({
            message: "Like added successfully",
            data: likedPost,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in adding like",
            data: null,
            success: false
        })
    }
}

async function removeLike(req, res) {
    try {
        const {post, like} = req.body;
        const deletedLike = await Like.findByIdAndDelete(like);

        const updatedPost = await Post.findByIdAndUpdate(
            post,
            {$pull: {likes: like}},
            {new:true}
        )

        return res.status(200).json({
            message: "Like removed successfully",
            data: updatedPost,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in removing like",
            data: null,
            success: false
        })
    }
}

export {postLike, removeLike}