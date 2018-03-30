const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: {required: true, type: String},
    message: {required: true, type: String}
})

module.exports = mongoose.model('Posts', PostSchema);