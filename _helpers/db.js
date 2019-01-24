const config = require('config.json');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.DB, (err) => {
    if (err) {
      console.log(`MONGO CONNECTION ERROR: ${err}`)  
      throw err;
    } else {
      console.log(`MONGO is connected`);
    }
});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Task: require('../tasks/task.model'),
};