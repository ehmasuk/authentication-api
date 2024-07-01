const { jwtSecret } = require("../env");
const { errorHandler, successHandler } = require("../middlewares/responseHandler");
const usersModel = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendEmail = require("../middlewares/sendEmail");
const { welcomeEmailTemlet } = require("../views/emailTemplets");

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await usersModel.find({});
        if (allUsers) {
            return successHandler(res, { data: allUsers });
        } else {
            console.log("Cannot find all users");
        }
    } catch (error) {
        console.log(error);
        errorHandler(res, { statusCode: error.status, message: error.message });
    }
};

// register user
const registerUser = async (req, res, next) => {
    // check email already exists
    const emailExit = await usersModel.exists({ email: req.body.email });

    if (emailExit) {
        errorHandler(res, { message: "Email already exists" });
    } else {
        try {
            // create token for registered user
            const token = jwt.sign({ name: req.body.name, email: req.body.email }, jwtSecret, { expiresIn: "10m" });

            // hast users password
            const encodedPassword = await bcrypt.hash(req.body.password, 10);

            // users all information to store
            const userInfo = {
                name: req.body.name,
                email: req.body.email,
                password: encodedPassword,
            };

            // create user in model
            const newUser = await usersModel.create(userInfo);

            if (newUser) {
                // send success resposnse with token
                successHandler(res, { message: "User created successfully", data: { token } });

                // send welcome email
                sendEmail({
                    reciever: userInfo.email,
                    subject: "Welcome to eh masuks API",
                    html: welcomeEmailTemlet("Eh Masuk", userInfo.name),
                });
            } else {
                console.log("Cannot create user");
            }
        } catch (error) {
            console.log(error);
            errorHandler(res, { statusCode: error.status, message: error.message });
        }
    }
};

// login user
const loginUser = async (req, res, next) => {
    try {
        const user = await usersModel.findOne({ email: req.body.email }); // find users from users model

        const isValidPassword = bcrypt.compare(req.body.password, user.password); // check password is valid

        if (isValidPassword) {
            const token = jwt.sign({ name: user.name, email: user.email }, jwtSecret, { expiresIn: "1h" });
            successHandler(res, { message: "Authentication successful", data: { token } });
        } else {
            errorHandler(res, { message: "Authentication failed!" });
        }
    } catch (error) {
        console.log(error);
        errorHandler(res, { message: error.message });
    }
};

module.exports = { getAllUsers, registerUser, loginUser };
