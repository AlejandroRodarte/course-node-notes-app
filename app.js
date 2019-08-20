const chalk = require('chalk');
const getNotes = require('./notes');

// first command line argument: action
const command = process.argv[2];

console.log(process.argv);

switch (command) {

    // add a note action
    case 'add':
        console.log('Adding note...');
        break;
    
    // remove a note action
    case 'remove':
        console.log('Remove note...');
        break;
    
    // unrecognized action
    default:
        console.log('Action not recognized');
        break;

}