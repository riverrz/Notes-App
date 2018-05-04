const fs=require("fs");

const fetchNote= ()=> {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (e) {
        return [];
    }
}

const saveNotes= (notes)=> {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    
}

let addNote = (title,body)=> {
    var notes=fetchNote();

    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note)=> note.title===title);
    
    if (duplicateNotes.length !==0) {
        console.log("A note with this title already exist, Please choose different title");   
    } else  {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}
let getNote =(title)=> {
    let notes = fetchNote();
    const note = notes.find((note) => note.title === title);
    return note;
}

let getAll=()=> {
    console.log("Showing all notes");
}
let removeNote= (title)=> {
    let notes = fetchNote();
    let filteredNotes = notes.filter((note) => note.title !== title);
    
    saveNotes(filteredNotes);
    return notes.length!==filteredNotes.length;
    
}
var logNote=(note)=> {
    debugger;
    console.log("------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports= {
    addNote,      // ES6 feature this means addNote:addNote
    getNote,
    getAll,
    removeNote,
    logNote
}