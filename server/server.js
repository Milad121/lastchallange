const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
var controller = require('./controller/home');
var login = require('./controller/login');
var loginpost = require('./controller/auth');
const session = require('express-session');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
var app = express();
app.use(cors())
app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/last?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4', {
    useNewUrlParser: true, useUnifiedTopology: true,
})
    .then(() => {
        console.log('DB is connected')
    })
    .catch(err => {
        console.log(err)
    })
app.use(require("./routes/question"));
// get driver connection
app.post('/auth', loginpost.login)
app.post('/regauth', loginpost.register)
app.listen(port);
console.log(`Server is running on port: ${port}`);
