import { Post } from "../models/post.model.js";

async function createPost(req, res) {
    try {
        const {title, content} = req.body;

        const post = await Post.create({
            title,
            content
        })
        return res.status(200).json({
            message: "Post created Successfully",
            data: post,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "error in creating post",
            data: null,
            success: false
        })
    }
}
async function getPosts(req, res) {
    try {
        const getData = await Post.find().populate("comments").populate("likes").exec();
        if(!getData){
            return res.status(200).json({
                message: "No Posts Found!!",
                data: [],
                success: true
            })
        }
        else{
            return res.status(200).json({
                message: "Fetched All Posts",
                data: getData,
                success: true
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "error in fetching posts",
            data: null,
            success: false
        })
    }
}
export {createPost, getPosts}