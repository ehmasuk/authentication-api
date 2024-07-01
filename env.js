require("dotenv").config();

const port = process.env.PORT || 8080;

const databaseName = process.env.DATABASE_NAME;

const clusterUrl = process.env.CLUSTER_URL;

const jwtSecret = process.env.JWT_SECRET


const smtpUsername = process.env.SMTP_USERNAME;

const smtpPassword = process.env.SMTP_PASSWORD

module.exports = { port, databaseName, clusterUrl, jwtSecret, smtpUsername, smtpPassword };
