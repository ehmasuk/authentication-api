const errorHandler = (res, { statusCode = 500, message = "Server error" }) => {
    return res.status(statusCode).json({
        status: false,
        message,
    });
};
const successHandler = (res, { statusCode = 200, message = "Success", data = {} }) => {
    return res.status(statusCode).json({
        status: true,
        message,
        data,
    });
};

module.exports = { errorHandler, successHandler };
