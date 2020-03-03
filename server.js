// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Import our routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// Initialize the app
const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({extended :false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB through mongoose
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected Successfully!!! "))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Port
const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Server listening on port ${port}`));