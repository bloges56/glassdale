export const Facility = (facility, criminals) => {
    return `
        <div class="facility-card">
            <h2>${facility.facilityName}</h2>
            <h3>Criminals</h3>
            <ul>
                ${criminals.map(criminal => {
                    return `<li>${criminal.name}</li>`
                }).sort().join("")}
            </ul>
        </div>
    `
}