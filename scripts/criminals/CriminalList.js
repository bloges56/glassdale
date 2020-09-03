import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { getNotes, useNotes } from '../notes/NoteProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeId" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appStateCriminals = useCriminals();
        const matchingCriminals = appStateCriminals.filter(criminal => {
            return criminal.conviction === event.detail.crimeId
        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       render(matchingCriminals);
    }
})

eventHub.addEventListener('choseOfficer', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("name" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appStateCriminals = useCriminals();
        const matchingCriminals = appStateCriminals.filter(criminal => {
            return criminal.arrestingOfficer === event.detail.name
        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       render(matchingCriminals);
    }
})

const render = criminalCollection => {
    getNotes()
    .then(_ => {
        const notes = useNotes();
        contentTarget.innerHTML = criminalCollection.map(criminal => {
            const criminalNotes = notes.filter(note => {
                return note.crimnal === criminal.name
            })
            return Criminal(criminal, criminalNotes)
        }).join("");
    })
    
}


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}