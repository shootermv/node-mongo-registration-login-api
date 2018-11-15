const express = require('express');
const router = express.Router();
const taskService = require('./task.service');


router.get('/tasks', getAll);
router.post('/create', createTask);
router.delete('/:id', _delete);

module.exports = router;



function getAll(req, res, next) {
    taskService.getAll()
        .then(tasks => res.json(tasks))
        .catch(err => next(err));
}

function createTask(req, res, next) {
    taskService.create(req.params.summary)
        .then(tasks => res.json(tasks))
        .catch(err => next(err));
}


function _delete(req, res, next) {
    taskService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}