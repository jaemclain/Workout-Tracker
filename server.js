const express = require("express");
const mongoose = require("mongoose");
// const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workouts",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    })

    
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});


var apiroutes = require("./routes/apiroutes.js")
app.use(apiroutes)


// Starts Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});