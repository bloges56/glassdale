import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js'
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")


// eventHub.addEventListener('noteStateChanged', event => {
//     const appStateCriminals = useCriminals();
//     render(appStateCriminals);
// })

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeId" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        var matchingCriminals = useCriminals();
        if(event.detail.crimeId !== '0'){
            matchingCriminals = matchingCriminals.filter(criminal => {
                return criminal.conviction === event.detail.crimeId
            })
        }
        const officerSelect = document.querySelector('#officerSelect');
        if(officerSelect.value !== '0'){
            matchingCriminals = matchingCriminals.filter(criminal => {
                return criminal.arrestingOfficer === officerSelect.value;
            })
        }
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
        var matchingCriminals = useCriminals();
        if(event.detail.name !== '0'){
            matchingCriminals = matchingCriminals.filter(criminal => {
                return criminal.arrestingOfficer === event.detail.name
            })
        }

        const crimeSelect = document.querySelector('#crimeSelect');
        if(crimeSelect.value !== '0'){
            matchingCriminals = matchingCriminals.filter(criminal => {
                return criminal.conviction === crimeSelect.value;
            })
        }
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       render(matchingCriminals);
    }
})

eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("notesBtn")){
        const [prefix, id] = event.target.id.split("--")
        var notesCont = document.querySelector(`#notes--${id}`)
        if(notesCont.classList.length === 0){
            notesCont.classList.add('hidden')
        }
        else{
            notesCont.classList = [];
        }
    }

    else if(event.target.id.startsWith("associates--")){
        const [prefix, id] = event.target.id.split("--")
        var alibiesCont = document.querySelector(`#alibies--${id}`)
        if(alibiesCont.classList.length === 0){
            alibiesCont.classList.add('hidden')
        }
        else{
            alibiesCont.classList = [];
        }
    }
})

const render = (criminalCollection, facilities, criminalFacilities) => {
    contentTarget.innerHTML = criminalCollection.map(criminal => {
        const foundCriminalFacilities = criminalFacilities.filter(criminalFacility => {
            return criminalFacility.criminalId === criminal.id
        })
        const foundFacilities = foundCriminalFacilities.map(criminalFacility => {
            return facilities.find(facility => {
                return criminalFacility.facilityId === facility.id
            })
        })
        return Criminal(criminal, foundFacilities)
    }).sort().join("")
}


// Render ALL criminals initally
export const CriminalList = () => {
    return getCriminals()
        .then(getFacilities)
        .then(getCriminalFacilities)
        .then(_ => {
            // Pull in the data now that it has been fetched
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            // Pass all three collections of data to render()
            render(criminals, facilities, crimFac)
        })
}