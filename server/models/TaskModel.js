const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc_ANG: {
        type: String,
        required: true,
    },
    desc_BG: {
        type: String,
        required: true,
    },
    tests: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    totalAttempts: {
        type: String,
        required: true,
    },
    totalCompleted: {
        type: String,
        required: true,
    },
    publish_date: {
        type: String,
        required: true,
    },
});

const TaskModel = mongoose.model("tasks", TaskSchema);

module.exports = TaskModel;
