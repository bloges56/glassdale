export const Witness = (witness) => {
    return `
        <div class="witness-card">
            <div>Name: ${witness.name}</div>
            <div>Statement: ${witness.statements}</div>
        </div>
    `
}