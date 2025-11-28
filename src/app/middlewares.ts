import type { Application } from "express";

import cors from "cors";
import express from "express";

const middlewares = (app: Application) => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
};

export default middlewares;
