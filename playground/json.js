// var obj= {
//     name:"Shivam",
//     val: [1,2,3]
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof(stringObj));

// console.log(stringObj);

// var string = '{"name": "Shivam", "age": 25}';
// var jsobj = JSON.parse(string);
// console.log(typeof(jsobj));

// console.log(jsobj);

const fs = require("fs");

let originalNote= {
    title: "Some title",
    body: "Some body"
}

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json",originalNoteString);

let noteString = fs.readFileSync('notes.json');

let retrievedString = JSON.parse(noteString);
console.log(typeof(retrievedString));

console.log(retrievedString);

