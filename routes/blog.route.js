import {Router} from "express";
import { createComment } from "../controllers/comment.comtroller.js";
import { createPost, getPosts } from "../controllers/post.controller.js";
import { postLike, removeLike } from "../controllers/like.controller.js";
const router = Router()

router.route("/posts/create").post(createPost)
router.route("/posts/get").get(getPosts)
router.route("/comments/create").post(createComment)
router.route("/likes/create").post(postLike)
router.route("/likes/remove").post(removeLike)

export default router;