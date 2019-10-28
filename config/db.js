const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    if(conn) {
        console.log(`Database connect to host ${conn.connection.host}`);
    }
}

module.exports = connectDB;