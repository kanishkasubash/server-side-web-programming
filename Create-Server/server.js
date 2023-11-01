/**
 * Create Express Server
 * localhost:3000
 */
const express = require("express");
const db = require("./database");
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});

/* HTTP GET Method*/
app.get("/api/products", (req, res, next) => {
    // Code to retrive data
    
});

/* HTTP POST Method*/
app.post("/api/products", (req, res, next) => {
    // Code to insert data
    
});