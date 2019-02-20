const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    },
    time: {
        type: String,
        require: true,
        default: Date.now
    },
    person: {
        type: Number,
        require: true,
        default: 1
    }

})
module.exports = Order = mongoose.model('orders', OrderSchema);