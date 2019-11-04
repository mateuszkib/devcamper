const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    if (err.name === "CastError") {
        const message = `Bootcamp with id ${err.value} doesn't exist`;
        error = new errorResponse(message, 404);
    }

    res.status(error.status || 500).json({
        success: false,
        message: error.message
    });
};

module.exports = errorHandler;
