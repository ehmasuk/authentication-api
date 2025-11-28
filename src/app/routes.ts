import type { Application } from "express";
import usersRoute from "../routes/usersRoute.js";

const routes = (app: Application) => {
  // homoe route
  app.get("/", (_req, res, _next) => {
    return res.send("WELCOME");
  });

  // users route
  app.use("/users", usersRoute);
};

export default routes;
