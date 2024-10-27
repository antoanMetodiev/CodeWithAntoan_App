const app = require("express")();

// Взимане:
const LectureController = require("./controllers/LectureController"); 
const TaskController = require("./controllers/TaskController");

// Използване:
app.use(LectureController);
app.use(TaskController);

app.get("/my-name", (req, res) => {
    res.send("ANTOAN");
});

module.exports = app;