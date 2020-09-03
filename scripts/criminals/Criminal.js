import { Note } from "../notes/Note.js";

const eventHub = document.querySelector('.container')



export const Criminal = (criminal, notes) => {
    return `
        <div class="criminal-card">
            <h2>${criminal.name}</h2>
            <div>Age: ${criminal.age}</div>
            <div>Crime: ${criminal.conviction}</div>
            <div>Term start: ${GetFormattedDate(criminal.incarceration.start)}</div>
            <div> Term end: ${GetFormattedDate(criminal.incarceration.end)}</div>
            <button id="associates--${criminal.id}">Associate Alibis</button>
            <div class="hidden" id="alibies--${criminal.id}">
                ${criminal.known_associates.map(associate => {
                    return `
                        <div>${associate.name}: ${associate.alibi}</div>
                    `
                }).join("")}
            </div>
            <button id="notesBtn--${criminal.id}">Notes</button>
            <div class="hidden" id="notes--${criminal.id}">
                ${`
                <Notes>
                ${notes.map(note => {
                    return Note(note)
                }).join("")}
                `}
            </div>
        </div>
    `;
}

const GetFormattedDate = (date) =>{
    var todayTime = new Date(date);
    var month = todayTime.getMonth() + 1;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return month + "/" + day + "/" + year;
}