const eventHub = document.querySelector(".container")

export const dispatchStateChangeEvent = (criminal) => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged", {
        detail: {
            criminalID: criminal
        }
    })

    eventHub.dispatchEvent(noteStateChangedEvent)
}

var notes = []

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}

export const deleteNote = (noteId, criminalId) => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
    .then(getNotes)
    .then(_ => {
        dispatchStateChangeEvent(criminalId)
    })
}

export const useNotes = () => {
    return notes.slice();
}
