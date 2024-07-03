document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for the pipeda radio buttons
    document.querySelectorAll('input[name="pipeda"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const updatedContainer = document.getElementById('updated-container');
            const failedContainer = document.getElementById('failed-container');
            const updateDropdown = document.getElementById('update'); // Dropdown menu
            const failedDropdown = document.getElementById('failed'); // Dropdown menu

            // Show/hide containers based on the selected radio button
            if (this.value === 'Pipeda réussi') {
                updatedContainer.style.display = 'none';
                failedContainer.style.display = 'none';
                updateDropdown.value = ''; // Reset update dropdown
                failedDropdown.value = ''; // Reset failed dropdown
            } else if (this.value === 'Pipeda réussi et contact mis à jour') {
                updatedContainer.style.display = 'block';  // Show updated container
                failedContainer.style.display = 'none';    // Hide failed container
                failedDropdown.value = ''; // Reset failed dropdown
            } else if (this.value === 'Pipeda Échoué') {
                updatedContainer.style.display = 'none';    // Hide updated container
                failedContainer.style.display = 'block';   // Show failed container
                updateDropdown.value = ''; // Reset update dropdown
            } else {
                updatedContainer.style.display = 'none';    // Hide both containers if none selected
                failedContainer.style.display = 'none';
                updateDropdown.value = ''; // Reset update dropdown
                failedDropdown.value = ''; // Reset failed dropdown
            }
        });
    });
});
