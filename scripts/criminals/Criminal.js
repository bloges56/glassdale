export const Criminal = (criminal) => {
    return `
        <div class="criminal-card">
            <h2>${criminal.name}</h2>
            <div>Age: ${criminal.age}</div>
            <div>Term start: ${criminal.incarceration.start}</div>
            <div> Term end: ${criminal.incarceration.end}</div>
        </div>
    `;
}