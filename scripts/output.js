function generatePlainTextOutput() {
    const pipedaValue = document.querySelector('input[name="pipeda"]:checked') ? document.querySelector('input[name="pipeda"]:checked').value : '';
    const pipeda2Value = document.querySelector('input[name="pipeda2"]:checked') ? document.querySelector('input[name="pipeda2"]:checked').value : '';
    const pipeda3Value = document.querySelector('input[name="pipeda3"]:checked') ? document.querySelector('input[name="pipeda3"]:checked').value : '';
    const failedValue = document.querySelector('select[name="failed"]').value;
    const updateValue = document.querySelector('select[name="update"]').value;

    // Collect SN/MAC and equipment values dynamically
    const equipementData = [];

    // Assuming equipementCounter is the total number of dynamically generated sets
    const equipementCount = 10; // Adjust this based on your actual count

    for (let i = 1; i <= equipementCount; i++) {
        const snmacElement = document.getElementById(`snmac-${i}`);
        const equipementType = document.querySelector(`input[name="equipement-${i}"]:checked`);

        if (snmacElement && equipementType) {
            const snmacValue = snmacElement.value;
            const equipementTypeValue = equipementType.value;
            equipementData.push(`${snmacValue}, ${equipementTypeValue}`);
        }
    }

    // Construct plain text output
    let plainTextOutput = `[Pipeda]\n`;

    if (pipedaValue) {
        plainTextOutput += `${pipedaValue}\n`;
    }

    if (pipeda2Value) {
        plainTextOutput += `${pipeda2Value}`;
        if (updateValue) {
            plainTextOutput += ' - ';
        }
    }

    if (updateValue) {
        plainTextOutput += `${updateValue}`;
    }

    if (pipeda3Value) {
        if (pipeda2Value) {
            plainTextOutput += ' - ';
        }
        plainTextOutput += `${pipeda3Value}`;
        if (updateValue || failedValue || equipementData.length > 0) {
            plainTextOutput += ' - ';
        }
    }

    if (failedValue) {
        plainTextOutput += `${failedValue}\n`;
    }

    plainTextOutput += `\n[Equipement impacté]\n`;

    if (equipementData.length > 0) {
        equipementData.forEach(data => {
            plainTextOutput += `${data}\n`;
        });
    }

    // Update the textarea or div with plain text output
    const outputTextArea = document.getElementById('output-text');
    if (outputTextArea) {
        outputTextArea.value = plainTextOutput;
    } else {
        console.error('Output textarea not found.');
    }
}

// Event listener for the output button
document.addEventListener('DOMContentLoaded', () => {
    const outputButton = document.getElementById('output-button');
    if (outputButton) {
        outputButton.addEventListener('click', generatePlainTextOutput);
    } else {
        console.error('Output button not found.');
    }
});
