const express = require('express');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const path = require('path');

const app = express();
mongoose.connect('put DB connection here');


app.use("/api/user", userRoutes);
app.use("api/posts", postRoutes);


module.exports = app;