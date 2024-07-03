 // Dynamically import local scripts
 Promise.all([
    import('./scripts/pipeda.js'),
    import('./scripts/equipement.js'),
    import('./scripts/init.js'),
    import('./scripts/problem.js'),
    import('./scripts/dropdown.js'),
    import('./scripts/output.js'),
    import('./scripts/tippy.js')
])
.then((modules) => {
    // All scripts loaded successfully
    console.log('Scripts loaded:', modules);
})
.catch((errors) => {
    // Handle errors if any of the scripts fail to load
    console.error('Scripts failed to load:', errors);
});