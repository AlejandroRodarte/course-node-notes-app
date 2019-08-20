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

// builder: setup arguments required for the command to work

// 1. title (typed as --title on the command line)
// a description is needed
// demandOption: makes this argument required for the command to work
// type: demands to pass a string as an expression for this argument

// 2. body: the note's body, configured the same way as the 'title' argument
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title, body }) => {
        // handler: log the contents
        console.log(`Title: ${title}\nBody: ${body}`);
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

// yargs.parse() required since it goes through all the parsing process
// and is needed for the general app to work
yargs.parse();