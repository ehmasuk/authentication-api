import bcrypt from "bcrypt";
import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env.js";
import { successHandler } from "../middlewares/responseHandler.js";
import sendEmail from "../middlewares/sendEmail.js";
import usersModel, { type UserType } from "../models/usersModel.js";
import type { CustomErrorType } from "../types.js";
import { welcomeEmailTemlet } from "../views/emailTemplets.js";

export const getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers: UserType[] = await usersModel.find({});
    if (allUsers) {
      return successHandler(res, { data: allUsers });
    } else {
      console.log("Cannot find all users");
    }
  } catch (error) {
    next(error);
  }
};

// register user
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // check if email exists
    const emailExit = await usersModel.exists({ email: req.body.email });

    if (emailExit) {
      const error: CustomErrorType = new Error("Email already exist");
      error.status = 409;
      next(error);
    }

    // create token for registered user
    const token = jwt.sign({ name: req.body.name, email: req.body.email }, env.JWT_SECRET, { expiresIn: "10m" });

    // hash password
    const encodedPassword = await bcrypt.hash(req.body.password, 10);

    // users all information
    const userInfo = {
      name: req.body.name,
      email: req.body.email,
      password: encodedPassword,
    };

    // create user in model
    const newUser = await usersModel.create(userInfo);

    if (newUser) {
      successHandler(res, {
        message: "User created successfully",
        data: { token },
      });

      // send welcome email
      sendEmail({
        reciever: userInfo.email,
        subject: "Welcome to eh masuks API",
        html: welcomeEmailTemlet("Eh Masuk", userInfo.name),
      });
    } else {
      console.log("Cannot create user");
    }
  } catch (error: any) {
    next(error);
  }
};

// login user
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: UserType | null = await usersModel.findOne({ email: req.body.email });

    if (!user) {
      const error: CustomErrorType = new Error("User not found");
      error.status = 404;
      return next(error);
    }

    // check password is valid
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);

    if (!isValidPassword) {
      const error: CustomErrorType = new Error("Authentication failed");
      error.status = 402;
      return next(error);
    }

    const token = jwt.sign({ name: user.name, email: user.email }, env.JWT_SECRET, { expiresIn: "1h" });

    successHandler(res, {
      message: "Authentication successful",
      data: { token },
    });
  } catch (error) {
    return next(error);
  }
};
