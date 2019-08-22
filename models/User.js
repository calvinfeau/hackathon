const mongoose = require('mongoose');
var validate = require('mongoose-validator');


const userSchema = new mongoose.Schema({
    applicant: {
        type: String,
        required: true
    },
    birth: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    driverId: {
        type: String,
    },
    driverStatus: {
        type: String,
        required: true,
        enum: ['Valid', 'Expired', 'Suspended', 'Lost or Stolen']
    },
    drivable: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);