const eventHub = document.querySelector('.container');

const witnessesContainer = document.querySelector('.witnessesContainer')
const witnessesBtn = document.querySelector('#witnessesBtn')

const facilitiesContainer = document.querySelector('#facilitiesContainer')
const facilitiesBtn = document.querySelector('#facilitiesBtn')

const criminalsContainer = document.querySelector('#criminalsContainer')
const criminalsBtn = document.querySelector('#criminalsBtn')

eventHub.addEventListener("click", event => {
    if(event.target.id === "criminalsBtn"){
        criminalsContainer.style.display = "flex";
        event.target.classList.add('hidden');
        if(witnessesContainer.style.display === "flex"){
            witnessesContainer.style.display = "none"
            witnessesBtn.classList.remove('hidden')
        }
        else{
            facilitiesContainer.style.display = "none"
            facilitiesBtn.classList.remove("hidden")
        }
    }
})