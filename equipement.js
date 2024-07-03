document.addEventListener('DOMContentLoaded', function() {
    const equipementContainer = document.getElementById('equipement-section');
    let equipementCounter = 1; // Counter for generating unique IDs

    // Function to apply input restrictions and convert to uppercase
    function handleInput(input) {
        // Remove special characters and convert to uppercase
        input.value = input.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    }

    // Function to apply MAC address mask
    function applyMacAddressMask(input) {
        let value = input.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

        // Ensure the length of the input does not exceed 12 characters
        if (value.length > 12) {
            value = value.slice(0, 12);
        }

        // Format the input by inserting colons after every two characters
        let formattedValue = '';
        for (let i = 0; i < value.length; i += 2) {
            if (i > 0) {
                formattedValue += ':';
            }
            formattedValue += value.substr(i, 2);
        }

        // Update the input field value with the formatted string
        input.value = formattedValue;
    }

    // Function to setup event listeners for an equipment item
    function setupEventListeners(item) {
        const snmacInput = item.querySelector('input[type="text"]');
        const radios = item.querySelectorAll('input[type="radio"]');
        
        // Add "Remove Line" button for all items except the first one
        if (equipementContainer.children.length > 2) {
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.classList.add('remove-equipement-btn');
            

            removeButton.addEventListener('click', function() {
                item.remove();
            });

            item.appendChild(removeButton);
        }
        tippy('.remove-equipement-btn', {
            content: 'Retirer',
            placement: 'right',
			theme: 'light-border',
        });
        snmacInput.addEventListener('input', function() {
            handleInput(snmacInput);
        });

        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (radio.id.includes('modem') || radio.id.includes('routeur') || radio.id.includes('onu')) {
                    snmacInput.removeAttribute('disabled');
                    applyMacAddressMask(snmacInput);
                } else {
                    handleInput(snmacInput);
                }
            });
        });
    }

    // Function to create a new equipment item
    function createNewEquipementItem() {
        // Create a new equipment item
        const newEquipementItem = document.createElement('div');
        newEquipementItem.classList.add('equipement-item');

        newEquipementItem.innerHTML = `
            <label for="snmac-${equipementCounter}">S/N / MAC:</label>
            <input id="snmac-${equipementCounter}" type="text">
            <div class="radio-group">
                <input type="radio" id="decodeur-${equipementCounter}" name="equipement-${equipementCounter}" value="Décodeur">
                <label for="decodeur-${equipementCounter}">Décodeur</label>

                <input type="radio" id="tivo-${equipementCounter}" name="equipement-${equipementCounter}" value="Tivo">
                <label for="tivo-${equipementCounter}">Tivo</label>

                <input type="radio" id="epico-${equipementCounter}" name="equipement-${equipementCounter}" value="Epico">
                <label for="epico-${equipementCounter}">Epico</label>

                <input type="radio" id="modem-${equipementCounter}" name="equipement-${equipementCounter}" value="Modem">
                <label for="modem-${equipementCounter}">Modem</label>

                <input type="radio" id="routeur-${equipementCounter}" name="equipement-${equipementCounter}" value="Routeur">
                <label for="routeur-${equipementCounter}">Routeur</label>

                <input type="radio" id="onu-${equipementCounter}" name="equipement-${equipementCounter}" value="ONU">
                <label for="onu-${equipementCounter}">ONU</label>

                <input type="radio" id="extendeur-${equipementCounter}" name="equipement-${equipementCounter}" value="Extendeur">
                <label for="extendeur-${equipementCounter}">Extendeur</label>
            </div>
        `;

        // Append the new equipment item to the container
        equipementContainer.appendChild(newEquipementItem);

        // Setup event listeners for the new item
        setupEventListeners(newEquipementItem);

        // Create "Add Equipment" button next to the new equipment item
        const addEquipementBtn = document.createElement('button');
        addEquipementBtn.classList.add('add-equipement-btn');
        addEquipementBtn.textContent = '+';
        newEquipementItem.appendChild(addEquipementBtn);
        
         // Initialize tooltips for newly added button
         tippy('.add-equipement-btn', {
            content: 'Ajouter',
            placement: 'right',
			theme: 'light-border',
        });


        // Increment the equipment counter for next item
        equipementCounter++;
    }

    // Event listener for initial creation of equipment item on script load
    createNewEquipementItem();

    // Event listener for equipementContainer to add new equipment item
    equipementContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-equipement-btn')) {
            createNewEquipementItem(); // Create new equipment item when button is clicked
        }
    });
});
