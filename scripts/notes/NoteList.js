import { Note } from './Note.js'
import { useCriminals, getCriminals } from '../criminals/CriminalProvider.js'
import { useNotes, getNotes } from './NoteProvider.js';

const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", event => {
    const criminals = useCriminals();
    const notesCriminal = criminals.find(criminal => {
        return event.detail.criminalID === criminal.id.toString()
    })
    const notes = useNotes();
    const foundNotes = notes.filter(note => {
        return notesCriminal.id.toString() === note.criminal
    })
    //debugger;
    render(foundNotes, notesCriminal.name.split(" ").join(""))
})

const render = (notes, criminal) => {
    const targetContent = document.querySelector(`#notes--${criminal}`)

    const notesHTML = notes.map(note => {
        return `
            ${Note(note)}
        `
    }).sort().join("")

    targetContent.innerHTML = notesHTML;
}

export const NoteList = () => {
    getNotes()
    .then(_ => {
        const notes = useNotes()
        getCriminals()
        .then(_ => {
            const criminals = useCriminals();
            criminals.forEach(criminal => {
            const criminalNotes = notes.filter(note => {
                return note.criminal === criminal.id.toString()     
            })
            render(criminalNotes, criminal.name.split(" ").join(""))
            })
        })
    })
}