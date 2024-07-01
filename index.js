const app = require("./app");
const { port } = require("./env");


// create server
app.listen(port, () => {
    console.log("listening on port http://localhost:" + port);
});
