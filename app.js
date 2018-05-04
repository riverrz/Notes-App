const fs=require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");


const argv = yargs.argv;


const command = argv._[0];

if (command === "add") {
  var note=notes.addNote(argv.title,argv.body); 
  if (note) {
    console.log("Your note was created: ",note.title,note.body);
  } else {
    console.log("Your note couldn't be created");
  }
} else if (command === "list") {
    notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Command not recognized");
}