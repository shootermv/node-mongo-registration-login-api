const config = require('config.json');
const db = require('_helpers/db');
const Task = db.Task;

module.exports = {
    getAll,
    create,
    delete: _delete
};



async function getAll() {
    return await Task.find();
}


async function create(task) {
    const newtask = new Task({summary: task.summary, status:0});
    await newtask.save();
}


async function _delete(id) {
    await Task.findByIdAndRemove(id);
}