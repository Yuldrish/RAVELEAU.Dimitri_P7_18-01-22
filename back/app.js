const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet");

require("dotenv").config();

const postRoutes = require("./routes/Post");
const userRoutes = require("./routes/User");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/posts", postRoutes);
app.use("/api/auth",  userRoutes);
app.use(helmet());
app.use(require('sanitize').middleware);

module.exports = app;
