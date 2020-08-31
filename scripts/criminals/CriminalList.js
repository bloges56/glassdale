import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'

export const CriminalList = () => {
    getCriminals()
        .then(_ => {
            const criminalsArr = useCriminals();
            var criminalsCont = document.querySelector(".criminalsContainer");
            for(var criminal of criminalsArr){
                criminalsCont.innerHTML += Criminal(criminal);
            }
        })
}