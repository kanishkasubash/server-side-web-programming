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
app.get("/", (req, res) => {
    // Code to retrive data
    res.send("Hello World!");
});

/* HTTP POST Method*/
app.post("/", (req, res) => {
    // Code to insert data
    res.send("Posting Some Data");
});

/* HTTP PUT Method*/
app.put("/", (req, res) => {
    // Code to update data
    res.send("Updating Some Data");
});

/* HTTP DELETE Method*/
app.delete("/", (req, res) => {
    // Code to delete data
    res.send("Deleting Some Data");
});
