// CommonJS: use require() to load the file system module
// to store the module, use a variable

// alternative: import { writeFileSync } from 'fs'

// Node call this module as 'fs'
// we can name the variable how we want, but it convetion to keep it the same way
// as how Node names it
const fs = require('fs');

// use the file system module to write some text content in a .txt file
fs.writeFileSync('notes.txt', 'My name is Yoshikage Kira.');

// use the appendFileSync() method to append some data to an existing text file
fs.appendFileSync('notes.txt', '\nI am 33 years old.');
fs.appendFileSync('notes.txt', '\nKiller Queen!.');