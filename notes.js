const fs=require("fs");

const fetchNotes= ()=> {
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
    var notes=fetchNotes();

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
    let notes = fetchNotes();
    const note = notes.find((note) => note.title === title);
    return note;
}

let getAll=()=> {
    const notes = fetchNotes();
    console.log(`Printing ${notes.length} note(s)`);
    notes.forEach((note) => logNote(note));
    
}
let removeNote= (title)=> {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    
    saveNotes(filteredNotes);
    return notes.length!==filteredNotes.length;
    
}
var logNote=(note)=> {
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