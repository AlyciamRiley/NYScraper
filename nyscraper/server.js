//Require Node Modules

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");


//initialize Express for debugging & body parsing
const app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

//Serve Static Content
app.use(express.static(process.cwd() +  "/public"));



// Database Configuration  with Mongoose
const MONGODB_URI = 
    process.env.MONGODB_URI || "mongodb://localhost/nyscrape";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {

});

const db = mongoose.connection;

db.once('open', function() {
    console.log('Mongoose connection successful.');
});

//Launch app
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log("Running on port: " + port)
})