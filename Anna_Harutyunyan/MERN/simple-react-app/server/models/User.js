const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    link: {type: String, required: true},
});

schema.set('toJSON', {
    virtuals: true
});

module.exports = model('User', schema);