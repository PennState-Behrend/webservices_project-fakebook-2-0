import express from 'express';

const router = express.Router();

import auth from "../middleware/auth.js";

import {
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router