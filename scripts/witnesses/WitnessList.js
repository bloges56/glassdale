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
        getWitnesses()
        .then(_ =>{
            const witnesses = useWitnesses();
            render(witnesses);
        })
    }
})