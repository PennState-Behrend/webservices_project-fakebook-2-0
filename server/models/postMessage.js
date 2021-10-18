import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    body:String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    commentCount:{
        type: Number,
        default: 0
    }
})