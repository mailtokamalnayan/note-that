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
        document.getElementById("notes").placeholder = "Whenever you're ready...";
    }
}

function timeLeft() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    var percentageOver = Math.ceil((day / 366)*100);
    // console.log('Day of year: ' + day);
    // console.log(percentageOver + '%');
    document.getElementById('progressBar').setAttribute("style","width:" + percentageOver + "%;");
    document.getElementById('percentageLeft').innerText = percentageOver + "%";
}

// When pageloads, keep saving note every half seconds
window.onload = function () {
    checkNotes();
    setInterval(saveNotes, 500);
    timeLeft();
}