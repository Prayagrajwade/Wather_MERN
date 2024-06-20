import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import weatherRoutes from "./routes/weatherRoutes.js";
import bodyParser from 'body-parser';
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT|| 5000

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/weather',weatherRoutes);

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
})
