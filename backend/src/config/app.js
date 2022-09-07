const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const router = require("../routes");
const dbConnection = require("./dbConnection");

dbConnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
