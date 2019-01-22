const config = require('config.json');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.DB);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Task: require('../tasks/task.model'),
};