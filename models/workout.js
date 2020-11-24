const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutschema = new Schema({
    exercises: [
        {
            exerciseType: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            sets: {
                type: Number,
                required: true
            },
            reps: {
                type: Number,
                required: true
            },
            duration: {
                type: Number,
                required: true
            }
        }
    ]
})

const workout = mongoose.model("workout", workoutschema);

module.exports = workout;