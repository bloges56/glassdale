import {getOfficers, useOfficers } from './OfficerProvider.js'

const contTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "officerSelect"){
        const customEvent = new CustomEvent("choseOfficer", {
            detail: {
                name: changeEvent.target.value
            }
        })

        eventHub.dispatchEvent(customEvent);
    }
})

const render = (officers) => {
    contTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officers.map(officer => {
                return `
                    <option>${officer.name}</option>
                `;
            }).sort().join("")}
        </select>

    `;
}

export const OfficerSelect = () => {
    getOfficers()
    .then(_ => {
        const officersArr = useOfficers();
        render(officersArr);
    })
}