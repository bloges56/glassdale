import {getWitnesses, useWitnesses} from './WitnessProvider.js'
import { Witness } from './Witness.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.witnessesContainer')

const criminalsContainer = document.querySelector('#criminalsContainer')
const criminalsBtn = document.querySelector('#criminalsBtn')

const facilitiesContainer = document.querySelector('#facilitiesContainer')
const facilitiesBtn = document.querySelector('#facilitiesBtn')

const render = (witnesses) => {
    contentTarget.innerHTML = witnesses.map(witness => {
        return Witness(witness)
    }).sort().join("")
}

eventHub.addEventListener('click', event => {
    if(event.target.id === "witnessesBtn"){
        event.target.classList.add('hidden');
        getWitnesses()
        .then(_ =>{
            const witnesses = useWitnesses();
            render(witnesses);
            contentTarget.style.display = "flex"
        })
        if(criminalsContainer.style.display === "flex"){
            criminalsContainer.style.display = "none"
            criminalsBtn.classList.remove("hidden")
        }
        else{
            facilitiesContainer.style.display = "none"
            facilitiesBtn.classList.remove("hidden")
        }
        
    }
})