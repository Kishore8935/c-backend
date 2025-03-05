import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})




/*import mongoose from "mongoose"
import {DB_NAME} from "./constants";

import express from "express"
const app = express()

  (async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_url}/${DB_NAME}`)
    }catch(error){
        console.error("ERROR:",error)
        throw err
    }
})()*/