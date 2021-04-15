const mongoose = require('mongoose');
const { Schema } = mongoose;

const workOuts = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: {
        type: String,
        trim: true,
        required: "Enter your workout type!"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter your workouts name!"
    },
    weight: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true,
    },
    reps: {
        type: Number,
        trim: true
    },
    duration: {
        type: Number,
        trim: true
    }
});
const Workout = mongoose.model("Workout", workOuts);

module.exports = Workout;