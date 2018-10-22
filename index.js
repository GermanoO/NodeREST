//import express from "express";
let express = require('express');
let consign = require('consign');
//const PORT = 3000;
bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


//app.get("/", (req, res) => res.json({status: "NTask API"}));

// app.get("/tasks", (req, res) => {
//     res.json({
//         tasks: [
//             { title: "lavar o capacete vermelho" },
//             { title: "arrumar a estante de livros" }
//         ]
//     });
// });

consign()
    .include("libs/config.js")
    .then("db.js")
    //.then("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

//app.listen(PORT, () => console.log(`NTask - API - porta ${PORT}`));