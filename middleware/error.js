const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    if (err.name === "CastError") {
        new errorResponse(
            `Bootcamp with id ${req.params.id} doesn't exist`,
            404
        );
    }

    res.status(500).json({
        success: false,
        message: err.message
    });
};

module.exports = errorHandler;
