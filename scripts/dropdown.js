document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', function() {
        console.log(`Selected value: ${this.value}`);
    });
});
