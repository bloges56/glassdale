export const Note = (note) => {
    return `
        <div>Timestamp: ${note.date}</div>
        <div>${note.note}</div>
        <button class="noteCriminal--${note.criminalId} "id="deleteNote--${note.id}">Delete Note</button>
    `
}