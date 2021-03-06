import { Officer } from './Officer.js'
import { getOfficers, useOfficers } from './OfficerProvider.js'

export const OfficerList = () => {
    getOfficers()
    .then( _ => {
        const officersArr = useOfficers();
        const officersHTMLArr = officersArr.map(officer => Officer(officer));
        const officerCont = document.querySelector(".officersContainer");
        officerCont.innerHTML = officersHTMLArr.join("");
    })
}