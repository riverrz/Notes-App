const fs=require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");


const argv = yargs.argv;


const command = argv._[0];

if (command === "add") {
  var note=notes.addNote(argv.title,argv.body); 
  if (note) {
    console.log("Your note was created: ");
    console.log("--------");
    console.log("Title: ",note.title);
    console.log("Body: ",note.body);
    
  } else {
    console.log("Your note couldn't be created");
  }
} else if (command === "list") {
    notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  let res=notes.removeNote(argv.title);

  let message=res ? "Successfully removed the note" : "The provided title doesn't match with any existing note's title";
  console.log(message);
  
} else {
  console.log("Command not recognized");
}