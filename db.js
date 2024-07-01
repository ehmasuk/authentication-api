const mongoose = require("mongoose");
const { databaseName, clusterUrl } = require("./env");

const connectMongodb = async () => {
    try {
        const connect = await mongoose.connect(clusterUrl, { dbName: databaseName });
        if (connect) {
            console.log("Database connection established");
        } else {
            console.log("Cannot connect database");
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectMongodb;
