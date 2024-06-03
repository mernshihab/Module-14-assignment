const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;


const database_connection = async function(){
    try {
        const DB_Instance = await mongoose.connect(URI);
        console.log(`DB Connected`)
    } catch (error) {
        console.log(`DB connection failed`);
        process.exit(1)
    }
}

module.exports = database_connection;