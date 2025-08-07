// Periodic Table Elements Data
const elements = [
    // First row
    { number: 1, symbol: 'H', name: 'Hydrogen', category: 'non-metal' },
    { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas' },
    
    // Second row
    { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal' },
    { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth' },
    { number: 5, symbol: 'B', name: 'Boron', category: 'semi-metal' },
    { number: 6, symbol: 'C', name: 'Carbon', category: 'non-metal' },
    { number: 7, symbol: 'N', name: 'Nitrogen', category: 'non-metal' },
    { number: 8, symbol: 'O', name: 'Oxygen', category: 'non-metal' },
    { number: 9, symbol: 'F', name: 'Fluorine', category: 'halogen' },
    { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas' },
    
    // Third row
    { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal' },
    { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth' },
    { number: 13, symbol: 'Al', name: 'Aluminum', category: 'basic-metal' },
    { number: 14, symbol: 'Si', name: 'Silicon', category: 'semi-metal' },
    { number: 15, symbol: 'P', name: 'Phosphorus', category: 'non-metal' },
    { number: 16, symbol: 'S', name: 'Sulfur', category: 'non-metal' },
    { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen' },
    { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas' },
    
    // Fourth row
    { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal' },
    { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth' },
    { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal' },
    { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal' },
    { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal' },
    { number: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal' },
    { number: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal' },
    { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal' },
    { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal' },
    { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal' },
    { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal' },
    { number: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal' },
    { number: 31, symbol: 'Ga', name: 'Gallium', category: 'basic-metal' },
    { number: 32, symbol: 'Ge', name: 'Germanium', category: 'semi-metal' },
    { number: 33, symbol: 'As', name: 'Arsenic', category: 'semi-metal' },
    { number: 34, symbol: 'Se', name: 'Selenium', category: 'non-metal' },
    { number: 35, symbol: 'Br', name: 'Bromine', category: 'halogen' },
    { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas' },
    
    // Fifth row
    { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal' },
    { number: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth' },
    { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal' },
    { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal' },
    { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal' },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal' },
    { number: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal' },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal' },
    { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal' },
    { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal' },
    { number: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal' },
    { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal' },
    { number: 49, symbol: 'In', name: 'Indium', category: 'basic-metal' },
    { number: 50, symbol: 'Sn', name: 'Tin', category: 'basic-metal' },
    { number: 51, symbol: 'Sb', name: 'Antimony', category: 'semi-metal' },
    { number: 52, symbol: 'Te', name: 'Tellurium', category: 'semi-metal' },
    { number: 53, symbol: 'I', name: 'Iodine', category: 'halogen' },
    { number: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas' },
    
    // Sixth row (excluding lanthanides)
    { number: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali-metal' },
    { number: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth' },
    { number: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanide' },
    { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal' },
    { number: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition-metal' },
    { number: 74, symbol: 'W', name: 'Tungsten', category: 'transition-metal' },
    { number: 75, symbol: 'Re', name: 'Rhenium', category: 'transition-metal' },
    { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal' },
    { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal' },
    { number: 78, symbol: 'Pt', name: 'Platinum', category: 'transition-metal' },
    { number: 79, symbol: 'Au', name: 'Gold', category: 'transition-metal' },
    { number: 80, symbol: 'Hg', name: 'Mercury', category: 'transition-metal' },
    { number: 81, symbol: 'Tl', name: 'Thallium', category: 'basic-metal' },
    { number: 82, symbol: 'Pb', name: 'Lead', category: 'basic-metal' },
    { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'basic-metal' },
    { number: 84, symbol: 'Po', name: 'Polonium', category: 'semi-metal' },
    { number: 85, symbol: 'At', name: 'Astatine', category: 'halogen' },
    { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas' },
    
    // Seventh row (excluding actinides)
    { number: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal' },
    { number: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth' },
    { number: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide' },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal' },
    { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal' },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal' },
    { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal' },
    { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal' },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition-metal' },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition-metal' },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition-metal' },
    { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition-metal' },
    { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'basic-metal' },
    { number: 114, symbol: 'Fl', name: 'Flerovium', category: 'basic-metal' },
    { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'basic-metal' },
    { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'basic-metal' },
    { number: 117, symbol: 'Ts', name: 'Tennessine', category: 'halogen' },
    { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas' },
    
    // Lanthanides
    { number: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanide' },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide' },
    { number: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanide' },
    { number: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanide' },
    { number: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide' },
    { number: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide' },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide' },
    { number: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide' },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide' },
    { number: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide' },
    { number: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide' },
    { number: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide' },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide' },
    { number: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanide' },
    
    // Actinides
    { number: 90, symbol: 'Th', name: 'Thorium', category: 'actinide' },
    { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide' },
    { number: 92, symbol: 'U', name: 'Uranium', category: 'actinide' },
    { number: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide' },
    { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide' },
    { number: 95, symbol: 'Am', name: 'Americium', category: 'actinide' },
    { number: 96, symbol: 'Cm', name: 'Curium', category: 'actinide' },
    { number: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinide' },
    { number: 98, symbol: 'Cf', name: 'Californium', category: 'actinide' },
    { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide' },
    { number: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide' },
    { number: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinide' },
    { number: 102, symbol: 'No', name: 'Nobelium', category: 'actinide' },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide' }
];

// Define compounds and their recipes
const compounds = [
    // Simple compounds
    {
        name: 'Water',
        formula: 'H₂O',
        elements: ['H', 'H', 'O'],
        emoji: '💧',
        description: 'Essential for life. Covers 71% of Earth\'s surface.'
    },
    {
        name: 'Hydrogen Peroxide',
        formula: 'H₂O₂',
        elements: ['H', 'H', 'O', 'O'],
        emoji: '🧪',
        description: 'Commonly used as a disinfectant and bleach.'
    },
    {
        name: 'Methane',
        formula: 'CH₄',
        elements: ['C', 'H', 'H', 'H', 'H'],
        emoji: '🔥',
        description: 'The main component of natural gas.'
    },
    {
        name: 'Ethane',
        formula: 'C₂H₆',
        elements: ['C', 'C', 'H', 'H', 'H', 'H', 'H', 'H'],
        emoji: '⛽',
        description: 'A component of natural gas and petroleum.'
    },
    {
        name: 'Ethene (Ethylene)',
        formula: 'C₂H₄',
        elements: ['C', 'C', 'H', 'H', 'H', 'H'],
        emoji: '🌱',
        description: 'Used in the production of polyethylene and as a plant hormone.'
    },
    
    // Oxides
    {
        name: 'Oxygen Gas',
        formula: 'O₂',
        elements: ['O', 'O'],
        emoji: '💨',
        description: 'Essential for respiration in most living organisms. Makes up about 21% of Earth\'s atmosphere.'
    },
    {
        name: 'Carbon Dioxide',
        formula: 'CO₂',
        elements: ['C', 'O', 'O'],
        emoji: '☁️',
        description: 'A greenhouse gas essential for plant photosynthesis.'
    },
    {
        name: 'Nitrous Oxide',
        formula: 'N₂O',
        elements: ['N', 'N', 'O'],
        emoji: '😄',
        description: 'Commonly known as laughing gas. Used as an anesthetic and in rocketry.'
    },
    {
        name: 'Carbon Monoxide',
        formula: 'CO',
        elements: ['C', 'O'],
        emoji: '☠️',
        description: 'A poisonous gas produced by incomplete combustion.'
    },
    {
        name: 'Nitrogen Dioxide',
        formula: 'NO₂',
        elements: ['N', 'O', 'O'],
        emoji: '🌫️',
        description: 'A reddish-brown toxic gas with a sharp odor.'
    },
    {
        name: 'Sulfur Dioxide',
        formula: 'SO₂',
        elements: ['S', 'O', 'O'],
        emoji: '🌋',
        description: 'A gas produced by volcanic eruptions and industrial processes.'
    },
    
    // Acids
    {
        name: 'Hydrochloric Acid',
        formula: 'HCl',
        elements: ['H', 'Cl'],
        emoji: '⚠️',
        description: 'A strong acid found in gastric acid.'
    },
    {
        name: 'Sulfuric Acid',
        formula: 'H₂SO₄',
        elements: ['H', 'H', 'S', 'O', 'O', 'O', 'O'],
        emoji: '☢️',
        description: 'A highly corrosive strong mineral acid.'
    },
    {
        name: 'Nitric Acid',
        formula: 'HNO₃',
        elements: ['H', 'N', 'O', 'O', 'O'],
        emoji: '🧪',
        description: 'A highly corrosive mineral acid.'
    },
    
    // Bases
    {
        name: 'Sodium Hydroxide',
        formula: 'NaOH',
        elements: ['Na', 'O', 'H'],
        emoji: '🧼',
        description: 'A strong base used in many industries.'
    },
    {
        name: 'Calcium Hydroxide',
        formula: 'Ca(OH)₂',
        elements: ['Ca', 'O', 'H', 'O', 'H'],
        emoji: '🏗️',
        description: 'Also known as slaked lime, used in construction.'
    },
    
    // Salts
    {
        name: 'Sodium Chloride',
        formula: 'NaCl',
        elements: ['Na', 'Cl'],
        emoji: '🧂',
        description: 'Common table salt, essential for animal life.'
    },
    {
        name: 'Calcium Carbonate',
        formula: 'CaCO₃',
        elements: ['Ca', 'C', 'O', 'O', 'O'],
        emoji: '🐚',
        description: 'Found in rocks, shells, and pearls.'
    },
    
    // Organic compounds
    {
        name: 'Ethanol',
        formula: 'C₂H₅OH',
        elements: ['C', 'C', 'H', 'H', 'H', 'H', 'H', 'O', 'H'],
        emoji: '🍷',
        description: 'The type of alcohol found in alcoholic beverages.'
    },
    {
        name: 'Glucose',
        formula: 'C₆H₁₂O₆',
        elements: ['C', 'C', 'C', 'C', 'C', 'C', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'O', 'O', 'O', 'O', 'O', 'O'],
        emoji: '🍬',
        description: 'A simple sugar and important energy source in living organisms.'
    },
    
    // More complex compounds
    {
        name: 'Ammonia',
        formula: 'NH₃',
        elements: ['N', 'H', 'H', 'H'],
        emoji: '🧴',
        description: 'Used in cleaning products and as a fertilizer.'
    },
    {
        name: 'Methanol',
        formula: 'CH₃OH',
        elements: ['C', 'H', 'H', 'H', 'O', 'H'],
        emoji: '⛽',
        description: 'The simplest alcohol, used as a solvent and fuel.'
    },
    {
        name: 'Acetic Acid',
        formula: 'CH₃COOH',
        elements: ['C', 'H', 'H', 'H', 'C', 'O', 'O', 'H'],
        emoji: '🍶',
        description: 'The main component of vinegar.'
    },
    {
        name: 'Sucrose',
        formula: 'C₁₂H₂₂O₁₁',
        elements: ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        emoji: '🍭',
        description: 'Common table sugar, a disaccharide composed of glucose and fructose.'
    },
    {
        name: 'Aspirin',
        formula: 'C₉H₈O₄',
        elements: ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'O', 'O', 'O', 'O'],
        emoji: '💊',
        description: 'A common medication used to reduce pain, fever, or inflammation.'
    }
];

// Game state
let selectedElements = [];

// DOM Elements
const periodicTable = document.getElementById('periodicTable');
const selectedElementsContainer = document.getElementById('selectedElements');
const mixButton = document.getElementById('mixButton');
const clearButton = document.getElementById('clearButton');
const resultDiv = document.getElementById('result');

// Initialize the periodic table
function initializePeriodicTable() {
    // Clear the table first
    periodicTable.innerHTML = '';
    
    // Create empty cells for the periodic table layout
    // This is a simplified layout - a real periodic table would have proper positioning
    const totalCells = 18 * 7; // 18 columns × 7 rows
    
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'empty-cell';
        periodicTable.appendChild(cell);
    }
    
    // Place elements in their approximate positions
    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category}`;
        elementDiv.innerHTML = `
            <div class="number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
        `;
        
        // Add click event
        elementDiv.addEventListener('click', () => selectElement(element));
        
        // Position the element (simplified positioning)
        // In a real app, you'd want to position them according to the periodic table layout
        let position = element.number % 18;
        if (position === 0) position = 18;
        const row = Math.ceil(element.number / 18) + 1;
        
        // Find the cell at this position
        const cellIndex = (row - 1) * 18 + (position - 1);
        if (cellIndex < periodicTable.children.length) {
            periodicTable.replaceChild(elementDiv, periodicTable.children[cellIndex]);
        } else {
            periodicTable.appendChild(elementDiv);
        }
    });
}

// Handle element selection
function selectElement(element) {
    selectedElements.push(element);
    updateSelectedElements();
    updateMixButton();
    
    // Visual feedback
    const elements = document.querySelectorAll(`.element[data-symbol="${element.symbol}"]`);
    elements.forEach(el => {
        el.style.transform = 'scale(1.1)';
        setTimeout(() => {
            el.style.transform = '';
        }, 200);
    });
}

// Update the selected elements display
function updateSelectedElements() {
    selectedElementsContainer.innerHTML = '';
    
    // Group elements by symbol and count them
    const elementCounts = {};
    selectedElements.forEach(element => {
        if (elementCounts[element.symbol]) {
            elementCounts[element.symbol]++;
        } else {
            elementCounts[element.symbol] = 1;
        }
    });
    
    // Display the elements with counts
    for (const [symbol, count] of Object.entries(elementCounts)) {
        const element = elements.find(e => e.symbol === symbol);
        const elementDiv = document.createElement('div');
        elementDiv.className = 'selected-element';
        elementDiv.innerHTML = `
            <span class="symbol">${symbol}</span>
            <span class="count">${count > 1 ? count : ''}</span>
        `;
        selectedElementsContainer.appendChild(elementDiv);
    }
}

// Check if current selection matches any compound
function checkForCompound() {
    if (selectedElements.length < 2) return null;
    
    // Get the symbols of selected elements
    const selectedSymbols = selectedElements.map(el => el.symbol);
    
    // Check each compound
    for (const compound of compounds) {
        // Create a copy of the compound's elements
        const compoundElements = [...compound.elements];
        const tempSelected = [...selectedSymbols];
        
        // Try to match all elements in the compound
        let match = true;
        for (const element of compoundElements) {
            const index = tempSelected.indexOf(element);
            if (index === -1) {
                match = false;
                break;
            }
            // Remove the matched element
            tempSelected.splice(index, 1);
        }
        
        // If all elements matched and no extra elements
        if (match && tempSelected.length === 0) {
            return compound;
        }
    }
    
    return null;
}

// Update the mix button state
function updateMixButton() {
    mixButton.disabled = selectedElements.length < 2;
}

// Create bubbles in the flask
function createBubbles() {
    const flask = document.querySelector('.flask');
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-container';
    flask.appendChild(bubblesContainer);
    
    // Create multiple bubbles inside the flask
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            
            // Random size between 3 and 10 pixels
            const size = Math.random() * 7 + 3;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Random horizontal position within flask
            const left = 20 + Math.random() * 60;
            bubble.style.left = `${left}%`;
            
            // Random animation duration
            const duration = 1 + Math.random() * 2;
            bubble.style.animation = `bubble-rise ${duration}s ease-in-out forwards`;
            bubble.style.animationDelay = `${Math.random() * 2}s`;
            
            bubblesContainer.appendChild(bubble);
            
            // Remove bubble after animation
            setTimeout(() => {
                bubble.remove();
            }, duration * 1000 + 1000);
        }, i * 150);
    }
    
    // Create rising bubbles that go above the flask
    createRisingBubbles(flask);
}

// Create bubbles that rise up from the flask
function createRisingBubbles(flask) {
    const flaskRect = flask.getBoundingClientRect();
    const bubblesCount = 10 + Math.floor(Math.random() * 10);
    
    for (let i = 0; i < bubblesCount; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'rising-bubble';
            
            // Random size between 5 and 15 pixels
            const size = 5 + Math.random() * 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Position at the top of the flask
            const left = flaskRect.left + 40 + Math.random() * 70;
            const top = flaskRect.bottom - 20;
            
            bubble.style.left = `${left}px`;
            bubble.style.top = `${top}px`;
            
            // Random animation duration and delay
            const duration = 2 + Math.random() * 2;
            bubble.style.animation = `float-up ${duration}s ease-out forwards`;
            
            document.body.appendChild(bubble);
            
            // Remove bubble after animation
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.remove();
                }
            }, duration * 1000);
        }, i * 200);
    }
}

// Animate the flask mixing
function animateMixing(compound, callback) {
    const flask = document.querySelector('.flask');
    const liquid = document.querySelector('.liquid');
    const resultContent = document.querySelector('.result-content');
    
    // Hide the result content during animation
    resultContent.style.opacity = '0';
    
    // Clear any existing bubbles
    const existingBubbles = document.querySelectorAll('.bubbles-container');
    existingBubbles.forEach(bubble => bubble.remove());
    
    // Start mixing animation
    flask.classList.add('mixing');
    liquid.classList.add('color-transition');
    
    // Fill the flask with liquid
    liquid.style.height = '80%';
    
    // Create initial bubbles
    createBubbles();
    
    // After mixing is complete
    setTimeout(() => {
        // Stop mixing animation
        flask.classList.remove('mixing');
        liquid.classList.remove('color-transition');
        
        // Set the final color based on the compound
        if (compound) {
            // Generate a color based on the compound's name
            const hue = (compound.name.length * 50) % 360;
            liquid.style.background = `linear-gradient(to top, hsla(${hue}, 70%, 50%, 0.7), hsla(${(hue + 20) % 360}, 70%, 40%, 0.9))`;
            
            // Create more bubbles for successful reactions
            if (compound.emoji) {
                setTimeout(() => {
                    createRisingBubbles(flask);
                    setTimeout(createBubbles, 500);
                }, 300);
            }
        }
        
        // Show the result
        setTimeout(() => {
            if (callback) callback();
        }, 500);
    }, 2000);
}

// Show the result of the mix
function showResult(compound) {
    const resultContent = document.querySelector('.result-content');
    
    if (compound) {
        // Success! Show the compound with emoji
        resultContent.innerHTML = `
            <div class="success">
                <div class="compound-emoji">${compound.emoji || '✨'}</div>
                <div class="compound-result">${compound.formula}</div>
                <div class="compound-name">${compound.name}</div>
                <p class="compound-description">${compound.description}</p>
            </div>
        `;
    } else {
        // No match found
        resultContent.innerHTML = `
            <div class="error">
                <div class="compound-emoji">❓</div>
                <p>No known compound formed by these elements.</p>
                <p>Try a different combination!</p>
            </div>
        `;
    }
    
    // Fade in the result
    setTimeout(() => {
        resultContent.style.opacity = '1';
    }, 50);
}

// Handle mix button click
function handleMix() {
    const compound = checkForCompound();
    const liquid = document.querySelector('.liquid');
    const resultContent = document.querySelector('.result-content');
    
    // Prepare the result area
    resultContent.style.opacity = '0';
    liquid.style.height = '0%';
    
    // Start the mixing animation
    animateMixing(compound, () => {
        // After animation completes, show the result
        showResult(compound);
        
        // Clear the selection after a delay if it was a successful mix
        if (compound) {
            setTimeout(() => {
                selectedElements = [];
                updateSelectedElements();
                updateMixButton();
                
                // Reset the flask after showing the result
                setTimeout(() => {
                    liquid.style.height = '0%';
                    liquid.style.background = 'linear-gradient(to top, rgba(52, 152, 219, 0.7), rgba(41, 128, 185, 0.9))';
                    document.querySelector('.bubbles').style.opacity = '0';
                    resultContent.innerHTML = '<div class="hint">Your compounds will appear here</div>';
                    resultContent.style.opacity = '1';
                }, 2000);
            }, 1500);
        } else {
            // For failed mix, reset after a delay
            setTimeout(() => {
                showResult(compound);
                
                setTimeout(() => {
                    liquid.style.height = '0%';
                    liquid.style.background = 'linear-gradient(to top, rgba(52, 152, 219, 0.7), rgba(41, 128, 185, 0.9))';
                    document.querySelector('.bubbles').style.opacity = '0';
                    
                    setTimeout(() => {
                        resultContent.innerHTML = '<div class="hint">Your compounds will appear here</div>';
                        resultContent.style.opacity = '1';
                    }, 500);
                }, 1500);
            }, 500);
        }
    });
}

// Reset the flask to its initial state
function resetFlask() {
    const flask = document.querySelector('.flask');
    const liquid = document.querySelector('.liquid');
    const bubbles = document.querySelector('.bubbles');
    const resultContent = document.querySelector('.result-content');
    
    // Stop any ongoing animations
    flask.classList.remove('mixing');
    liquid.classList.remove('color-transition');
    
    // Reset styles
    liquid.style.height = '0%';
    liquid.style.background = 'linear-gradient(to top, rgba(52, 152, 219, 0.7), rgba(41, 128, 185, 0.9))';
    bubbles.style.opacity = '0';
    bubbles.innerHTML = '';
    
    // Reset result content
    resultContent.style.opacity = '1';
    resultContent.innerHTML = '<div class="hint">Your compounds will appear here</div>';
}

// Handle clear button click
function handleClear() {
    // Clear selected elements
    selectedElements = [];
    updateSelectedElements();
    updateMixButton();
    
    // Reset the flask and result display
    resetFlask();
    
    // Clear any existing timeouts to prevent animation issues
    const highestId = window.setTimeout(() => {
        for (let i = highestId; i >= 0; i--) {
            window.clearTimeout(i);
        }
    }, 0);
}

// Update the combos panel with possible combinations
function updateCombosPanel() {
    const combosList = document.getElementById('combosList');
    const selectedSymbols = selectedElements.map(el => el.symbol);
    
    if (selectedSymbols.length < 2) {
        combosList.innerHTML = '<div class="hint">Select 2 or more elements to see possible combinations</div>';
        return;
    }
    
    // Find all possible compounds that can be made with the selected elements
    const possibleCompounds = [];
    
    compounds.forEach(compound => {
        const compoundElements = [...compound.elements];
        const tempSelected = [...selectedSymbols];
        let isValid = true;
        
        // Check if all elements in the compound are in the selected elements
        for (const element of compoundElements) {
            const index = tempSelected.indexOf(element);
            if (index === -1) {
                isValid = false;
                break;
            }
            tempSelected.splice(index, 1);
        }
        
        if (isValid) {
            possibleCompounds.push(compound);
        }
    });
    
    if (possibleCompounds.length === 0) {
        combosList.innerHTML = '<div class="hint">No known combinations with these elements</div>';
        return;
    }
    
    // Display the possible compounds
    combosList.innerHTML = possibleCompounds
        .map(compound => `
            <div class="combo-item">
                <div class="formula">${compound.formula} ${compound.emoji || ''}</div>
                <div class="elements">
                    ${Array.from(new Set(compound.elements)).map(el => 
                        `<span class="element-badge">${el}</span>`
                    ).join('')}
                </div>
                <div class="name">${compound.name}</div>
            </div>
        `)
        .join('');
}

// Update the selected elements display to include combos panel update
const originalUpdateSelectedElements = updateSelectedElements;
updateSelectedElements = function() {
    originalUpdateSelectedElements();
    updateCombosPanel();
};

// Event Listeners
mixButton.addEventListener('click', handleMix);
clearButton.addEventListener('click', handleClear);

// Quiz questions for Learning Mode
const quizQuestions = [
    {
        question: "What two elements make water?",
        answer: ["H", "O", "H"], // H2O
        hint: "One of these elements is the lightest and most abundant in the universe.",
        formula: "H₂O"
    },
    {
        question: "What elements make up table salt?",
        answer: ["Na", "Cl"], // NaCl
        hint: "One of these elements is a reactive metal that explodes in water.",
        formula: "NaCl"
    },
    {
        question: "What elements make up carbon dioxide?",
        answer: ["C", "O", "O"], // CO2
        hint: "This gas is what we exhale and plants use for photosynthesis.",
        formula: "CO₂"
    },
    {
        question: "What elements make up methane?",
        answer: ["C", "H", "H", "H", "H"], // CH4
        hint: "This is the main component of natural gas.",
        formula: "CH₄"
    },
    {
        question: "What elements make up hydrogen peroxide?",
        answer: ["H", "O", "O", "H"], // H2O2
        hint: "This common household chemical is used as a disinfectant.",
        formula: "H₂O₂"
    },
    {
        question: "What elements make up ammonia?",
        answer: ["N", "H", "H", "H"], // NH3
        hint: "This compound is commonly used in cleaning products.",
        formula: "NH₃"
    },
    {
        question: "What elements make up sulfuric acid?",
        answer: ["H", "H", "S", "O", "O", "O", "O"], // H2SO4
        hint: "This strong acid is known as 'oil of vitriol' and is used in car batteries.",
        formula: "H₂SO₄"
    },
    {
        question: "What elements make up glucose?",
        answer: ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "O", "O", "O", "O", "O", "O"], // C6H12O6
        hint: "This is the primary sugar in our blood and a key source of energy for living organisms.",
        formula: "C₆H₁₂O₆"
    },
    {
        question: "What elements make up rust?",
        answer: ["Fe", "O", "O", "O"], // Fe2O3 (simplified)
        hint: "This compound forms when iron reacts with oxygen in the presence of water.",
        formula: "Fe₂O₃"
    },
    {
        question: "What elements make up laughing gas?",
        answer: ["N", "N", "O"], // N2O
        hint: "This gas is used as an anesthetic and is also a greenhouse gas.",
        formula: "N₂O"
    }
];

// Learning Mode State
let currentQuestionIndex = 0;
let score = 0;
let currentAnswer = [];
let usedQuestionIndices = [];

// DOM Elements
const learningModeBtn = document.getElementById('learningModeBtn');
const learningModeModal = document.getElementById('learningModeModal');
const questionText = document.getElementById('questionText');
const answerInput = document.getElementById('answerInput');
const feedback = document.getElementById('feedback');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const hintBtn = document.getElementById('hintBtn');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('totalQuestions');

// Initialize the game
initializePeriodicTable();
updateCombosPanel();

// Learning Mode Event Listeners
learningModeBtn.addEventListener('click', startLearningMode);
checkAnswerBtn.addEventListener('click', checkAnswer);
nextQuestionBtn.addEventListener('click', showNextQuestion);
hintBtn.addEventListener('click', showHint);

// Close modal when clicking the close button
learningModeModal.querySelector('.close').addEventListener('click', () => {
    learningModeModal.style.display = 'none';
    document.body.classList.remove('learning-mode-active');
    handleClear(); // Clear selections when closing
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === learningModeModal) {
        learningModeModal.style.display = 'none';
        document.body.classList.remove('learning-mode-active');
        handleClear(); // Clear selections when closing
    }
});

// Start Learning Mode
function startLearningMode() {
    // Clear any existing selections
    handleClear();
    
    // Reset learning mode state
    learningModeModal.style.display = 'block';
    document.body.classList.add('learning-mode-active');
    currentQuestionIndex = 0;
    score = 0;
    currentAnswer = [];
    usedQuestionIndices = [];
    scoreElement.textContent = '0';
    totalQuestionsElement.textContent = '5'; // Show 5 questions per round
    
    // Show the first question
    showNextQuestion();
}

// Show the next question
function showNextQuestion() {
    // Reset UI
    handleClear(); // Clear previous selections
    currentAnswer = [];
    feedback.textContent = '';
    feedback.className = 'feedback';
    checkAnswerBtn.style.display = 'inline-block';
    nextQuestionBtn.style.display = 'none';
    
    // If we've shown 5 questions, show results
    if (currentQuestionIndex >= 5) {
        showResults();
        return;
    }
    
    // Get a random question that hasn't been used yet
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quizQuestions.length);
    } while (usedQuestionIndices.includes(randomIndex) && usedQuestionIndices.length < quizQuestions.length);
    
    usedQuestionIndices.push(randomIndex);
    const question = quizQuestions[randomIndex];
    
    // Update UI
    questionText.textContent = question.question;
    answerInput.innerHTML = '';
    
    // Create answer slots
    question.answer.forEach((_, index) => {
        const slot = document.createElement('div');
        slot.className = 'answer-slot';
        slot.dataset.index = index;
        slot.addEventListener('click', () => removeFromAnswer(index));
        answerInput.appendChild(slot);
    });
    
    // Create answer options (shuffled)
    const options = [...new Set(question.answer)]; // Get unique elements
    shuffleArray(options);
    
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'answer-options';
    options.forEach(symbol => {
        const option = document.createElement('button');
        option.className = 'answer-option';
        option.textContent = symbol;
        option.addEventListener('click', () => addToAnswer(symbol));
        optionsContainer.appendChild(option);
    });
    
    answerInput.appendChild(optionsContainer);
    currentQuestionIndex++;
}

// Add an element to the current answer and update the tiny boxes
function addToAnswer(symbol) {
    const emptySlot = answerInput.querySelector('.answer-slot:empty');
    if (emptySlot) {
        emptySlot.textContent = symbol;
        currentAnswer[parseInt(emptySlot.dataset.index)] = symbol;
        
        // Add the element to the selected elements display
        const element = elements.find(el => el.symbol === symbol);
        if (element) {
            // Don't add to selectedElements to avoid cluttering the main display
            // Instead, just update the learning mode display
            const selectedElement = document.createElement('div');
            selectedElement.className = 'selected-element element-from-learning';
            selectedElement.textContent = symbol;
            selectedElement.title = element.name;
            selectedElement.style.backgroundColor = getCategoryColor(element.category);
            emptySlot.appendChild(selectedElement);
            
            // Highlight the element in the periodic table
            const elementCell = document.querySelector(`.element[data-symbol="${symbol}"]`);
            if (elementCell) {
                elementCell.classList.add('selected');
                setTimeout(() => elementCell.classList.remove('selected'), 1000);
            }
        }
    }
    
    // Disable the button if all instances are used
    const symbolCount = currentAnswer.filter(s => s === symbol).length;
    const question = quizQuestions[usedQuestionIndices[usedQuestionIndices.length - 1]];
    const maxCount = question.answer.filter(s => s === symbol).length;
    
    if (symbolCount >= maxCount) {
        const buttons = answerInput.querySelectorAll('.answer-option');
        buttons.forEach(btn => {
            if (btn.textContent === symbol) {
                btn.disabled = true;
            }
        });
    }
}

// Remove an element from the current answer
function removeFromAnswer(index) {
    const slot = answerInput.querySelector(`.answer-slot[data-index="${index}"]`);
    if (slot && slot.firstChild) {
        const symbol = slot.firstChild.textContent;
        slot.innerHTML = '';
        
        // Re-enable the button
        const buttons = answerInput.querySelectorAll('.answer-option');
        buttons.forEach(btn => {
            if (btn.textContent === symbol) {
                btn.disabled = false;
            }
        });
        
        currentAnswer[index] = undefined;
    }
}

// Check the current answer
function checkAnswer() {
    const currentQuestion = quizQuestions[usedQuestionIndices[usedQuestionIndices.length - 1]];
    const isCorrect = JSON.stringify([...currentAnswer].filter(Boolean)) === JSON.stringify(currentQuestion.answer);
    
    if (isCorrect) {
        score++;
        feedback.textContent = `Correct! ${currentQuestion.formula} is ${currentQuestion.question.toLowerCase().replace('?', '')}.`;
        feedback.className = 'feedback correct';
        scoreElement.textContent = score;
    } else {
        feedback.textContent = `Incorrect. The correct answer is ${currentQuestion.formula}.`;
        feedback.className = 'feedback incorrect shake';
        
        // Show the correct answer
        answerInput.querySelectorAll('.answer-slot').forEach((slot, index) => {
            slot.textContent = currentQuestion.answer[index];
            slot.style.backgroundColor = '#f8d7da';
        });
    }
    
    checkAnswerBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'inline-block';
}

// Show a hint for the current question
function showHint() {
    const currentQuestion = quizQuestions[usedQuestionIndices[usedQuestionIndices.length - 1]];
    const hintElement = document.createElement('div');
    hintElement.className = 'hint';
    hintElement.textContent = currentQuestion.hint;
    
    // Remove any existing hint
    const existingHint = feedback.querySelector('.hint');
    if (existingHint) {
        existingHint.remove();
    }
    
    feedback.appendChild(hintElement);
}

// Show the final results
function showResults() {
    const percentage = Math.round((score / 5) * 100);
    let message = `You scored ${score} out of 5 (${percentage}%)! `;
    
    if (percentage >= 80) {
        message += "Excellent work! You're a chemistry whiz!";
    } else if (percentage >= 60) {
        message += "Good job! Keep practicing to improve!";
    } else {
        message += "Keep trying! You'll get better with practice!";
    }
    
    questionText.textContent = message;
    answerInput.innerHTML = '';
    feedback.textContent = '';
    checkAnswerBtn.style.display = 'none';
    nextQuestionBtn.textContent = 'Try Again';
    nextQuestionBtn.style.display = 'inline-block';
    
    // Reset the next question index
    currentQuestionIndex = 0;
    score = 0;
    usedQuestionIndices = [];
}

// Get color based on element category
function getCategoryColor(category) {
    const colors = {
        'alkali-metal': '#FF9D00',
        'alkaline-earth': '#FFD700',
        'transition-metal': '#FF8080',
        'basic-metal': '#80D0FF',
        'semi-metal': '#A0FFA0',
        'non-metal': '#A0FFFF',
        'halogen': '#A0FFA0',
        'noble-gas': '#FFB0FF',
        'lanthanide': '#FFB0E0',
        'actinide': '#FF99CC',
        'unknown': '#CCCCCC'
    };
    return colors[category.toLowerCase()] || '#CCCCCC';
}

// Helper function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Element Info Modal functionality
const elementInfoBtn = document.getElementById('elementInfoBtn');
const elementInfoModal = document.getElementById('elementInfoModal');
const elementsGrid = document.getElementById('elementsGrid');
const closeBtn = document.querySelector('.close');

// Open modal when clicking the ELEMENTS button
elementInfoBtn.addEventListener('click', () => {
    elementInfoModal.style.display = 'block';
    populateElementsGrid();
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    elementInfoModal.style.display = 'none';
});

// Close modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === elementInfoModal) {
        elementInfoModal.style.display = 'none';
    }
});

// Populate the elements grid in the modal
function populateElementsGrid() {
    elementsGrid.innerHTML = ''; // Clear existing elements
    
    elements.forEach(element => {
        const elementItem = document.createElement('div');
        elementItem.className = `element-item ${element.category}`;
        elementItem.innerHTML = `
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-number">${element.number}</div>
        `;
        
        // Add click event to show element info
        elementItem.addEventListener('click', () => showElementInfo(element));
        
        elementsGrid.appendChild(elementItem);
    });
}

// Show detailed information about the selected element
function showElementInfo(element) {
    // Remove any existing info display
    const existingInfo = elementInfoModal.querySelector('.element-info-display');
    if (existingInfo) {
        existingInfo.remove();
    }
    
    // Create and append the info display
    const infoDisplay = document.createElement('div');
    infoDisplay.className = 'element-info-display';
    infoDisplay.style.display = 'block';
    
    // Format category for display
    const categoryName = element.category.replace('-', ' ');
    
    infoDisplay.innerHTML = `
        <h3>${element.name}</h3>
        <div style="font-size: 3rem; margin: 10px 0;">${element.symbol}</div>
        <p>Atomic Number: ${element.number}</p>
        <p>Symbol: ${element.symbol}</p>
        <div class="element-category ${element.category}">${categoryName}</div>
    `;
    
    // Add a button to select this element
    const selectBtn = document.createElement('button');
    selectBtn.className = 'btn';
    selectBtn.textContent = 'Add to Selection';
    selectBtn.style.marginTop = '15px';
    selectBtn.addEventListener('click', () => {
        // Add the element to the selection
        const elementToAdd = elements.find(el => el.number === element.number);
        if (elementToAdd) {
            selectedElements.push(elementToAdd);
            updateSelectedElements();
            updateMixButton();
            
            // Close the modal
            elementInfoModal.style.display = 'none';
            
            // Scroll to the selected elements
            const selectedElementsDiv = document.querySelector('.selected-elements');
            selectedElementsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
    
    infoDisplay.appendChild(selectBtn);
    elementInfoModal.querySelector('.modal-content').appendChild(infoDisplay);
    
    // Scroll to the info display
    infoDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
