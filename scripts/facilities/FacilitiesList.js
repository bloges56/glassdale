import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'
import { getFacilities, useFacilities } from './FacilityProvider.js'
import { Facility } from './Facility.js'

const contentTarget = document.querySelector('.facilitiesContainer')

getCriminals()
.then(getFacilities)
.then(getCriminalFacilities)
.then(_ => {
    const criminals = useCriminals()
    const facilities = useFacilities()
    const criminalFacilites = useCriminalFacilities()

    contentTarget.innerHTML = facilities.map(facility => {
        const facilityCriminals = criminals.filter(criminal => {
             criminalFacilites.forEach(criminalFacility => {
                return facility.id === criminalFacility.facilityId && criminal.id === criminalFacility.criminalId
            })
        })
        debugger;
        return Facility(facility, facilityCriminals)
    }).sort().join("")
})

