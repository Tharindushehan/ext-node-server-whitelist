const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlackListSchema = new Schema({
    hostname: {
        type: String,
        unique: true,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
})

module.exports = BlackList = mongoose.model('BlackList', BlackListSchema);