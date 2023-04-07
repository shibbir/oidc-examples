const express = require("express");

require("dotenv").config();

const app = express();

app.set("port", process.env.PORT);
app.use(express.static(`${__dirname}/public`));

app.get("/", function (req, res) {
    res.sendFile("index.html");
});

require("./facebook")(app);
require("./github")(app);
require("./google")(app);
require("./okta")(app);

module.exports = app;