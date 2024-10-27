const { MongoClient } = require("mongodb");

// controllers/LectureController.js
const LectureModel = require("../models/LectureModel");

async function getLectures(wantedLectureName) {
    try {
        const response = await LectureModel.find({
            lectureName: { $regex: wantedLectureName, $options: 'i' }
        });

        console.log("Response:", response);
        return response;
    } catch (error) {
        console.log("Грешка в сервиза..");
        console.log(error);
        throw new Error("Грешка при получаване на лекции");
    }
}

module.exports = {
    getLectures,
};

