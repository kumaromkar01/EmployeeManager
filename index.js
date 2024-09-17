import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import EmployeeRoute from "./Routes/EmployeeRoutes.js";
import path from 'path';

const app = express();
dotenv.config();
const __dirname = path.resolve();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/employee", EmployeeRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(process.env.PORT,async ()=>{
   try {
    await mongoose.connect(process.env.DATABASE);
    console.log(`server is running ${process.env.PORT}`);
    console.log('MongoDb connected');
   } catch (error) {
      console.log('error connecting to database');
   }
})