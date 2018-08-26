// Save notes in localStorage
function saveNotes() {
    let noteContent = document.getElementById("notes").value;
    localStorage.setItem("note", noteContent);
}

// Check if the note exists in the localStorage
function checkNotes() {
    let noteContent = localStorage.getItem("note");
    if (noteContent) { 
        console.log("Note Exists");
        document.getElementById("notes").value = noteContent;
    }
    else {
        document.getElementById("notes").placeholder = "Take a note...";
    }
}

// When pageloads, keep saving note every half seconds
window.onload = function () {
    checkNotes();
    setInterval(saveNotes, 500);
}