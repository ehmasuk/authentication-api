const express = require("express");
const routes = require("./routes");
const errorHandler = require("./middlewares/responseHandler");
const connectMongodb = require("./db");
const middlewares = require("./middlewares");

const app = express();

// middlewares
middlewares(app);

// call routes
routes(app);

// errors hander
app.use((req, res, next) => {
    return errorHandler(res, { statusCode: 404, message: "Route not found" });
});

// database connection
connectMongodb();

module.exports = app;
