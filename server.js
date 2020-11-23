const express = require("express");
const mongooose = require("mongoose");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const db = require("./models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workouts",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    })

    
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});


var apiroutes = require("./routes/apiRoutes")
app.use(apiroutes)


// Starts Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});