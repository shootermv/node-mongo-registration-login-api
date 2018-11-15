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


async function create(summary) {
    const task = new Task({summary, status:0});
    await task.save();
}


async function _delete(id) {
    await Task.findByIdAndRemove(id);
}