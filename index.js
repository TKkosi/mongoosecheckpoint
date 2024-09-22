import dotenv from 'dotenv'
import connectDB from './db.js'
import express from 'express'
dotenv.config()
const app = express()
connectDB()
