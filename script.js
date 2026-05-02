// Predefined components
const predefinedComponents = [
    { name: 'Bulb', amount: 0, description: '' },
    { name: 'Table Fan', amount: 0, description: '' },
    { name: 'Cooler', amount: 0, description: '' },
    { name: 'Wire', amount: 0, description: '' },
    { name: 'Switch', amount: 0, description: '' },
    { name: 'Socket', amount: 0, description: '' },
    { name: 'Fuse', amount: 0, description: '' },
    { name: 'Cable', amount: 0, description: '' },
    { name: 'Motor', amount: 0, description: '' },
    { name: 'Transformer', amount: 0, description: '' }
];

// Load components from localStorage or use predefined
let components = JSON.parse(localStorage.getItem('components')) || predefinedComponents;

let currentComponentIndex = -1;

function displayComponents() {
    list.innerHTML = '';
    components.forEach((comp, index) => {
        const div = document.createElement('div');
        div.className = 'component-card';
        div.innerHTML = `
            <img src="https://via.placeholder.com/150x150?text=${encodeURIComponent(comp.name)}" alt="${comp.name}" onclick="openModal(${index})">
            <h3>${comp.name}</h3>
            <p>Amount: <span id="amount-${index}">${comp.amount}</span></p>
            ${comp.description ? `<p>Description: ${comp.description}</p>` : ''}
            <input type="number" id="edit-amount-${index}" value="${comp.amount}" min="0" style="display: none;">
            <button onclick="editComponent(${index})">Edit Amount</button>
            <button onclick="saveComponent(${index})" style="display: none;">Save</button>
        `;
        list.appendChild(div);
    });
}

function editComponent(index) {
    document.getElementById(`amount-${index}`).style.display = 'none';
    document.getElementById(`edit-amount-${index}`).style.display = 'inline';
    document.querySelector(`#componentList > div:nth-child(${index + 1}) button:first-of-type`).style.display = 'none';
    document.querySelector(`#componentList > div:nth-child(${index + 1}) button:last-of-type`).style.display = 'inline';
}

function saveComponent(index) {
    const newAmount = parseInt(document.getElementById(`edit-amount-${index}`).value);
    if (newAmount >= 0) {
        components[index].amount = newAmount;
        localStorage.setItem('components', JSON.stringify(components));
        displayComponents();
    }
}

function openModal(index) {
    currentComponentIndex = index;
    document.getElementById('modalTitle').textContent = `Add Description for ${components[index].name}`;
    document.getElementById('descriptionText').value = components[index].description;
    document.getElementById('descriptionModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('descriptionModal').style.display = 'none';
}

document.getElementById('submitDescription').addEventListener('click', () => {
    const description = document.getElementById('descriptionText').value.trim();
    if (currentComponentIndex >= 0) {
        components[currentComponentIndex].description = description;
        localStorage.setItem('components', JSON.stringify(components));
        displayComponents();
        closeModal();
    }
});

document.querySelector('.close').addEventListener('click', closeModal);

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('descriptionModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Initial display
displayComponents();