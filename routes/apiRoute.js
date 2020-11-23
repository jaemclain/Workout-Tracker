var router = require("express").Router()
var db = require("../models/workout")

router.post("/api/Workout", function (req, res) {
    console.log(req.body)
    db.create(req.body).then(function (dbrecord) {
        console.log(dbrecord)
        res.json(dbrecord)
    });
});


router.get("/api/getWorkout", (req, res) => {
    db.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
          console.log("GET",data)
        res.json(data);
      }
    });
  });


  router.put("/api/updateworkout/:id", (req, res) => {
    console.log(req.body,req.params.id)
  db.findByIdAndUpdate(req.params.id,{$push:{excercises:req.body}},{new:true}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
        console.log("PUT",data)
      res.json(data);
    }
  });
});

module.exports = router 