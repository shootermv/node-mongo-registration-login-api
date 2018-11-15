const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    summary: { type: String, unique: true, required: true },
    status: { type: Number, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Task', schema);