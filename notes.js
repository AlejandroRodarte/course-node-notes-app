const fs = require('fs');
const chalk = require('chalk');

// method to export
const getNotes = () => {
    return 'Your notes...';
}

// add a note
const addNote = (title, body) => {

    // get the notes array
    const notes = loadNotes();

    // attempt to find a duplicate note by checking their titles
    const foundNote = notes.find((note) => {
        return note.title === title;
    });

    // if note did not exist
    if (foundNote === undefined) {

        // push the new note
        notes.push({
            title,
            body
        });
    
        // save the new array to the storing file
        saveNotes(notes);

        console.log(chalk.green('Note added...'));

    } else {
        // if note existed already, throw a log message and do not add note
        console.log(chalk.red('Note already exists...'));
    }

}

// save notes to file: stringify and store
const saveNotes = (notes) => {
    const string = JSON.stringify(notes);
    fs.writeFileSync('notes.json', string);
}

// fetch the notes from the notes.json file and parse them to JSON
const loadNotes = () => {

    // try to fetch data; if file does not exist, return an empty array
    try {
        const buffer = fs.readFileSync('notes.json');
        return JSON.parse(buffer.toString());
    } catch (e) {
        return [];
    }

}

// remove a note based on title
const removeNote = (title) => {

    // get notes
    const notes = loadNotes();

    // filter out the note that matches the title (if exists)
    const duplicateNotes = notes.filter((note) => {
        return title !== note.title;
    });

    // log message to user if task was successful or not
    if (notes.length === duplicateNotes.length) {
        console.log(chalk.red('Note did not exist...'));
    } else {

        console.log(chalk.green('Note removed...'));

        // save the new altered notes array
        saveNotes(duplicateNotes);
        
    }

}

// use module.exports to export getNotes
module.exports = {
    getNotes,
    addNote,
    removeNote
};