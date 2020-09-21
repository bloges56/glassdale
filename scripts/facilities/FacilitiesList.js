import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'
import { getFacilities, useFacilities } from './FacilityProvider.js'
import { Facility } from './Facility.js'

const contentTarget = document.querySelector('#facilitiesContainer')
const eventHub = document.querySelector('.container')

const criminalsContainer = document.querySelector('#criminalsContainer')
const criminalsBtn = document.querySelector('#criminalsBtn')

const witnessesContainer = document.querySelector('.witnessesContainer')
const witnessesBtn = document.querySelector('#witnessesBtn')



getCriminals()
.then(getFacilities)
.then(getCriminalFacilities)
.then(_ => {
    const criminals = useCriminals()
    const facilities = useFacilities()
    const criminalFacilites = useCriminalFacilities()

    contentTarget.innerHTML = facilities.map(facility => {
        const facilityCriminals = criminals.filter(criminal => {
             const foundCriminalFacility = criminalFacilites.find(criminalFacility => {
                return facility.id === criminalFacility.facilityId && criminal.id === criminalFacility.criminalId
            })
            if(foundCriminalFacility !== undefined){
                return true;
            }
            else{
                return false;
            }
        })
        return Facility(facility, facilityCriminals)
    }).sort().join("")

    eventHub.addEventListener("click", event => {
        if(event.target.id === "facilitiesBtn"){
            event.target.classList.add("hidden")
            contentTarget.style.display = "flex"
            if(criminalsContainer.style.display === "flex"){
                criminalsContainer.style.display = "none"
                criminalsBtn.classList.remove("hidden")
            }
            else{
                witnessesContainer.style.display = "none"
                witnessesBtn.classList.remove("hidden")
            }
            
        }
    })
})

