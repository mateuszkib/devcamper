const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    if(conn) {
        console.log(`Database connect to host ${conn.connection.host}`);
    }
}

module.exports = connectDB;