import express from 'express';

const router = express.Router();

import auth from "../middleware/auth.js";

import { getPost, createPost, updatePost } from "../controllers/posts.js";

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router