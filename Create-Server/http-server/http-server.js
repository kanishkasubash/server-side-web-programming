/**
 * Create simple Server using Node.js 'http' module
 */
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Server Started");
});

server.listen(3000, "localhost", () => {
    console.log("Node JS now listening on localhost:3000")
});