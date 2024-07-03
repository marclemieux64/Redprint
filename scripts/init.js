function resetForm() {
    // Reset Pipeda section items
    document.getElementById('pipeda').checked = false;
    document.getElementById('pipeda2').checked = false;
    document.getElementById('update').selectedIndex = 0;
    document.getElementById('failed').selectedIndex = 0;
    document.getElementById('updated-container').style.display = 'none';
    document.getElementById('failed-container').style.display = 'none';
    document.getElementById('pipeda3').checked = false;

    // Reset Equipement section items
    document.getElementById('snmac-1').value = '';
    document.getElementById('decodeur-1').checked = false;
    document.getElementById('tivo-1').checked = false;
    document.getElementById('epico-1').checked = false;
    document.getElementById('modem-1').checked = false;
    document.getElementById('routeur-1').checked = false;
    document.getElementById('onu-1').checked = false;
    document.getElementById('extendeur-1').checked = false;



    // Reset Problem section items
    document.getElementById('legacy-error-code').selectedIndex = 0;
    document.getElementById('legacy-common-problem').selectedIndex = 0;
    document.getElementById('tivo-error-code').selectedIndex = 0;
    document.getElementById('tivo-common-problem').selectedIndex = 0;
    document.getElementById('epico-error-code').selectedIndex = 0;
    document.getElementById('epico-common-problem').selectedIndex = 0; 
    document.getElementById('internet-common-problem').selectedIndex = 0;
    document.getElementById('epon-common-problem').selectedIndex = 0;
    document.getElementById('voip-common-problem').selectedIndex = 0;
    document.getElementById('outage-code').value = '';

    // Reset action section items
    //Legacy action
    document.getElementById('dbrel').checked = false;
    document.getElementById('initl').checked = false;
    document.getElementById('dbrhl').checked = false;
    document.getElementById('refreshl').checked = false;
	document.getElementById('tv-pairing-info-legacy').checked = false;

    //Tivo action
    document.getElementById('dbret').checked = false;
    document.getElementById('connecttot').checked = false;
    document.getElementById('initcb').checked = false;
    document.getElementById('tv-pairing-info-tivo').checked = false;

    //Mini action
    document.getElementById('dbrem').checked = false;
    document.getElementById('Mini Option 2').checked = false;
    document.getElementById('Mini Option 3').checked = false;
    document.getElementById('Mini Option 4').checked = false;

    //Epico action
    document.getElementById('dbree').checked = false;
    document.getElementById('Epico Option 2').checked = false;
    document.getElementById('Epico Option 3').checked = false;
    document.getElementById('Epico Option 4').checked = false;

    //Internet action
    document.getElementById('Internet Option 1').checked = false;
    document.getElementById('Internet Option 2').checked = false;
    document.getElementById('Internet Option 3').checked = false;
    document.getElementById('Internet Option 4').checked = false;

    //Extendeur action
    document.getElementById('dbreex').checked = false;
    document.getElementById('Extendeur Option 2').checked = false;
    document.getElementById('Extendeur Option 3').checked = false;
    document.getElementById('Extendeur Option 4').checked = false;

    //Voip action
    document.getElementById('Voip Option 1').checked = false;
    document.getElementById('Voip Option 2').checked = false;
    document.getElementById('Voip Option 3').checked = false;
    document.getElementById('Voip Option 4').checked = false;

    //Appli action
    document.getElementById('app1').checked = false;
    document.getElementById('app2').checked = false;
    document.getElementById('app3').checked = false;
    document.getElementById('app4').checked = false;

    //Transfert section
    document.getElementById('transferttech').selectedIndex = 0;
    document.getElementById('transfertsac').selectedIndex = 0;
    document.getElementById('transfertretention').selectedIndex = 0;
    document.getElementById('transfertcommercial').selectedIndex = 0;
    document.getElementById('transfertontario').selectedIndex = 0;

    //Consult section
    document.getElementById('N2').checked = false;
    document.getElementById('Conseiller ressource').checked = false;
    document.getElementById('Intervention telephonique').checked = false;
    document.getElementById('Consult Option 4').checked = false;

    //Output section
    document.getElementById('output-text').value = '';

    // Optionally, trigger any other initialization logic needed
  }

  // Execute resetForm() on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', resetForm);