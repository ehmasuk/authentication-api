import type { Response } from "express";

const successHandler = (res: Response, { statusCode = 200, message = "Success", data = {} }) => {
  return res.status(statusCode).json({
    status: true,
    message,
    data,
  });
};

export { successHandler };
