import { saveNote, dispatchStateChangeEvent } from './NoteProvider.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

const eventHub = document.querySelector('.container')

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 
        today = yyyy+'-'+dd+'-'+mm;

        // Make a new object representation of a note
        if(document.getElementById('form-criminal').value !== "0"){
            const newNote = {
                "date": today,
                "crimnal": document.getElementById('form-criminal').value,
                "note": document.getElementById('form-note').value
            }
            // Change API state and application state
            saveNote(newNote)
            .then(_ =>{
                dispatchStateChangeEvent(newNote)
            })
    
            document.getElementById('form-criminal').value = ""
            document.getElementById('form-note').value = ""
        }
        else{
            window.alert("choose a suspect");
        }
       
    }
})

const contentTarget = document.querySelector(".noteFormContainer")

const render = (criminalArray) => {
    contentTarget.innerHTML += `
        <form>
            <select class="dropdown" id="form-criminal">
                <option value="0">Please select a criminal...</option>
                ${criminalArray.map(criminal => {
                    return `
                        <option value="${criminal.name}">${criminal.name}</option>
                    `
                }).sort().join("")}
            </select><br><br>
            <label for="note">Note:</label>
            <textarea id="form-note" name="note" placeholder="Enter note here..."></textarea><br><br>
        </form>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals()
    .then(_ => {
        const criminalArray = useCriminals();
        render(criminalArray)
    })
}