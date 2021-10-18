import express from 'express';

const router = express.Router();

import {getPost, makePost} from '../controllers/posts.js'

router.get("/", getPost)
router.post("/", makePost)

export default router