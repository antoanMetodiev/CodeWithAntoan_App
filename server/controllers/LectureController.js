const app = require("express")();

const { getLectures } = require("../services/LectureService");

app.post("/search-lectures", async (req, res) => {
    const { wantedLectures } = req.body;

    try {
        const serviceResponse = await getLectures(wantedLectures);
        return res.json({ serviceResponse });
    } catch (error) {
        console.log(error);
    }
});



module.exports = app;