export const Officer = (officer) => {
    return `
        <section class="officer-${officer.id}" id="card-officer">
            <h2>Name: ${officer.name}</h2>
        </section>
    `;
}