import app from "./app/app.js";

import env from "./config/env.js";

import http from "http";
import connectMongodb from "./db/connectDb.js";

const server = http.createServer(app);

const port = env.PORT || 8080;

// database connection
connectMongodb()
  .then(() => {
    // create server
    server.listen(port, () => {
      console.log("listening on port http://localhost:" + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
