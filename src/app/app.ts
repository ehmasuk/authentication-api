import type { NextFunction, Request, Response } from "express";
import express from "express";
import type { CustomErrorType } from "../types.js";
import middlewares from "./middlewares.js";
import routes from "./routes.js";

const app = express();

// middlewares
middlewares(app);

// call routes
routes(app);

// Not found handler
app.use((_req, _res, next: NextFunction) => {
  const error: CustomErrorType = new Error("Route not Found");
  error.status = 404;
  next(error);
});

// Error handler

app.use((err: CustomErrorType, req: Request, res: Response, next: NextFunction) => {
  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: "Internal Server Error",
  });
});

export default app;
