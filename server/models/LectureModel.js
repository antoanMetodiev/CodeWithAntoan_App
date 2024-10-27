const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
    lectureName: {
        type: String,
        required: true,
    },
    URL: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const LectureModel = mongoose.model("lectures", LectureSchema);

module.exports = LectureModel;