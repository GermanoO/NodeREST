//import express from "express";
let express = require('express');
let consign = require('consign');
//const PORT = 3000;

const app = express();


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
    .include("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

//app.listen(PORT, () => console.log(`NTask - API - porta ${PORT}`));