const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// customize the yargs version of your command actions
yargs.version('1.1.0');

// commands register process:
// 1. write the name of the command
// 2. write a description for that command
// 3. setup a handler method when that command is invoked

// create the 'add' command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding a new note...');
    }
});

// create the 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing a note...');
    }
});

// create the 'list' command
yargs.command({
    command: 'list',
    describe: 'List all current notes',
    handler: () => {
        console.log('Listing all notes...');
    }
});

// create the 'red' command
yargs.command({
    command: 'read',
    describe: 'Read a particular note',
    handler: () => {
        console.log('Displaying the note...');
    }
});

console.log(yargs.argv);