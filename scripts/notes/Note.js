export const Note = (note) => {
    return `
        <div>Timestamp: ${note.date}</div>
        <div>${note.note}</div>
    `
}