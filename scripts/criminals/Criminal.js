export const Criminal = (criminal) => {
    return `
        <div class="criminal-card">
            <h2>${criminal.name}</h2>
            <div>Age: ${criminal.age}</div>
            <div>Crime: ${criminal.conviction}</div>
            <div>Term start: ${GetFormattedDate(criminal.incarceration.start)}</div>
            <div> Term end: ${GetFormattedDate(criminal.incarceration.end)}</div>
        </div>
    `;
}


const GetFormattedDate = (date) =>{
    var todayTime = new Date(date);
    var month = todayTime.getMonth() + 1;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return month + "/" + day + "/" + year;
}