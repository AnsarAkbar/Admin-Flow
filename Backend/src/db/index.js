import mongoose from 'mongoose'
import { DB_NAME } from '../contance.js'
import dotenv from 'dotenv'
dotenv.config()

export const dbConnect=async()=>{
    try {
       await mongoose.connect(`${process.env.BD_URI}/${DB_NAME}`)
       .then(()=>console.log('DB connected successfully...!'))
       .catch(error=>console.log('DB connection failed...!',error))
    } catch (error) {
        console.log(error.message)
    }
}