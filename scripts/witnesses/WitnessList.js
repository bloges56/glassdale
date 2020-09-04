import {getWitnesses, useWitnesses} from './WitnessProvider.js'
import { Witness } from './Witness.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.witnessesContainer')

const render = (witnesses) => {
    contentTarget.innerHTML = witnesses.map(witness => {
        return Witness(witness)
    }).sort().join("")
}

eventHub.addEventListener('click', event => {
    if(event.target.id === "witnessesBtn"){
        document.querySelector('.criminalsContainer').classList.add("hidden");
        getWitnesses()
        .then(_ =>{
            const witnesses = useWitnesses();
            render(witnesses);
        })
        event.target.classList.add('hidden');
        document.querySelector('#criminalsBtn').classList.remove('hidden');
        contentTarget.classList.remove('hidden');
    }
})