
const TaskModel = require("../models/TaskModel");

async function getAllTasks() {
    return await TaskModel.find();
};

module.exports = {
    getAllTasks,
};