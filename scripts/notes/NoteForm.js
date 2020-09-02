import { saveNote } from './NoteProvider.js'

const eventHub = document.querySelector('.container')

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            "date": document.getElementById('form-date').value,
            "crimnal": document.getElementById('form-criminal').value,
            "note": document.getElementById('form-note').value
        }
        // Change API state and application state
        saveNote(newNote)

        document.getElementById('form-date').value = ""
        document.getElementById('form-criminal').value = ""
        document.getElementById('form-note').value = ""
    }
})

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <form>
            <label for="criminal">Criminal:</label>
            <input type="text" id="form-criminal" name="criminal"><br><br>
            <label for="date">Date:</label>
            <input type="date" id="form-date" name="date"><br><br>
            <label for="note">Note:</label>
            <input type="text" id="form-note" name="note"><br><br>
        </form>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}