const express = require("express")
const app = express();
const port = process.env.port || 9000;
const queries = require("./queries");

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

app.get("/", (request, response) => {
    queries.getAll().then(results => response.send(results));
});