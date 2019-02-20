const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateOrderInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.date = !isEmpty(data.date) ? data.date : '';
    data.time = !isEmpty(data.time) ? data.time : '';
    data.person = !isEmpty(data.person) ? data.person : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }

    if (Validator.isEmpty(data.phone)) {
        errors.phone = 'Phone number is required';
    }

    if (Validator.isEmpty(data.date)) {
        errors.date = 'Date is required';
    }

    //Checking if it is past new Date()
    var date1 = new Date();
    date1.setDate(date1.getDate() - 1);


    if (Validator.isAfter(date1.toString(), data.date)) {

        errors.date = 'Date is required';
    }


    if (Validator.isEmpty(data.time)) {

        errors.time = 'Time is required';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
};
