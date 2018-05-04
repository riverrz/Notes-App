const fs=require("fs");

let addNote = (title,body)=> {
    var notes=[];
    var note = {
        title,
        body
    };
    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch(e) {
    }
    var duplicateNotes = notes.filter((note)=> note.title===title);
    
    if (duplicateNotes.length !==0) {
        console.log("A note with this title already exist, Please choose different title");   
    } else  {
        notes.push(note);
        console.log("Your log has been successfully saved");
        
    }
    
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
let getNote =(title)=> {
    console.log("Getting the notes", title);
}

let getAll=()=> {
    console.log("Showing all notes");
}
let removeNote= (title)=> {
    console.log("Removing note with title: ",title);
    
}


module.exports= {
    addNote,      // ES6 feature this means addNote:addNote
    getNote,
    getAll,
    removeNote
}