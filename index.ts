// Cấu hình dự an:
//  npm init
//  npm i -D typescript tsc tsc-watch rimraf @types/express
//  npm i express body-parser multer ejs mongoose validator
//  npm install @types/mongoose --save-dev
//  npm i bcrypt

import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import router from "./src/router/router";



const PORT = 3000;

const app = express();

// app.set("view engine", "ejs");
//
// app.set('views', './src/views');

const DB_URL = 'mongodb://127.0.0.1:27017/test1';

mongoose.connect(DB_URL)

    .then(() => console.log('DB Connected!'))

    .catch(error => console.log('DB connection error:', error.message));

app.use(bodyParser.json());



//những API gọi tới URL /api sẽ được chuyển tới router.
app.use("/api", router);


app.listen(PORT, () => {

    console.log("Server is running on http://localhost:3000/api/user/register");

})
//npm run start:dev