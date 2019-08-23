const mongoose = require('mongoose');
var validate = require('mongoose-validator');


const userSchema = new mongoose.Schema({
    // FORM 1
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
    },
    // FORM 2
    gender: {type: String, enum: ['Male', 'Female', 'Other', 'Prefer not to say']},
    race: {type: String, enum: ['African American', 'Asian', 'Hispanic/Latino', 'Caucasian', 'Middle Eastern', 'Two or More Races; Other', 'Prefer not to say']},
    language: String,
    veteran: Boolean,
    healthcare: {type: String, enum: ['Yes', 'No', 'Unsure']},
    vehicleType: {type: String, enum: ['Compact', 'SUV', 'Truck', 'RV']},
    people: {type: Number, max: 6},
    pets: {type: Number, max: 10},
    currParking: {
        street: String,
        city: String,
        zip: String,
        other: String
    },
    neighborhood: {
        desired: String,
        factors: {
            work: Boolean,
            school: Boolean,
            family: Boolean,
            other: String
        }
    }

});

module.exports = mongoose.model('User', userSchema);