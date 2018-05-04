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
    console.log("Getting the notes", title);
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


module.exports= {
    addNote,      // ES6 feature this means addNote:addNote
    getNote,
    getAll,
    removeNote
}