console.log('utils.js');

// utils.js name variable
const name = 'Alejandro';

// the method to export
const add = function(a, b) {
    return a + b;
}

// module.exports allows us to export variables/functions for other files to use
module.exports = add;