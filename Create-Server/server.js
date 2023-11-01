/**
 * Create Express Server
 * localhost:8000
 */
const express = require("express");
const db = require("./database");
const app = express();

const cors = require("cors");
app.use(
    cors({
        exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
        credentials: true,
        origin: "*"
    })
);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});

/* HTTP GET Method*/
app.get("/api/products", (req, res, next) => {
    // Code to retrive data
    try {
        const sql = "SELECT * FROM products";
        const params = [];
        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({
                    error: err.message
                });
                return;
            }
            res.status(200).json({
                message: "success",
                data: rows,
            });
        });
    } catch (e) {
        res.status(400).send(e);
    }
});

/* HTTP POST Method*/
app.post("/api/products", (req, res, next) => {
    // Code to insert data

});