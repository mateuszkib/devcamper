const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const app = express();

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to Database
connectDB();

// Route files
const bootcamps = require("./routes/bootcamps");

// Body parser
app.use(express.json());

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
    )
);

process.on("unhandledRejection", (err, promise) => {
    console.error(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});
