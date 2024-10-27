
const app = require("express")();

const { getAllTasks } = require("../services/TaskService");

app.get("/all-tasks", async (req, res) => {
    const allTasks = await getAllTasks();
    return res.json({ allTasks });
});


module.exports = app;