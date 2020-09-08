const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    region: {
        type: String,
        required: true
    },
    founded: {
        type: String
    },
    currentLord: [{
        name: {
            type: String
        },
        series: {
            type: String
        }
    }],
});
schema.indexes();

module.exports = mongoose.model('House', schema);