import express from "express";
import bodyParser from "body-parser";
import  mongoose  from "mongoose";
import cors from "cors"

import postRoutes from './routes/posts.js';


const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())

const CONNECTION_URL = "mongodb+srv://yubaneupane:yubaneupane123@cluster0.wx1qx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server Running at http://localhost:${PORT}`)
        })
    }).catch((ERR)=>{
        console.log(ERR.message)
    })


