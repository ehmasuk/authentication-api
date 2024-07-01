const usersRoute = require("./routes/usersRoute");

const routes = (app) => {
    // homoe route
    app.get("/", (req, res, next) => {
        res.send("WELCOME");
    });

    // users route
    app.use("/users", usersRoute);
};

module.exports = routes;
