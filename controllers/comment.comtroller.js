import { Comment } from "../models/comment.model.js";
import { Post } from "../models/post.model.js";

async function createComment(req, res) {
    try {
        const {post, user,content} = req.body;

        const savedComment = await Comment.create({
            post,
            user,
            content
        });

        const postDB = await Post.findByIdAndUpdate(
            { _id: post },
            {$push: {comments: savedComment._id}},
            {new: true}
        )
        // .populate("comments").exec()
        return res.status(200).json({
            message: "Comment added successfully",
            data: postDB,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "error in creating comment",
            data: null,
            success: false
        })
    }
}

export {createComment}