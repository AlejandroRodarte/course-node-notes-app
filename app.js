// import the validator npm package found in node_modules folder
const validator = require('validator');

// log the result of isEmail() method which comes from the validator package
console.log(validator.isEmail('alejandrorodarte1@gmail.com'));

// now use the isUrl() method
console.log(validator.isURL('https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/lecture/13728848#questions/7549326'));

// import the getNotes method from the notes.js file
const getNotes = require('./notes');