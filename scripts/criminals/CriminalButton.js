const eventHub = document.querySelector('.container');

eventHub.addEventListener("click", event => {
    if(event.target.id === "criminalsBtn"){
        document.querySelector('.criminalsContainer').classList.remove('hidden');
        document.querySelector('.witnessesContainer').classList.add('hidden');
        document.querySelector('#witnessesBtn').classList.remove('hidden');
        event.target.classList.add('hidden');
    }
})