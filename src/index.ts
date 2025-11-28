import app from "./app/app.js";

import env from "./config/env.js";

import http from "http";
import connectMongodb from "./db/connectDb.js";

const server = http.createServer(app);

// database connection
connectMongodb()
  .then(() => {
    // create server
    server.listen(env.PORT, () => {
      console.log("listening on port http://localhost:" + env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
