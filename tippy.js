
document.addEventListener('DOMContentLoaded', function() {
    let tippyInstance = null;

    // Initialize Tippy instance for #tivo-code-info
    tippy('#tivo-code-info', {
        content: '', 
		theme: 'light-border', 
        placement: 'right',
        arrow: true,
        allowHTML: true,
        animation: 'perspective-extreme',
        interactive: true,
		trigger: 'focus',
		hideOnClick: true,
        onCreate(instance) {
            tippyInstance = instance; // Store the instance for later use
        },
    });

    // Function to update tooltip content
    function updateTooltipContent(content) {
        if (tippyInstance) {
            tippyInstance.setContent(content); // Update tooltip content
        } else {
            console.error('Tippy instance is not initialized.');
        }
    }

    // Event listener for select box change
    const selectBox = document.getElementById('tivo-error-code');
    if (selectBox) {
        selectBox.addEventListener('change', function() {
            const selectedValue = selectBox.value;

            // Check if the selectedValue is empty
            if (selectedValue === '') {
                if (tippyInstance) {
                    tippyInstance.hide(); // Hide tooltip if value is empty
                }
                return;
            }

            // Example: Determine tooltip content based on selected value
            let tooltipContent = '';

            switch(selectedValue) {
                case 'V52':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Problématique de chaines
<br><br>
<b>Description de l'erreur:</b>
<br>
Erreur V52 sur une chaine en direct<br><br>
<b>Impact:</b>
<br>V52 recherche de signal pour cette chaine<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique de signal RF ou Panne<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>1. Faire les vérifications du câblage. Si bien visé et/ou dévisser/revisser<br>
2. Vérifier, s’il y a eu des changements de mux(fréquences) dans les maintenances passé. Il suffit de faire un INIT et de redémarrer par le menu aide pour qu’il prenne le changement.<br>
3. Vérifier les autres canaux du MUX. Si tous les canaux du MUX sont en trouble, envoyer un tech.<br>
4. Vérifier si le problème affecte les autre décodeurs<br>
5. Si un seul canal du MUX est touché, appeler N2 pour vérifier si panne<br><br>
<br><br>
</div>`;
        break;
    case 'V53':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Problématique de chaines
<br><br>
<b>Description de l'erreur:</b>
<br>
V53 sur une chaine en direct<br><br>
<b>Impact:</b>
<br>Erreur V53 en tentant de syntoniser une chaîne<br><br>
<b>Causes les plus fréquentes: </b>
<br>Normalement, cette erreur indique un problème de signal. Par contre, cette erreur peut être dû à une mise à jour du décodeur.<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>Si le problème semble être arrivé subitement pendant l’écoute ou suite à une mise à jour TIVO: Redémarrez le décodeur principale. Si le problème persiste, traitez le problème comme étant RF(signal)<br><br>
<br><br>
</div>`;
        break;
    case 'V56':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Chaine non autorisé
<br><br>
<b>Description de l'erreur:</b>
<br>
Problématique lorsque le client tente de syntoniser une chaine, ceci lui indique un code V-56 et que l'abonnement est requis<br><br>
<b>Impact:</b>
<br>Possibilité que le client n'ai pas accès à une chaine qu'il est abboné ou qu'il doit s'abonner à la chaine.<br><br>
<b>Causes les plus fréquentes: </b>
<br>Erreur de service de la part du client ou problématique d'approvsionnement au niveau du décodeur / compass<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifier que la chaine fait bien partie du service du client.<br>
2. Vérifier s'il y a une panne. <br>
3. Si la chaine n'est pas au dossier du client, référez le vers le mon compte pour les changements ou au service à la clientèle.<br>
4. Si la chaine est bien dans le dossier, tentez un Init suivi d'un refresh sur le 4k/t6<br>
5. Si le problème persiste tentez une reapp VSD suivi d'un init et refresh.<br>
6. Faire un billet CGIT pour investigation si ces procédures ne fonctionnent pas. <br><br>
<br><br>
</div>`;
        break;
		 case 'V58':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Problématique de chaines
<br><br>
<b>Description de l'erreur:</b>
<br>
V58 sur les postes en direct<br><br>
<b>Impact:</b>
<br>Client est incapble de lire les postes en direct mentionne qu'il n'est pas abonner à la chaine. <br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique d'approvisionnement au DAC, chaines n'est pas dans le forfait du client.<br><br>
<b>Autres erreurs possible:</b>
<br>D256<br><br>
<b>Solution pour la problématique: </b>
<br><br>1. Vérifier si le client a bien la chaîne à son forfait<br>
SI NON, diriger le client vers le service à la clientèle pour abonnement.<br>
Si OUI, passer à l’étape 2<br>
2. Faire un INIT sur la CableCard. S’assurer que l’image a coupée sur un canal fonctionnel. Si ca ne coupe pas, faire redémarrer le décodeur et refaire un INIT. Si l’image ne coupe pas la CableCard en défectueuse.<br>
3. Si l’image coupe sur l’INIT mais que le canal demande toujours un abonnement, faire un réapprovisionnement VSD. Après la réapro, faire un refresh , suivi d'un INIT.<br>
4. Si ca ne fonctionne toujours pas, faire un processus guidé (même si le line up et le code postal semble bon)<br>
5. Si le problème persiste après toutes les manipulations, remplir un Billet N2 avec les détails des manipulations est les chaînes affectés. <br><br>
<br><br>
</div>`;
        break;
    case 'V60':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
HDMI
<br><br>
<b>Description de l'erreur:</b>
<br>
HDMI non permis, protocole HDCP en problématique<br><br>
<b>Impact:</b>
<br>Le client ne verra pas l'image sur le décodeur, et pourrait entendre le son avec l'erreur V60 affiché à l'écran<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique HDMI, port défectueux sur le décodeur, tv en problématique, port HDMI du téléviseur en problème, protocole HDCP en problématique.<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>1. Faire un Handhsake HDMI en débranchant le fil du décodeur et de la TV et le rebrancher par la suite.
2. Tenter de voir si la problématique est sur tout les chaines, syntoniser un autre poste<br>
3. Vérifier si le tout est fonctionnel dans un autre port de la télévision du client.<br>
4. Tenter de changer le fil HDMI<br>
5. Tentez de redémarrer le décodeur Tivo.<br>
6. Si le client à une barre de son ou autre appareil qui fait le relais vers la télévision , tentez de brancher le fil directement dans le téléviseur.<br>
7. En dernier lieu, appliquer le processus de migration TiVotoEPICO<br><br>
<br><br>
</div>`;
        break;
    case 'V63':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Erreur de chaines
<br><br>
<b>Description de l'erreur:</b>
<br>
Erreur V63 - D256 - D261<br><br>
<b>Impact:</b>
<br>Client voit l'erreur V63 ou D256 sur les chaines en direct, peu être toutes les chaines ou seulement certaines<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique de signal ou de cablecard<br><br>
<b>Autres erreurs possible:</b>
<br>D256, V63, V58<br><br>
<b>Solution pour la problématique: </b>
<br>Si la problématique implique toutes les chaines:
Faire un connect to TiVo suivi d’un redémarrage. Tester refresh et init , Ca ca ne fonctionne pas, envoyer un technicien<br><br>

Si la problématique survient sur les chaines VNC/SDV <br><br>
1. Vérifier les câblages. (SDV/VNC utilise des Freq RF une fois la requête pour la canal fait)<br>
2. Problème persiste, faire un INIT – aller sur une chaîne avec le client pour vous assurer que l’écran devient noir quelques secondes pour être certain que la commande a passé.
(suite à une maintenance, l’INIT va donner les bonnes fréquences à la “CableCard”)<br>
3. Si l’init ne passe pas, redémarrer le T6 pour “dégeler” la CableCard<br>
4. Retenter un init en s’assurant que le deco réagi<br>
5. Si l’init ne passe pas envoyer un tech. (CableCard défectueuse)<br>
6. Si l’INIT a passé vérifier avec le client si ca fonctionne<br>
7. Si ca ne fonctionne pas, faire vérifier par N2 si il y a une panne.<br>
8. En dernier lieu, appliquer le processus de migration TiVotoEPICO<br><br>
<br><br>
</div>`;
        break;
    case 'V66':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Affichage de chaines
<br><br>
<b>Description de l'erreur:</b>
<br>
L'appareil TiVo ne peut afficher aucune chaîne télé. <br><br>
<b>Impact:</b>
<br>V66 sur live TV<br><br>
<b>Causes les plus fréquentes: </b>
<br>La problématique est souvent causé par la cablecard, les branchements ou l'équipement<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifier les branchement au niveau du décodeur.<br>
2. Tenter un init et vérifier si la chaine change d'erreur ou cesse de fonctionner.<br>
3. Tenter un redémarrage de l'appareil tivo principale.<br>
4. En dernier lieu, appliquer le processus de migration TiVotoEPICO<br><br>
<br><br>
</div>`;
        break;
    case 'V70':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Problème de famille
<br><br>
<b>Description de l'erreur:</b>
<br>
V70 problématique de famille souvent après un echange postal<br><br>
<b>Impact:</b>
<br>V70 sur le mini/smartbox tivo<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique dans la famille Tivo<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>Faire un “réapprovisionnement TiVo” suivi d’un  “tester connexion internet” sur le T6/4K.<br>
Continuer/Recommencer le processus guidé sur le MINI.<br><br>
<br><br>
</div>`;
        break;
    case 'V87':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Connexion
<br><br>
<b>Description de l'erreur:</b>
<br>
Erreur de connectivité<br><br>
<b>Impact:</b>
<br>V871 = en Ethernet<br>
V872 = en MOCA<br>
V874 = en Ethernet<br>
V875 = en MOCA<br><br>
<b>Causes les plus fréquentes: </b>
<br>Le problème est généralement sur les Minis/smartbox qui ne peuvent pas communiquer avec le T6/4K.<br><br>
<b>Autres erreurs possible:</b>
<br>V87 - V871- V872 - V873 - V874 - V875 - V876<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifier que le modem est en ligne. Si non, c’est la source du problème.<br>
2. Si le modem est en ligne, vérifier si l’appareil est détecté physiquement dans l'interface du modem (tous les modems) ou diag portal (docsis 3.0 seulement) 
dans: DIAG PORTAL/Router sans-fils/Routeur/<br>
3. Si l’appareil avec V87X n’est pas détecté physiquement, vérifier le branchement du coax. SI OK débranchez l’appareil(Mini), et faire un “tester connexion” sur le décodeur principal avant de le rebrancher.
Si l’appareil est détecté physiquement, faire un redémarrage du Modem.<br>
4. Si ça ne fonctionne pas après le point #3, redémarrez les autres appareils.<br>
5. Si ça ne fonctionne toujours pas, vous pouvez regarder avec le client s’il y a une possibilité de passer un fils rj-45(branchement ethernet) entre le modem et le mini en trouble.<br>
6. En dernier lieu, appliquer le processus de migration TiVotoEPICO<br><br>
<br><br>
</div>`;
        break;
    case 'V112':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Problématique de connexion
<br><br>
<b>Description de l'erreur:</b>
<br>
Erreur de connexion<br><br>
<b>Impact:</b>
<br>Client a plusieurs problématique lié avec la connexion internet moca<br><br>
<b>Causes les plus fréquentes: </b>
<br>1. Ce message d'erreur s'affiche si la latence de connexion entre les appareils est trop élevée et que le contenu ne peut pas être diffusé. 
2. Les réseaux domestiques rencontrant des problèmes de latence peuvent ne pas être en mesure d'initier une diffusion.
3. Le streaming n'est pris en charge que sur les appareils connectés à votre réseau local.<br><br>
<b>Autres erreurs possible:</b>
<br>V112, V113 et V115<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifier l’état du Modem. Online, Ping bien, bridge mode, approvisionnement, etc. Redémarrer le Modem/Routeur suivi d’un connect to tivo si le modem semble ok<br>
2. Redémarrer le décodeur<br>
3. Vérifier si le ENP est visible par le mini<br><br>
<br><br>
</div>`;
        break;
    case 'V113':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Problématique de connexion
<br><br>
<b>Description de l'erreur:</b>
<br>
Erreur de connexion<br><br>
<b>Impact:</b>
<br>Client a plusieurs problématique lié avec la connexion internet moca<br><br>
<b>Causes les plus fréquentes: </b>
<br>1. Ce message d'erreur s'affiche si la latence de connexion entre les appareils est trop élevée et que le contenu ne peut pas être diffusé. 
2. Les réseaux domestiques rencontrant des problèmes de latence peuvent ne pas être en mesure d'initier une diffusion.
3. Le streaming n'est pris en charge que sur les appareils connectés à votre réseau local.<br><br>
<b>Autres erreurs possible:</b>
<br>V112, V113 et V115<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifier l’état du Modem. Online, Ping bien, bridge mode, approvisionnement, etc. Redémarrer le Modem/Routeur suivi d’un connect to tivo si le modem semble ok<br>
2. Redémarrer le décodeur<br>
3. Vérifier si le ENP est visible par le mini<br><br>
<br><br>
</div>`;
        break;
    case 'V115':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Problématique de connexion
<br><br>
<b>Description de l'erreur:</b>
<br>
Erreur de connexion<br><br>
<b>Impact:</b>
<br>Client a plusieurs problématique lié avec la connexion internet moca<br><br>
<b>Causes les plus fréquentes: </b>
<br>1. Ce message d'erreur s'affiche si la latence de connexion entre les appareils est trop élevée et que le contenu ne peut pas être diffusé. 
2. Les réseaux domestiques rencontrant des problèmes de latence peuvent ne pas être en mesure d'initier une diffusion.
3. Le streaming n'est pris en charge que sur les appareils connectés à votre réseau local.<br><br>
<b>Autres erreurs possible:</b>
<br>V112, V113 et V115<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifier l’état du Modem. Online, Ping bien, bridge mode, approvisionnement, etc. Redémarrer le Modem/Routeur suivi d’un connect to tivo si le modem semble ok<br>
2. Redémarrer le décodeur<br>
3. Vérifier si le ENP est visible par le mini<br><br>
<br><br>
</div>`;
        break;
    case 'V126':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD/ENP
<br><br>
<b>Description de l'erreur:</b>
<br>
V126 Erreur de VSD/ENP<br><br>

<b>Impact :</b>
<br>Client(e) n'arrive pas à louer un contenus précis sur la VSD ou a écouter du contenu enregistré.<br><br>

Erreur VSD : "The show you requested could not be found. Please try again."<br>
Erreur ENP : "Recording Not Found"<br><br>

<b>Autres erreurs possible:</b>
<br>N/A<br><br>

<b>Solution pour la problématique: </b><br>
1. Redémarrez le décodeur principal.<br>
2. Allez dans le menu du décodeur secondaire pour sélectionner à nouveau le bon DVR. Si le bon est déjà coché, il doit être sélectionné de nouveau. 
<a href="https://newintranet.cogeco.com/QC/PUBLICATION/VIEW/STACREVAMP/15803" target="_blank">Lien</a> vers la procédure.<br>
3. Lancer une Connexion au Service TiVo sur le décodeur secondaire. <br><br>

Si le problème persiste, remplir un Billet N2 avec les détails de la programmation sélectionnée, le chemin pour y accéder ainsi que vos étapes de dépannage.<br><br>
<br><br>
</div>`;
        break;
    case 'V202':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
Message d’erreur ''The show you requested is no longer available. Please try again in a few minutes''.<br><br>
<b>Impact:</b>
<br>Client(e) voit une erreur sur la VSD lorsqu'il tente de louer du contenu<br><br>
<b>Causes les plus fréquentes: </b>
<br>Souvent dû aux autorisations VSD (non-actif) et au contenue en problématique <br><br>
<b>Autres erreurs possible:</b>
<br>V217, V202, V218, V222<br><br>
<b>Solution pour la problématique: </b>
<br>1. Les services VSD/TAC pourraient ne pas être activé. Vérifier par compass.<br>
2. Peut être un problème de contenu. Il est possible de faire le teste ici si c’est un contenu gratuit.<br>
3. Redémarrer le décodeur du client . <br>
3. Remplir le formulaire BILLET VSD (Problèmes de contenu)<br>
4. Le contenu pourrait avoir été retiré mais le client le voit encore dans “Mes Locations”<br>
5. Le contenu pourrait avoir été retiré dans les secondes après que le client ait cliqué sur la pochette.<br><br>
<br><br>
</div>`;
        break;
    case 'V205':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
V213 erreur VSD<br><br>
<b>Impact:</b>
<br>****Qu'est-ce que le client aura à l'écran***<br><br>
<b>Causes les plus fréquentes: </b>
<br>****Ce qui genere le problème.***<br><br>
<b>Autres erreurs possible:</b>
<br>V213, V205, V454, (rarement V206)<br><br>
<b>Solution pour la problématique: </b>
<br>Une perte de connexion peut causer ces erreurs. Une vérification du câblage est conseillé. (Problème intermitent)<br><br>
Si le client n'est pas capable d'accéder à la VSD (erreur en allant dans la VSD. Ne se rend pas au contenu), Faire les manipulations suivantes:<br>
1. Réapprovisionnement  tivo (peut être fait en même temps que le BDC de retrait ou ajout VSD)<br>
2. Réapprovisionnement VSD (Retrait/Ajout)<br>
3. Connect to TIVO<br>
4. Reboot t6/4K

Si le problème ne se résout pas vous devez aller chercher 2 données importante pour la résolution avec le client, dans le décodeur.
Voici le chemin:
Accueil Tivo / MENU / AIDE / Renseignements sur le compte et le système / Diagnostiques / pages 14 (appuyez 13 fois vers le bas)

AuthenticationState  (3eme ligne)
PartnerCustomerId   (7eme ligne)  #9150XXXXXXXXXXXXXXX
Ensuite vous pouvez remplir le formulaire CGIT<br>
<br><br>
<br><br>
</div>`;
        break;
    case 'V206':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
V206 , erreur dans la VSD<br><br>
<b>Impact:</b>
<br>Client ne peut louer ou visionner du contenu VSD<br><br>
<b>Causes les plus fréquentes: </b>
<br>Causé par une problématique de programation<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>1. Faire un redémarrage du décodeur règle souvent le problème<br>
2. Si le redémarrage ne fonctionne pas faire Réap Tivo / Connect / Reboot dans cet ordre<br><br>
<br><br>
</div>`;
        break;
    case 'V207':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
V207 , erreur dans la VSD<br><br>
<b>Impact:</b>
<br>Client ne peut louer ou visionner du contenu VSD<br><br>
<b>Causes les plus fréquentes: </b>
<br>Client a dépassé la limite de location pour le mois.<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>1. Tentez un redémarrage du décodeur . <br>
2. Le client n'est probablement pas au courant de la limite de location de 500$ sur la VSD. Veuillez l'aviser de cette limitation.<br><br>
<br><br>
</div>`;
        break;
    case 'V213':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
V213 erreur VSD<br><br>
<b>Impact:</b>
<br>****Qu'est-ce que le client aura à l'écran***<br><br>
<b>Causes les plus fréquentes: </b>
<br>****Ce qui genere le problème.***<br><br>
<b>Autres erreurs possible:</b>
<br>V213, V205, V454, (rarement V206)<br><br>
<b>Solution pour la problématique: </b>
<br>Une perte de connexion peut causer ces erreurs. Une vérification du câblage est conseillé. (Problème intermitent)<br><br>
Si le client n'est pas capable d'accéder à la VSD (erreur en allant dans la VSD. Ne se rend pas au contenu), Faire les manipulations suivantes:<br>
1. Réapprovisionnement  tivo (peut être fait en même temps que le BDC de retrait ou ajout VSD)<br>
2. Réapprovisionnement VSD (Retrait/Ajout)<br>
3. Connect to TIVO<br>
4. Reboot t6/4K

Si le problème ne se résout pas vous devez aller chercher 2 données importante pour la résolution avec le client, dans le décodeur.
Voici le chemin:
Accueil Tivo / MENU / AIDE / Renseignements sur le compte et le système / Diagnostiques / pages 14 (appuyez 13 fois vers le bas)

AuthenticationState  (3eme ligne)
PartnerCustomerId   (7eme ligne)  #9150XXXXXXXXXXXXXXX
Ensuite vous pouvez remplir le formulaire CGIT<br>
<br><br>
<br><br>
</div>`;
        break;
    case 'V217':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
Message d’erreur ''The show you requested is no longer available. Please try again in a few minutes''.<br><br>
<b>Impact:</b>
<br>Client(e) voit une erreur sur la VSD lorsqu'il tente de louer du contenu<br><br>
<b>Causes les plus fréquentes: </b>
<br>Souvent dû aux autorisations VSD (non-actif) et au contenue en problématique <br><br>
<b>Autres erreurs possible:</b>
<br>V217, V202, V218, V222<br><br>
<b>Solution pour la problématique: </b>
<br>1. Les services VSD/TAC pourraient ne pas être activé. Vérifier par compass.<br>
2. Peut être un problème de contenu. Il est possible de faire le teste ici si c’est un contenu gratuit.<br>
3. Redémarrer le décodeur du client . <br>
3. Remplir le formulaire BILLET VSD (Problèmes de contenu)<br>
4. Le contenu pourrait avoir été retiré mais le client le voit encore dans “Mes Locations”<br>
5. Le contenu pourrait avoir été retiré dans les secondes après que le client ait cliqué sur la pochette.<br><br>
<br><br>
</div>`;
        break;
    case 'V218':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
Message d’erreur ''The show you requested is no longer available. Please try again in a few minutes''.<br><br>
<b>Impact:</b>
<br>Client(e) voit une erreur sur la VSD lorsqu'il tente de louer du contenu<br><br>
<b>Causes les plus fréquentes: </b>
<br>Souvent dû aux autorisations VSD (non-actif) et au contenue en problématique <br><br>
<b>Autres erreurs possible:</b>
<br>V217, V202, V218, V222<br><br>
<b>Solution pour la problématique: </b>
<br>1. Les services VSD/TAC pourraient ne pas être activé. Vérifier par compass.<br>
2. Peut être un problème de contenu. Il est possible de faire le teste ici si c’est un contenu gratuit.<br>
3. Redémarrer le décodeur du client . <br>
3. Remplir le formulaire BILLET VSD (Problèmes de contenu)<br>
4. Le contenu pourrait avoir été retiré mais le client le voit encore dans “Mes Locations”<br>
5. Le contenu pourrait avoir été retiré dans les secondes après que le client ait cliqué sur la pochette.<br><br>
<br><br>
</div>`;
        break;
    case 'V222':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
Message d’erreur ''The show you requested is no longer available. Please try again in a few minutes''.<br><br>
<b>Impact:</b>
<br>Client(e) voit une erreur sur la VSD lorsqu'il tente de louer du contenu<br><br>
<b>Causes les plus fréquentes: </b>
<br>Souvent dû aux autorisations VSD (non-actif) et au contenue en problématique <br><br>
<b>Autres erreurs possible:</b>
<br>V217, V202, V218, V222<br><br>
<b>Solution pour la problématique: </b>
<br>1. Les services VSD/TAC pourraient ne pas être activé. Vérifier par compass.<br>
2. Peut être un problème de contenu. Il est possible de faire le teste ici si c’est un contenu gratuit.<br>
3. Redémarrer le décodeur du client . <br>
3. Remplir le formulaire BILLET VSD (Problèmes de contenu)<br>
4. Le contenu pourrait avoir été retiré mais le client le voit encore dans “Mes Locations”<br>
5. Le contenu pourrait avoir été retiré dans les secondes après que le client ait cliqué sur la pochette.<br><br>
<br><br>
</div>`;
        break;
    case 'V226':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
Erreur VSD V226<br><br>
<b>Impact:</b>
<br>Le client aura la problématique V226 lorsqu'il tente de louer un film ou un contenue de chaine sur demande.<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique d'approvisionnement/configuration ou au niveaux du VSD non actif dans compass<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>
-Si le message de cable card pairing est inscrit. Notez le CableCARD ID, le Host ID et le Data, communiquez avec le CGIT qui corrigera la situation.<br>
-Vérifiez si le service de VSD est bien actif dans compass.<br>
-Confirmez si la problématique est sur plusieurs contenus ou seulement sur certains. <br>
      -Si l’erreur se produit seulement sur un contenu en particulier:
         Faire un billet CGIT avec ces informations:<br>
         Numéro de compte de facturation<br>
         Chemin emprunter pour aller au contenu en problème<br>
         Titre ou section de la vsd en problème<br><br>
       -Si l'erreur est sur tout le contenu:<br>
        Vérifier si tout est OK dans Diag. ( Famille, TIER, Fonctionnalités, Etc.)<br>
        Faire un Réapprovisionnement TiVo si requis suivis de connect.<br>
        Si les informations erronés sont corigées, faire un retrait/ajout de la vsd par la suite.  <br><br>

Si le problème persiste faire un Billet CGIT pas la suite avec les informations suivantes:<br>
Numéro de compte de facturation<br>
         Chemin emprunter pour aller au contenu en problème<br>
         Titre ou section de la vsd en problème<br><br>
En dernier lieu, appliquer le processus de migration TiVotoEPICO<br><br>
<br><br>
</div>`;
        break;
    case 'V301':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
V301 Erreur de VSD<br><br>
<b>Impact:</b>
<br>Client(e) n'est pas capable d'aller sur son menu de VSD, Il(Elle) voit l'erreur V301<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b><br>
1. Faire un reset UI. Dans l'accueil TiVo faire: pouce rouge -- pouce vert -- Play -- Play<br>
2. Si ca ne fonctionne toujours pas, faire un Réapprovisionnement TIVO suivi d’un Connect et d’un Redémarrer<br>
3. Si ca ne fonctionne toujours pas, remplir un Billet N2 <br><br>
<br><br>
</div>`;
        break;
    case 'V312':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Application en erreur
<br><br>
<b>Description de l'erreur:</b>
<br>
V312 Application en erreur youtube, netflix, etc <br>Peut aussi être une erreur V315 ou V337<br><br>
<b>Impact:</b>
<br>Il y deux scénarios:
1. Client reçoit une message d’erreur avec le code V312 indiquant que l’application est cour de chargement quand il essaye d’ouvrir une application TIVO (Youtube, Netflix)
2. Client reçoit une message d’erreur avec le code V312 avec la mention  “Impossible de se connecter” quand il essaye d’ouvrir l’application NETFLIX
<br><br>
<b>Causes les plus fréquentes: </b>
<br>Mauvaises autorisation/approvisionnement sur le cloud TiVo, erreur de l'application<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>Si c'est le 1e symptome:<br>
1. Vérifier si les tiers sont bons  dans diag portal/ Le Decodeur/ Propriété du périphérique <br>
2. Faire un réapprovisionnement TIVO<br>
3. Faire 2 connect et un reboot de/des appareils.<br>
4. Tester si ca fonctionne. Si le problème persiste, tester une autre appication tel que Netflix ou Youtube remplir un Billet CGIT<br><br>
Si c'est le 2e Symptome:<br>
1. Faire aller le client dans ‘Détails” dans l’application NETFLIX<br>
2. Lui demander de choisir “se déconnecter”<br>
3. Le logo de chargement TIVO va s’afficher.<br>
4. Après quelques secondes demander au client de faire “live TV”<br>
5. Retourner sur l’application et le client devrait arriver à l’ouverture de session, il pourra se reconnecter à son compte NETFLIX et le problème devrait être corrigé.
 <br><br>
<br><br>
</div>`;
        break;
    case 'V315':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Application en erreur
<br><br>
<b>Description de l'erreur:</b>
<br>
V312 Application en erreur youtube, netflix, etc <br>Peut aussi être une erreur V315 ou V337<br><br>
<b>Impact:</b>
<br>Il y deux scénarios:
1. Client reçoit une message d’erreur avec le code V312 indiquant que l’application est cour de chargement quand il essaye d’ouvrir une application TIVO (Youtube, Netflix)
2. Client reçoit une message d’erreur avec le code V312 avec la mention  “Impossible de se connecter” quand il essaye d’ouvrir l’application NETFLIX
<br><br>
<b>Causes les plus fréquentes: </b>
<br>Mauvaises autorisation/approvisionnement sur le cloud TiVo, erreur de l'application<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>Si c'est le 1e symptome:<br>
1. Vérifier si les tiers sont bons  dans diag portal/ Le Decodeur/ Propriété du périphérique <br>
2. Faire un réapprovisionnement TIVO<br>
3. Faire 2 connect et un reboot de/des appareils.<br>
4. Tester si ca fonctionne. Si le problème persiste, tester une autre appication tel que Netflix ou Youtube remplir un Billet CGIT<br><br>
Si c'est le 2e Symptome:<br>
1. Faire aller le client dans ‘Détails” dans l’application NETFLIX<br>
2. Lui demander de choisir “se déconnecter”<br>
3. Le logo de chargement TIVO va s’afficher.<br>
4. Après quelques secondes demander au client de faire “live TV”<br>
5. Retourner sur l’application et le client devrait arriver à l’ouverture de session, il pourra se reconnecter à son compte NETFLIX et le problème devrait être corrigé.
 <br><br>
<br><br>
</div>`;
        break;
    case 'V337':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Application en erreur
<br><br>
<b>Description de l'erreur:</b>
<br>
V312 Application en erreur youtube, netflix, etc <br>Peut aussi être une erreur V315 ou V337<br><br>
<b>Impact:</b>
<br>Il y deux scénarios:
1. Client reçoit une message d’erreur avec le code V312 indiquant que l’application est cour de chargement quand il essaye d’ouvrir une application TIVO (Youtube, Netflix)
2. Client reçoit une message d’erreur avec le code V312 avec la mention  “Impossible de se connecter” quand il essaye d’ouvrir l’application NETFLIX
<br><br>
<b>Causes les plus fréquentes: </b>
<br>Mauvaises autorisation/approvisionnement sur le cloud TiVo, erreur de l'application<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>Si c'est le 1e symptome:<br>
1. Vérifier si les tiers sont bons  dans diag portal/ Le Decodeur/ Propriété du périphérique <br>
2. Faire un réapprovisionnement TIVO<br>
3. Faire 2 connect et un reboot de/des appareils.<br>
4. Tester si ca fonctionne. Si le problème persiste, tester une autre appication tel que Netflix ou Youtube remplir un Billet CGIT<br><br>
Si c'est le 2e Symptome:<br>
1. Faire aller le client dans ‘Détails” dans l’application NETFLIX<br>
2. Lui demander de choisir “se déconnecter”<br>
3. Le logo de chargement TIVO va s’afficher.<br>
4. Après quelques secondes demander au client de faire “live TV”<br>
5. Retourner sur l’application et le client devrait arriver à l’ouverture de session, il pourra se reconnecter à son compte NETFLIX et le problème devrait être corrigé.
 <br><br>
<br><br>
</div>`;
        break;
    case 'V454':
        tooltipContent = `Tooltip for V454`;
        break;
    case 'N13':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Problématique de configuration
<br><br>
<b>Description de l'erreur:</b>
<br>
Problématique du mini/4k<br><br>
<b>Impact:</b>
<br>Il y a un problème avec le service TiVo (N13)<br>
Il s'agit peut-être d'un problème temporaire avec le service ou votre connexion internet. Veuillez patienter quelques minutes puis réessayez<br>
Vérifier que votre coupe-feu ne bloque pas les ports UDP 37 et 123 ni les ports TCP 37,80,443,5005,5222,5223,7287,7288 ou 8000-80089<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique au niveau du décodeur ou de la connexion internet.<br><br>
<b>Autres erreurs possible:</b>
<br>N13, C12<br><br>
<b>Solution pour la problématique: </b>
<br>Un reset règle souvent la problématique, si jamais ceci n'est pas le cas vérifier la connexion internet. <br><br>
<br><br>
</div>`;
        break;
    case 'C2':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
MoCA
<br><br>
<b>Description de l'erreur:</b>
<br>
C2 - C4<br><br>
<b>Impact:</b>
<br>C2 ou C4<br><br>
<b>Causes les plus fréquentes: </b>
<br>Équipement rentrant en conflit avec le MoCa<br><br>
<b>Autres erreurs possible:</b>
<br>C2 -  C4<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifiez les branchements surtout le coax.<br>
2. Vérifier le moca dans le modem s'il est bien actif. <br>
2. Redémarrer le modem.<br>
4. Redémarrer le TiVo, chemin :<br>
Accueil TiVo &gt; Menu &gt; Aide &gt; Redémarrez votre appareil TiVo<br>
5. En dernier lieu, appliquer le processus de migration TiVotoEPICO<br><br>
<br><br>
</div>`;
        break;
    case 'C4':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
MoCA
<br><br>
<b>Description de l'erreur:</b>
<br>
C2 - C4<br><br>
<b>Impact:</b>
<br>C2 ou C4<br><br>
<b>Causes les plus fréquentes: </b>
<br>Équipement rentrant en conflit avec le MoCa<br><br>
<b>Autres erreurs possible:</b>
<br>C2 -  C4<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifiez les branchements surtout le coax.<br>
2. Vérifier le moca dans le modem s'il est bien actif. <br>
2. Redémarrer le modem.<br>
4. Redémarrer le TiVo, chemin :<br>
Accueil TiVo &gt; Menu &gt; Aide &gt; Redémarrez votre appareil TiVo<br>
5. En dernier lieu, appliquer le processus de migration TiVotoEPICO<br><br>
<br><br>
</div>`;
        break;
    case 'C12':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Problématique de configuration
<br><br>
<b>Description de l'erreur:</b>
<br>
Problématique du mini/4k<br><br>
<b>Impact:</b>
<br>Il y a un problème avec le service TiVo (N13)<br>
Il s'agit peut-être d'un problème temporaire avec le service ou votre connexion internet. Veuillez patienter quelques minutes puis réessayez<br>
Vérifier que votre coupe-feu ne bloque pas les ports UDP 37 et 123 ni les ports TCP 37,80,443,5005,5222,5223,7287,7288 ou 8000-80089<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique au niveau du décodeur ou de la connexion internet.<br><br>
<b>Autres erreurs possible:</b>
<br>N13, C12<br><br>
<b>Solution pour la problématique: </b>
<br>Un reset règle souvent la problématique, si jamais ceci n'est pas le cas vérifier la connexion internet. <br><br>
<br><br>
</div>`;
        break;
    case 'C27':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
MoCA
<br><br>
<b>Description de l'erreur:</b>
<br>
Conflit avec la connexion internet ou MoCA<br><br>
<b>Impact:</b>
<br>C27, C127, C130, C133<br><br>
<b>Causes les plus fréquentes: </b>
<br>Modem, problématique au niveau MoCA<br><br>
<b>Autres erreurs possible:</b>
<br>C27, C127, C130, C133<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifiez les branchements, surtout le coax.<br>
2. Vérifier si le mode MoCA dans le modem est bien actif. <br>
3. Vérifier si la propriété BACC MoCA est bien active. <br> (si n'est pas activé, CGIT peut le faire manuellement) <br>
4. Vérifier les phyrates de l'équipement MoCA. <br>
5. Redémarrer le modem.<br>
6. Redémarrer le TiVo, chemin :<br>
Accueil TiVo &gt; Menu &gt; Aide &gt; Redémarrez votre appareil TiVo<br><br>
<br><br>
</div>`;
        break;
    case 'C33':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
MoCA
<br><br>
<b>Description de l'erreur:</b>
<br>
Conflit avec la connexion internet ou MoCA<br><br>
<b>Impact:</b>
<br>C27, C127, C130, C133<br><br>
<b>Causes les plus fréquentes: </b>
<br>Modem, problématique au niveau MoCA<br><br>
<b>Autres erreurs possible:</b>
<br>C27, C127, C130, C133<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifiez les branchements, surtout le coax.<br>
2. Vérifier si le mode MoCA dans le modem est bien actif. <br>
3. Vérifier si la propriété BACC MoCA est bien active. <br> (si n'est pas activé, CGIT peut le faire manuellement) <br>
4. Vérifier les phyrates de l'équipement MoCA. <br>
5. Redémarrer le modem.<br>
6. Redémarrer le TiVo, chemin :<br>
Accueil TiVo &gt; Menu &gt; Aide &gt; Redémarrez votre appareil TiVo<br><br>
<br><br>
</div>`;
        break;
    case 'C127':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
MoCA
<br><br>
<b>Description de l'erreur:</b>
<br>
Conflit avec la connexion internet ou MoCA<br><br>
<b>Impact:</b>
<br>C27, C127, C130, C133<br><br>
<b>Causes les plus fréquentes: </b>
<br>Modem, problématique au niveau MoCA<br><br>
<b>Autres erreurs possible:</b>
<br>C27, C127, C130, C133<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifiez les branchements, surtout le coax.<br>
2. Vérifier si le mode MoCA dans le modem est bien actif. <br>
3. Vérifier si la propriété BACC MoCA est bien active. <br> (si n'est pas activé, CGIT peut le faire manuellement) <br>
4. Vérifier les phyrates de l'équipement MoCA. <br>
5. Redémarrer le modem.<br>
6. Redémarrer le TiVo, chemin :<br>
Accueil TiVo &gt; Menu &gt; Aide &gt; Redémarrez votre appareil TiVo<br><br>
<br><br>
</div>`;
        break;
    case 'C130':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
MoCA
<br><br>
<b>Description de l'erreur:</b>
<br>
Conflit avec la connexion internet ou MoCA<br><br>
<b>Impact:</b>
<br>C27, C127, C130, C133<br><br>
<b>Causes les plus fréquentes: </b>
<br>Modem, problématique au niveau MoCA<br><br>
<b>Autres erreurs possible:</b>
<br>C27, C127, C130, C133<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifiez les branchements, surtout le coax.<br>
2. Vérifier si le mode MoCA dans le modem est bien actif. <br>
3. Vérifier si la propriété BACC MoCA est bien active. <br> (si n'est pas activé, CGIT peut le faire manuellement) <br>
4. Vérifier les phyrates de l'équipement MoCA. <br>
5. Redémarrer le modem.<br>
6. Redémarrer le TiVo, chemin :<br>
Accueil TiVo &gt; Menu &gt; Aide &gt; Redémarrez votre appareil TiVo<br><br>
<br><br>
</div>`;
        break;
    case 'C133':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
MoCA
<br><br>
<b>Description de l'erreur:</b>
<br>
Conflit avec la connexion internet ou MoCA<br><br>
<b>Impact:</b>
<br>C27, C127, C130, C133<br><br>
<b>Causes les plus fréquentes: </b>
<br>Modem, problématique au niveau MoCA<br><br>
<b>Autres erreurs possible:</b>
<br>C27, C127, C130, C133<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifiez les branchements, surtout le coax.<br>
2. Vérifier si le mode MoCA dans le modem est bien actif. <br>
3. Vérifier si la propriété BACC MoCA est bien active. <br> (si n'est pas activé, CGIT peut le faire manuellement) <br>
4. Vérifier les phyrates de l'équipement MoCA. <br>
5. Redémarrer le modem.<br>
6. Redémarrer le TiVo, chemin :<br>
Accueil TiVo &gt; Menu &gt; Aide &gt; Redémarrez votre appareil TiVo<br><br>
<br><br>
</div>`;
        break;
    case 'C421':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
ENP introuvable
<br><br>
<b>Description de l'erreur:</b>
<br>
C421 le DVR hôte est introuvable<br><br>
<b>Impact:</b>
<br>C421 Le DVR hôte est introuvable.
Il peut y avoir un problème avec votre réseau domestique ou la connexion réseau sur votre appareil TiVo, ou l'appareil a peut-être été débranché.<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique au niveau du réseau moca ou au niveau du 4k/T6<br><br>
<b>Autres erreurs possible:</b>
<br>C422<br><br>
<b>Solution pour la problématique: </b>
<br>1. S’assurer que le T6/4K est bien connecté au service TIVO. (Connect)<br>
2. Redémarrer les appareils du réseau ( Modem, T6/4K et le mini en dernier et forcer un “Connect to tivo” sur le mini et le T6/4K si n’a pas été fait à l’étape 1.


 

<br><br>
<br><br>
</div>`;
        break;
    case 'C501':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Erreur de connexion
<br><br>
<b>Description de l'erreur:</b>
<br>
Erreur de connexion internet C501<br><br>
<b>Impact:</b>
<br>Impossible de se connecter a internet C501<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique au niveau d'internet, modem, réseau moca.<br><br>
<b>Autres erreurs possible:</b>
<br>N/A<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifiez que le modem est bien en ligne.<br>
2. Vérifiez que le moca est bien actif.<br>
3. Effectuez un “tester connexion internet” sur le tivo.<br>
4. Assurez-vous avec le client que le filage interne de la maison n’a pas été modifié.<br>
5. Est-ce que le décodeur a changé de pièce ?<br>
6. Est-ce que du filage a été modifié dans la maison ?<br>
7. Est-ce que le modem/emta a changé de place ?<br>
8. Est-ce que le client a tenté d’ajouter des décodeurs ?<br>
9. Si vous n’avez pas de connexion internet sur le T6/4k (tester connexion), voici ce que vous pouvez essayer<br>
10. Redémarrer le modem<br>
11. Redémarrez le T6/4k et retester votre connexion internet.<br>
12. En dernier lieu, appliquer le processus de migration TiVotoEPICO<br><br>
<br><br>
</div>`;
        break;
    case 'M59':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Erreur de chargement du guide. 
<br><br>
<b>Description de l'erreur:</b>
<br>
Code d'erreur qui s'affiche dans la navigation du guide lorsque le guide ne se met plus à jour<br><br>
<b>Impact:</b>
<br>Le client ne pourra navigué loin dans le guide ou l'empêche de voir ses informations sur celui-ci. <br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique au niveau du chargement des informations par internet, problématique de connexion au service tivo. <br><br>
<b>Autres erreurs possible:</b>
<br>M60, M63<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifier que l'internet est bien fonctionnel chez le client au niveau du modem et réseau moca.<br>
2. Si l'internet est fonctionnel, faire un test de connexion internet sur les appareils, si cela fonctionne, effectuer une connexion au service Tivo.<br>
3. Si le tout ne fonctionne pas redémarrer le modem, si la problématique persiste redémarrer ensuite le décodeur principale (4k/T6) .<br>
4. Tester de nouveau la connexion au service tivo.<br>
5. Si tout les tests n'ont pas fonctionner, créer un billet N2 qui sera escalader vers la DVC.  <br><br>
<br><br>
</div>`;
        break;
    case 'M60':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Erreur de chargement du guide. 
<br><br>
<b>Description de l'erreur:</b>
<br>
Code d'erreur qui s'affiche dans la navigation du guide lorsque le guide ne se met plus à jour<br><br>
<b>Impact:</b>
<br>Le client ne pourra navigué loin dans le guide ou l'empêche de voir ses informations sur celui-ci. <br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique au niveau du chargement des informations par internet, problématique de connexion au service tivo. <br><br>
<b>Autres erreurs possible:</b>
<br>M60, M63<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifier que l'internet est bien fonctionnel chez le client au niveau du modem et réseau moca.<br>
2. Si l'internet est fonctionnel, faire un test de connexion internet sur les appareils, si cela fonctionne, effectuer une connexion au service Tivo.<br>
3. Si le tout ne fonctionne pas redémarrer le modem, si la problématique persiste redémarrer ensuite le décodeur principale (4k/T6) .<br>
4. Tester de nouveau la connexion au service tivo.<br>
5. Si tout les tests n'ont pas fonctionner, créer un billet N2 qui sera escalader vers la DVC.  <br><br>
<br><br>
</div>`;
        break;
    case 'M62':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Sélection de chaînes
<br><br>
<b>Description de l'erreur:</b>
<br>
<p><br>
<strong>Description de l'erreur:</strong><br>
Code indiquant qu'un changement de chaînes à été effectué.<br>
<br>
<strong>Impact:</strong><br>
Le client recevra une notification comme quoi ses postes auront changés.<br>
<br>
<strong>Causes les plus fréquentes:</strong><br>
Changement de poste par compass via un bon de commande ou mon compte.<br>
<br>
<strong>Autres erreurs possible:</strong><br>
N/A<br>
<br>
1. Vérifier si la situation ce réfère à cette procédure (<a href="https://newintranet.cogeco.com/QC/PUBLICATION/VIEW/STACREVAMP/16068 target="_blank">Liste de chaînes à changée</a>)<br>
2. Vérifier la liste des chaînes sur le décodeur : Menu - réglages - paramètres des chaînes - liste des chaînes . Cochez ceux manquants<br>
3. Filtrer le guide avec ''tous'' pour voir l'ensemble des chaînes .<br>
4. Dans le cas ou un poste ne concorde pas avec le forfait du client (chaine non autorisé), faire un réapprovisionnement VSD, suivi d'un resfresh et init sur le décodeur.</p>

<p>&nbsp;</p>

<br><br>
</div>`;
        break;
    case 'M63':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Erreur de chargement du guide. 
<br><br>
<b>Description de l'erreur:</b>
<br>
Code d'erreur qui s'affiche dans la navigation du guide lorsque le guide ne se met plus à jour<br><br>
<b>Impact:</b>
<br>Le client ne pourra navigué loin dans le guide ou l'empêche de voir ses informations sur celui-ci. <br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique au niveau du chargement des informations par internet, problématique de connexion au service tivo. <br><br>
<b>Autres erreurs possible:</b>
<br>M60, M63<br><br>
<b>Solution pour la problématique: </b>
<br>1. Vérifier que l'internet est bien fonctionnel chez le client au niveau du modem et réseau moca.<br>
2. Si l'internet est fonctionnel, faire un test de connexion internet sur les appareils, si cela fonctionne, effectuer une connexion au service Tivo.<br>
3. Si le tout ne fonctionne pas redémarrer le modem, si la problématique persiste redémarrer ensuite le décodeur principale (4k/T6) .<br>
4. Tester de nouveau la connexion au service tivo.<br>
5. Si tout les tests n'ont pas fonctionner, créer un billet N2 qui sera escalader vers la DVC.  <br><br>
<br><br>
</div>`;
        break;
    case 'Cablecard ID - VSD':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
VSD
<br><br>
<b>Description de l'erreur:</b>
<br>
Lorsque le client tentera d'aller sur la VSD, une fenêtre sera affiché dans l'écran indiquant ceci: <br>
<img src="https://drive.google.com/uc?export=view&amp;id=1zUmlW7M2d1JvWGePgeZwIEXQGdEw83fl" style="height:400px; width:500px target="_blank"> <br><br>

1. Dans cette circonstance, Prenez en note les informations de Host ID, Cablecard ID et Data ou Dataword.<br>
2. Vous devez ensuite contacter un N2 qui pourra mettre à jour les informations.<br>
3. Suite à la mise à jour faite avec le N2 éffectuez un Init sur le décodeur, en confirmant bien qu'il à passer avec le client. <br>
4. Retester à nouveau la VSD avec le client. <br> <br>


			Publication intranet: <br><a href="https://newintranet.cogeco.com/QC/PUBLICATION/VIEW/STACREVAMP/17450 target="_blank">Publication</a>
<br><br>
</div>`;
        break;
    case 'D256':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Sélection de chaînes
<br><br>
<b>Description de l'erreur:</b>
<br>
<p><br><strong>Description de l'erreur:</strong><br>Canal temporairement indisponible&nbsp;<br><strong>Impact:</strong><br>Le message s'affiche si une chaîne est temporairement indisponible et l'utilisateur tente d'essayer de la syntoniser de nouveau<br><br><br><strong>Causes les plus fréquentes:</strong><br>Problème d'activation de la cablecard ; Chaîne pas dans le forfait<br><br><strong>Résolution:</strong></p>
<ol>
    <li>Assurez-vous que les câbles coaxiaux et les connexions sont en bon état de fonctionnement.</li>
    <li>aucun intermédiaire entre le câble coaxial et la prise entré du Tivo</li>
    <li>Refaire une configuration guidé de la configuration Tivo</li>
    <li>Vérifier le signal des autres services</li>
    <li>Assurez vous que le client est bien abonné à la chaîne.&nbsp;</li>
    <li>En dernier lieu, si le client est dans un secteur Epico, vous devez appliquer la procédure de migration. S'il n'est pas dans un secteur Epico, prenez rendez-vous.&nbsp;<br><br><br>&nbsp;</li>
</ol>
<p>&nbsp;</p>
<br><br>
</div>`;
        break;
    case 'D261':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Erreur de chaines
<br><br>
<b>Description de l'erreur:</b>
<br>
Erreur V63 - D256 - D261<br><br>
<b>Impact:</b>
<br>Client voit l'erreur V63 ou D256 sur les chaines en direct, peu être toutes les chaines ou seulement certaines<br><br>
<b>Causes les plus fréquentes: </b>
<br>Problématique de signal ou de cablecard<br><br>
<b>Autres erreurs possible:</b>
<br>D256, V63, V58<br><br>
<b>Solution pour la problématique: </b>
<br>Si la problématique implique toutes les chaines:
Faire un connect to TiVo suivi d’un redémarrage. Tester refresh et init , Ca ca ne fonctionne pas, envoyer un technicien<br><br>

Si la problématique survient sur les chaines VNC/SDV <br><br>
1. Vérifier les câblages. (SDV/VNC utilise des Freq RF une fois la requête pour la canal fait)<br>
2. Problème persiste, faire un INIT – aller sur une chaîne avec le client pour vous assurer que l’écran devient noir quelques secondes pour être certain que la commande a passé.
(suite à une maintenance, l’INIT va donner les bonnes fréquences à la “CableCard”)<br>
3. Si l’init ne passe pas, redémarrer le T6 pour “dégeler” la CableCard<br>
4. Retenter un init en s’assurant que le deco réagi<br>
5. Si l’init ne passe pas envoyer un tech. (CableCard défectueuse)<br>
6. Si l’INIT a passé vérifier avec le client si ca fonctionne<br>
7. Si ca ne fonctionne pas, faire vérifier par N2 si il y a une panne.<br>
8. En dernier lieu, appliquer le processus de migration TiVotoEPICO<br><br>
<br><br>
</div>`;
        break;
    case 'TA07':
        tooltipContent = `<div class="basic-info-container">
<b>Technologie:</b>
Tivo
<br><br>
<b>Type d'erreur:</b>
Sélection de chaînes
<br><br>
<b>Description de l'erreur:</b>
<br>
<p><br><strong>Description de l'erreur:</strong><br>Canal temporairement indisponible&nbsp;<br><strong>Impact:</strong><br>Le message s'affiche si une chaîne est temporairement indisponible et l'utilisateur tente d'essayer de la syntoniser de nouveau<br><br><br><strong>Causes les plus fréquentes:</strong><br>Problème d'activation de la cablecard ; Chaîne pas dans le forfait<br><br><strong>Résolution:</strong></p>
<ol>
    <li>Assurez-vous que les câbles coaxiaux et les connexions sont en bon état de fonctionnement.</li>
    <li>aucun intermédiaire entre le câble coaxial et la prise entré du Tivo</li>
    <li>Refaire une configuration guidé de la configuration Tivo</li>
    <li>Vérifier le signal des autres services</li>
    <li>Assurez vous que le client est bien abonné à la chaîne.&nbsp;</li>
    <li>En dernier lieu, si le client est dans un secteur Epico, vous devez appliquer la procédure de migration. S'il n'est pas dans un secteur Epico, prenez rendez-vous.&nbsp;<br><br><br>&nbsp;</li>
</ol>
<p>&nbsp;</p>
<br><br>
</div>`;
        break;
    default:
        tooltipContent = 'Default tooltip content';
}
            
            // Update the tooltip with the new content
            updateTooltipContent(tooltipContent);
        });
    } else {
        console.error('Element with ID "tivo-error-code" not found.');
    }

    // Tippy initialization for other elements
    tippy('#tv-pairing-info-legacy', {
        content: `
		<div class="container-b">
		<div class="column"
		<td><iframe name="I1" frameborder="1" scrolling="yes" src="https://setup.mynevo.com/?oem=UrcSupport&amp;User=mhnNw5&amp;Location=505" width="100%" height="600"></iframe>
							</div>
						<div class="column">
						<button type="button" id="atlas-reset">Déprogrammer une télécommande atlas</button>
						<button type="button" id="atlas-search">Recherche de code</button>
						<button type="button" id="atlas-tv-prog">Programation de la télévision</button>
						<button type="button" id="atlas-macro-prog">Programation d'une macro sur une touche</button>
						<button type="button" id="atlas-volume-lock">Vérouillage du volume</button>
						<button type="button" id="atlas-channel-unlock">Dévérouillage du contrôle des chaînes</button>
						<button type="button" id="atlas-channel-lock">Vérouillage du contrôle des chaînes cbl</button>
						<button type="button" id="atlas-preprog-key-code">Code pour touches pré-programées</button>
						<button type="button" id="atlas-flash-code">Flasher le code - suite à la recherche de code</button>
						<select name="Cable_Amp" size="1">
							<option>Select Code</option>
							<option selected="">ENP NOUVELLE ATLAS  0869</option>
							<option>ENP ancienne atlas 1376</option>
							<option>DCT non ENP : 0476, 1476</option>
							<option>ONN  atlas 0178</option>
							<option>Electrohome : 0381</option>
							<option>GE : 0047, 0051</option>
							<option>JVC/Sears : 0053, 1253, 1923</option>
							<option>LG : 0178, 1178, 0856</option>
							<option>Panasonic : 0250, 0051, 0650</option>
							<option>RCA : 0047, 1447, 2051, 1577, 0810</option>
							<option>Samsung : 0060, 0812</option>
							<option>Sharp : 0093, 0689</option>
							<option>Sony : 1100, 0000</option>
							<option>Toshiba : 0154, 0156, 0060, 1945</option>
							<option>Venturer : 1865</option>
							<option>Fluid : 0019</option>				
							<option disabled>----Bluray----</option>
							<option>Denon 2258</option>
							<option>Insigna 0675-2425-2596</option>
							<option>Integra 1769-2147</option>
							<option>JVC 2365</option>
							<option>LG 0741-1602</option>
							<option>Magnavox 0675 </option>
							<option>Marantz 2414</option>
							<option>Microsoft 2083</option>
							<option>NAD 2572</option>
							<option>Olevia 2331</option>
							<option>Onkyo 1769-2147</option>
							<option>Oppo 2545</option>
							<option>Panasonic 1641</option>
							<option>Philips 2084-2434</option>
							<option>Pionner 0142-2442</option>
							<option>RCA 1769</option>
							<option>Samsung 0199</option>
							<option>Sharp 2250-2561</option>
							<option>Sony 1516</option>
							<option>Sylvania 0675-2194</option>
							<option>Toshiba 1515-1769 </option>
							<option>Viore 2553</option>
							<option>Vizio 2563</option>
							<option>XBOX 2083</option>
							<option>Yamaha 2298</option>
							</select>
						</div>
						</div>
<style>
.container-b {
    display: flex;
    justify-content: space-between; /* Adjust spacing between columns */
    align-items: flex-start; /* Align items at the top of the container */
}

.column {
    flex: 1; /* Each column takes up equal space */
    padding: 10px; /* Optional: Add padding for spacing */
}

button {
    display: block;
    margin-bottom: 10px; /* Optional: Add margin between buttons */
	with: auto:
}
</style>
`,
        placement: 'right',
		theme: 'light-border',
		allowHTML: true,
		interactive: true,
		trigger: 'click',
		arrow: true,
		maxWidth: 'none',
		 onShow(instance) {
// Define tooltip content for each button
        const tooltips = {
            'atlas-reset': `<p>&nbsp;<b>&nbsp; -</b> Appuyez sur <b>SETUP</b> jusqu'à ce que <b>CBL clignote 2 fois<br>
		</b>&nbsp;&nbsp; - Appuyez ensuite sur <b>9-8-1 et la touche CBL clignotera 4 fois 
		&nbsp;(Utilisez seulement le code 9-8-1 si le bouton TV ne fonctionne pas 
		non-plus.&nbsp; Cela vous évitera de reprogrammer les touches MUSIC et VOD)<br>
		</b>&nbsp;&nbsp; - Appuyez à nouveau sur <b>SETUP</b> jusqu'à ce que <b>CBL clignote 
		2 fois</b><br>
		&nbsp;&nbsp; - Appuyez sur <b>9-8-2</b> et la touche <b>CBL clignotera 4 
		fois </b>&nbsp;<br>
		&nbsp;&nbsp; - Il ne vous reste qu'à reprogrammer la touche <b>CBL</b> et 
		<b>TV</b> avec les 
		appareils du client.&nbsp;&nbsp; <br>
		&nbsp;&nbsp; - CBL-SETUP-(0476 ou 1476 ou 1376) et TV-SETUP-XXXX<br>
		&nbsp;&nbsp; <b>- N'oubliez pas que la touche</b> <b>Music et VOD ne seront 
		plus en fonction</b></p>`,
            'atlas-search': `<p align="left"><b>1</b>. Appuyez sur la touche <b>TV </b>(ou l'appareil 
		désiré)<b>.<br>
		2</b>.Appuyez sur <b>SETUP</b> et tenez-la enfoncée 
		jusqu'à ce qu'elle clignote deux fois. Relâchez ensuite la touche <b>
		SETUP<br>
		3</b>. Entrez le numéro <b>9-9-1 </b>: la touche<b> 
		TV</b> clignotera deux fois.<b><br>
		4</b>. Appuyez sur <b>CH+ </b>plusieurs fois jusqu'à 
		ce que l'appareil s'éteigne.<b><br>
		5</b>. Appuyez sur <b>SETUP</b> une fois et 
		relâchez-la, la touche <b>TV</b> clignotera 2 fois</p>`,
            'atlas-tv-prog': `<p align="left"><b>1. </b>Appuyez sur tv 1 fois<br>
		  <b>2</b>. 
		  Maintenez setup jusqu'à ce que tv clignote 2 fois.<br>
		  <b>3</b>. 
		  Entrez le code à 4 chiffres<br>
		  <b>4</b>. 
		  Appuyez sur le bouton power&nbsp;<br>
		  <b>5</b>. 
		  Si la télévision ne ferme pas, recommencez avec un nouveau code		</p>`,
		  
		  'atlas-macro-prog':`<p align="left"><b>1</b>. Appuyez sur la touche <b>CBL .<br>
		2</b>. Appuyez sur <b>SETUP</b> et tenez-la enfoncée 
		jusqu'à ce que <b>CBL</b> clignote deux fois. <b><br>
		3</b>. Entrez le numéro <b>9-9-5 </b>: la touche<b> 
		CBL</b> clignotera deux fois.<b><br>
		4</b>. Appuyez sur la touche que vous désirez 
		programmer (EX: VOD).<b><br>
		5</b>. Appuyez sur <b>CBL</b> suivi de la chaine que 
		vous désirez programmer (EX: 2-9-9).<b><br>
		6</b>. Appuyez sur <b>SETUP</b> et tenez la enfoncée 
		jusqu'à ce que la touche CBL clignote 2 fois.</p>`,
		  'atlas-volume-lock':`<p align="left"><b>1</b>. Appuyez sur la touche <b>SETUP</b> et tenez-la 
		enfoncée jusqu'à ce que la dernière touche utilisée clignote deux fois. 
		Relâchez ensuite la touche <b>SETUP<br>
		2</b>. Entrez le numéro <b>9-9-3 <br>
		3</b>. Appuyez sur<b> TV</b> une fois<b><br>
		4</b>. Si le client désire augmenter le volume, il 
		sera automatiquement dirigé sur la touche TV.</p>
		<b>Pour <u>DÉVERROUILLER LE VOLUME</u>, il s'agit de la 
		même procédure mais vous n'avez qu'à appuyer sur le bouton "<font color="#FF0000" data-darkreader-inline-color="" style="--darkreader-inline-color: #f22424;">VOL 
		+</font>" 
		suivant le 9-9-3</b>`,
		  'atlas-channel-unlock':`<p><b>1</b>. Sur la 
		télécommande, appuyez une fois sur la touche CBL : le voyant mumineux 
		clignotera une fois.Ensuite appuyez sur la touche SETUP et tenez-la 
		enfoncée jusqu'à ce que la touche CBL clignote deux fois.<br>
		<b>2</b>. Entrez 
		les chiffres&nbsp; 9 7 3 L la touche CBL clignotera deux fois.<br>
		<b>3</b>. 
		Appuyez une fois sur la touche CH- : la touche CBL clignotera quatre 
		fois.<br>
&nbsp;</p>`,
		  'atlas-channel-lock':`<p><b>1</b>. Sur la 
		télécommande, appuyez une fois sur la touche CBL : le voyant lumineux 
		clignotera une fois. Ensuite, appuyez sur la touche SETUP et tenez-la 
		enfoncée jusqu'à ce que la touche CBL clignote deux fois.<br>
		<b>2</b>. Entrez 
		les chiffres 9 7 3 : la touche CBL clignotera deux fois.<br>
		<b>3</b>. Appuyez 
		une fois sur la touche CH+ : la touche CBL clignotera deux fois.</p>
		<font color="#FF0000" data-darkreader-inline-color="" style="--darkreader-inline-color: #f22424;">Pour la version 1056B03 &amp; pour la version 1056B04</font>
		<p>Appuyez sur la touche CBL, celle-ci clignotera 
		2 fois</p>`,
		  'atlas-preprog-key-code':`<p class="MsoNormal"><b>1.</b> Appuyez sur la touche CBL<b><br>
					2. </b>Appuyez sur SETUP et tenez-la 
					enfoncée jusqu'à ce CBL clignote deux fois. Relâchez ensuite 
					la touche SETUP<b><br>
					3. </b>Entrez le numéro 9-9-4 : la touche CBL clignotera deux fois.<b><br>
					4. </b>Appuyez sur SETUP (sans maintenir) 
					et relâchez-la.<b><br>
					5. </b>Entrez le code de fonction (tableau 
					ci-dessous) précédé de 00<b><br>
					6. </b>Appuyez la touche que vous voulez 
					assigner.<o:p></o:p></p>
					<table id="table1" class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0">
				<tbody><tr>
					<td style="border-width: medium; border-style: none; border-color: initial; padding: 3.75pt; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial;" colspan="12" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="">
					<p style="TEXT-ALIGN: center" class="MsoNormal" align="center">
					<b>EFC Table</b></p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>EFC</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>Function</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>EFC</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>Function</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>EFC</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>Function</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>EFC</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>Function</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>EFC</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>Function</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>EFC</b></p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal"><b>Function</b></p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">012</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 3</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">013</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 7</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">014</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 1</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">015</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 5</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">016</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 2</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">017</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 6</p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">018</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 0</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">019</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 4</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">044</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Info</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">045</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Right</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">046</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Record</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">047</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Down</p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">048</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Help</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">049</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Left</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">050</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Guide</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">051</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Up</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">076</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Last</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">078</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">OK/Select</p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">079</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">FAV</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">080</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Exit</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">081</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Lock/A/Triangle</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">082</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Music channel list</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">083</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">TV/VCR</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">108</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Toggle closed captions</p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">109</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Change resolution<br>
					(DCH series only)</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">140</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Channel +</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">141</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Mute</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">142</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 9</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">143</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Volume +</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">144</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Power</p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">145</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Volume -</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">146</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">number 8</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">147</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Channel -</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">172</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Page Down</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">173</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">30-second skip</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">174</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Day -/B/Square</p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">175</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">MyDVR</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">176</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Page Up</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">177</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Live</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">178</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Day +/C/Circle</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">179</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Replay (15-second rewind)</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">204</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Play</p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">205</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Pause</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">206</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Menu</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">207</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Fast Forward</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">208</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">On-Demand</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">209</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Rewind</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">210</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Preview List</p></td>
				</tr>
				<tr>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">211</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Stop</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">236</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">
					<p class="MsoNormal">Tuner Swap</p></td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">&nbsp;
					</td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">&nbsp;
					</td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">&nbsp;
					</td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">&nbsp;
					</td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">&nbsp;
					</td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">&nbsp;
					</td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">&nbsp;
					</td>
					<td style="PADDING-BOTTOM: 3.75pt; PADDING-LEFT: 3.75pt; PADDING-RIGHT: 3.75pt; PADDING-TOP: 3.75pt">&nbsp;
					</td>
				</tr>
			</tbody></table>`,
		  'atlas-flash-code':`<p><b>1</b>. 
		Appuyez la touche de fonction désiré : <b>TV/AUD/DVD/AUX</b>. ( TV pour 
		l'exemple )<br>
		<b>2</b>. Appuyez sur la touche <b>SETUP</b> et tenez-la 
		enfoncée jusqu'à ce que <b>TV</b> clignote deux fois.<br>
		<b>3</b>. Appuyez sur <b>9-9-0</b>.<br>
		<b>4</b>. Appuyez sur <b>1</b>, compter le nombre de clignotement de la touche
		<b>TV</b>. Ceci est votre premier chiffre. ( Exemple 1 )<br>
		<b>5</b>. Appuyez sur <b>2</b>, compter le nombre de clignotement de la touche
		<b>TV</b>. Ceci est votre deuxième chiffre. ( Exemple 2 )<br>
		<b>6</b>. Appuyez sur <b>3</b>, compter le nombre de clignotement de la touche
		<b>TV</b>. Ceci est votre troisième chiffre. ( Exemple 5 )<br>
		<b>7</b>. Appuyez sur <b>4</b>, compter le nombre de clignotement de la touche
		<b>TV</b>. Ceci est votre quatrième chiffre. ( Exemple 0 )</p>
		<p>Les 4 
		chiffres de l'étape précédente vous donnerons le code utilisé pour la 
		fonction <b>TV</b> de la télécommande. ( Exemple 1-2-5-0 )<b></b></p>`
		,
		  
		  
            
        };

        // Inside onShow callback, initialize Tippy for each button
        instance.popper.querySelectorAll('.column button').forEach(button => {
            const tooltipContent = tooltips[button.id];
            if (tooltipContent) {
                tippy(button, {
                    content: tooltipContent,
                    placement: 'right', // Positioning of the tooltip
                    theme: 'light-border', // Optional theme
                    arrow: true, // Show arrow
                    trigger: 'focus', // Show tooltip on mouse hover or focus
					hideOnClick: true,
					allowHTML: true,
					maxWidth: 'none',
					flip: false,
                });
            }
        });
    }
});

	// Tippy initialization for other elements
    tippy('#tv-pairing-info-tivo', {
        content: `
		<div class="container-b">
		<div class="column"
		<table border="0" width="100%">
	<tbody><tr>
		<td width="50%">
<p class="MsoNormal" style="margin-left: 43.5pt; margin-right: 7.5pt" align="center">
<span style="font-size: 9pt; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" lang="en-ca" data-darkreader-inline-color=""><b>
<span style="font-family: Verdana,sans-serif">Première génération</span></b></span></p>
<p class="MsoNormal" style="margin-left: 43.5pt; margin-right: 7.5pt" align="center">
&nbsp;</p>
<p class="MsoNormal" style="margin-left: 43.5pt; margin-right: 7.5pt" align="center">
<b>
<span lang="EN-CA" style="font-size: 9pt; font-family: Verdana, sans-serif; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">
Téléviseur (TIVO + TV PWR)</span></b></p>
<table align="center" class="MsoNormalTable" border="0" cellpadding="0" width="540" style="width: 405.0pt; margin-left: 36.0pt">
	<tbody><tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">H</span><span style="font-family: Verdana, sans-serif; font-size: 9pt; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">aier</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p align="center">0011</p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Hitachi</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0017 0207 0015 0016 0001</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">JVC </span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0040 0134 0239 0038 0079</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">LG </span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0011 0231 0346 0093 0097</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Panasonic</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0359 0308 0005 0010 0150</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Philips</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0371 0321 0001 0003 0011</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">RCA</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0368 0371 0004 0001 0006</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Samsung</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0305 0306 0001 0007 0012</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Sanyo</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0026 0013 0027 0037 0041</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Sharp</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0375 0361 0151 0011 0020</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #434749;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Sony</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0067 0136 0309 0043 0075</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Toshiba</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">0021 0146 0013 0035 0042</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">&nbsp;</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">&nbsp;</p></td>
	</tr>
</tbody></table>
<p class="MsoNormal" style="margin-left: 43.5pt; margin-right: 7.5pt" align="center">
<b>
<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Système 
Audio (TIVO + MUTE)</span></b></p>
<table align="center" class="MsoNormalTable" border="0" cellpadding="0" width="536" style="width: 402.0pt; margin-left: 36.0pt">
	<tbody><tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td width="128" style="width:96.0pt;padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Bose</span></p></td>
		<td width="398" style="width:298.5pt;padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1007 1185 1131</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Denon</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1041 1234 1111 1149 1150</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Harman Kardon</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1205 1225 1153 1208 1154</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Kenwood</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1012 1129 1130 1136 1206</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">LG</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1069 1077 1018 1192</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Marantz</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1013 1034 1070 1093 1047</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">NAD</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1036 1055</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Onkyo</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1178 1024 1053 1113 1114</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Panasonic</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1126 1-14 1039 1094 1194</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Philips</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1009 1301 1302 1303 1034</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Pioneer</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1082 1001 1021 1046 1051</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Samsung</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1304 1197 1198 1199</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Sony</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1008 1176 1005 1025 1059</span></p></td>
	</tr>
	<tr onmouseover="bgColor='#C0C0C0'" onmouseout="bgColor='white'" bgcolor="white" data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor: #222425;">		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">Yamaha</span></p></td>
		<td style="padding:.75pt .75pt .75pt .75pt">
		<p class="MsoNormal" align="center">
		<span style="font-size: 9pt; font-family: Verdana, &quot;sans-serif&quot;; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" data-darkreader-inline-color="">1140 1166 1201 1028 1033</span></p></td>
	</tr>
</tbody></table>
							</div>
						<div class="column">
						<td width="50%" valign="top">
		<p align="center">
		<span style="font-size: 9pt; color: rgb(75, 75, 75); --darkreader-inline-color: #b3aea5;" lang="en-ca" data-darkreader-inline-color=""><b>
		<span style="font-family: Verdana,sans-serif">Seconde génération</span></b></span></p>
		<p align="center">
		<p align="center">
		<iframe src="https://setup.mynevo.com/?oem=UrcSupport&amp;User=PYSDSY&amp;Location=505" width="100%" height="300" frameborder="1"></iframe></p>
						<button type="button" id="tivo-prog-rf">Programmation RF (Radio Fréquence)</button>
						<button type="button" id="tivo-prog-ir">Programation IR ( InfraRouge )</button>
						<button type="button" id="tivo-prog-t6-mini">Jumelage avec T6 ou Mini</button>
						<button type="button" id="tivo-prog-reset">Déprogrammation complète (Reset Global)</button>
						<button type="button" id="tivo-prog-tv">Programmation avec la TV</button>
						<button type="button" id="tivo-prog-input">Programmation input</button>
						<button type="button" id="tivo-prog-search">Recherche de code</button>
						<button type="button" id="tivo-prog-search-2">Recherche de code - 2e procédure</button>
						<button type="button" id="tivo-prog-volume-aux">Programmation volume - Barre- de son ou système audio</button>
						<button type="button" id="tivo-prog-volume-aux-search">Recherche de code - Barre- de son ou système audio</button>
						<button type="button" id="tivo-prog-master">tivo - Master Power Tivo pour audio + TV</button>
						<button type="button" id="tivo-prog-depair">Effacer tous les jumelages en mémoire dans Tivo</button>
						<button type="button" id="tivo-prog-abc">Fonction des boutons "A" "B" et "C"</button>
						</div>
						</div>
								<style>
table.MsoNormalTable p {
margin: 0;
padding: 0;
}
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.container-b {
    display: flex;
    justify-content: space-between; /* Adjust spacing between columns */
    align-items: flex-start; /* Align items at the top of the container */
}

.column {
    flex: 1; /* Each column takes up equal space */
    padding: 10px; /* Optional: Add padding for spacing */
}

button {
    display: block;
    margin-bottom: 10px; /* Optional: Add margin between buttons */
	with: auto;
	height: auto;
}

    }
</style>
<script>
</script>
`,
        placement: 'right',
		theme: 'light-border',
		allowHTML: true,
		interactive: true,
		trigger: 'click',
		arrow: true,
		maxWidth: 'none',
		 onShow(instance) {
// Define tooltip content for each button
        const tooltips = {
			'tivo-prog-rf':`<p>Appuyez et maintenez les boutons <b>TiVo</b> et <b>D</b> 
		simultanément jusqu'à ce que la lumière JAUNE clignote 3 fois.</p>`,
		'tivo-prog-ir':`<p align="left">Appuyez et maintenez les boutons <b>TiVo</b> et <b>C</b> 
		simultanément jusqu'à ce que la lumière ROUGE clignote 3 fois.</p>`,
		
			'tivo-prog-t6-mini':`<p align="left">Allez dans le menu <b>Accueil TiVo - Menu - Réglages - 
		Télécommande et appareils - Configuration de la télécommande - Jumelage</b> 
		et Assurez-vous que le client est à moins d'un mètre du décodeur.<br>
		<b><br>
		1</b>. Appuyez et maintenez les boutons <b>TiVo</b> et <b>BACK</b> 
		simultanément jusqu'à ce que la lumière rouge allume et se se mettent 
		ensuite à clignoter jaune.<br>
		<b>2</b>. La lumière clignote jaune pour indiquer que la télécommande 
		est en mode couplage pendant 30 sec.</p>`,
		
			'tivo-prog-reset':`<p><br>
		Ceci permet de réinitialiser la télécommande avec les paramètres par 
		défaut. Tous les réglages et le jumelage seront perdus. Cela placera la 
		télécommande en mode recherche de jumelage.<br>
		<br>
		( masquez le devant de la télécommande avec une main) <br>
		<b>1</b>. Appuyez et maintenez les boutons <b>TiVo</b> et <b>TV Power</b> 
		simultanément jusqu'à ce que l'indicateur d'activité s'allume en rouge.<br>
		<b>2</b>. Appuyez 3 fois sur le <b>pouce rouge</b> et ensuite <b>Enter</b><br>
		<b>3</b>. Reprogrammer la télécommande avec le téléviseur.<br>
&nbsp;</p>`,

			'tivo-prog-tv':`<p>Allez dans le Menu <b>Accueil TiVo- Menu - Réglages - 
		Télécommande et appareils - Configuration de la télécommande - 
		Configurer les boutons Pwr, Volume et Mute de votre télévision</b> - 
		Choisir le fabricant de la télé concerné.<br>
		<br>
		<b>1</b>. Appuyez et maintenez les boutons <b>TV Pwr</b> et <b>TiVo</b> 
		simultanément jusqu'à ce que la lumière reste allumée.<br>
		<b>2</b>. Entrer un des codes à 4 chiffres à l'écran, la lumière 
		clignotera trois fois.<br>
		<b>3</b>. Tester avec le bouton <b>TV Pwr</b>. Si cela ne fonctionne 
		pas, répéter les étapes précédentes avec les autres codes.<br>
&nbsp;</p>`,

			'tivo-prog-input':`<p>Allez dans le menu <b>Accueil TiVo- Menu - Réglages - Télécommande et 
		appareils - Configuration de la télécommande - Bouton Input</b> - 
		Choisir le fabricant de la télé concerné.<br>
		<br>
		<b>1</b>. Appuyez et maintenez les boutons <b>Input</b> et <b>TiVo</b> 
		simultanément jusqu'à ce que la lumière clignote trois fois.<br>
		<b>2</b>. Entrer un des codes à 4 chiffres à l'écran.<br>
		<b>3</b>. Tester avec le bouton <b>Input</b>. Si cela ne fonctionne pas, 
		répéter les étapes précédentes.<br>
&nbsp;</p>`,
			
			'tivo-prog-search':`<b>Accueil TiVo- Menu - Réglages - Télécommande et 
		appareils - Configuration de la télécommande - Configurer les boutons 
		Pwr, Volume et Mute de votre télévision</b>
		<p><b>1</b>. Gardez le bouton <b>TiVo</b> et le bouton<b> 
		Tv Pwr </b>enfoncés jusqu'à ce que la lumière ROUGE de la télécommande 
		demeure allumée.<br>2. Entrez le code <b>0999</b> (Après avoir entré le code, le 
		voyant rouge (ou orange) clignote trois fois puis reste allumé.<br>
		<b>3</b>. Appuyez sur la touche <b>CH +</b> toutes les deux secondes.<br>
		<b>4</b>. Si le téléviseur s'éteint vous venez de trouver le bon code, 
		Appuyez sur <b>Enter</b> pour le confirmer.<br>
		<b>5</b>. Pour tester le code appuyez sur le bouton <b>Tv Pwr</b>.</p>
		`,
			
			'tivo-prog-search-2':`<p>La recherche de code fonctionne également ainsi :<b><br>
		<br>
		1</b>. Gardez le bouton <b>TiVo</b> et le bouton<b> 
		Tv Pwr </b>enfoncés jusqu'à ce que la lumière ROUGE de la télécommande 
		demeure allumée.<br>
		<b>2</b>. Entrez le code <b>1999 </b>et faites des <b>Ch +</b> jusqu'à 
		ce que la TV s'éteigne.<br>
		<b>3</b>. Appuyez sur <b>Enter</b> pour confirmer le choix.<br>
		<b><br>
		• </b>Pour chercher un code input: entrez le code 0999 après avoir fait
		<b>TiVo</b> et <b>Input</b>.<br>
&nbsp;</p>`,
			
			'tivo-prog-volume-aux':`<p>Allez dans le menu <b>Accueil TiVo- Menu - Réglages - Télécommande et 
		appareils - Configuration de la télécommande - Configurer le volume AV 
		et le bouton Mute</b><span style="font-size: 11.0pt; font-family: Calibri,sans-serif">
		</span><b>&nbsp;</b>- Choisir le fabricant concerné.<br>
		<b><br>
		1</b>. Appuyez et maintenez les boutons <b>Mute</b> et <b>TiVo</b> 
		simultanément jusqu'à ce que la lumière reste allumée rouge.<br>
		<b>2</b>. Entrer un code à 4 chiffres.<br>
		<b>3</b>. Tester avec le bouton <b>Mute</b>. Si cela ne fonctionne pas, 
		répéter les étapes précédentes.<br>
&nbsp;</p>`,
			
			'tivo-prog-volume-aux-search':`<p>Allez dans le Menu <b>Accueil TiVo- Menu - Réglages - Télécommande et 
		appareils - Configuration de la télécommande - Configurer le volume AV 
		et le bouton Mute </b>- Choisir le fabricant concerné.<br>
		<br>
		<b>1</b>. Appuyez sur <b>Mute</b> et <b>TiVo</b> simultanément jusqu'à 
		ce que la lumière reste allumée rouge.<br>
		<b>2</b>. Entrer <b>1999</b> et faites des <b>Ch +</b> jusqu'à ce que le 
		son arrête. <br>
		<b>3</b>. Appuyez sur <b>Enter</b> pour confirmer le choix.<br>
		&nbsp;</p>`,
			
			'tivo-prog-master':`<p><br>
		<b>Cette procédure semble pouvoir s’appliquer à tous les types 
		d’appareils audio.</b></p>
		<p><br>
		1-<b>Trouver le code qui fait “couper” l’audio en suivant la procédure 
		suivante :</b><br>
		Dans le menu Allez dans le Menu <b>Accueil TiVo- Menu - Réglages - 
		Télécommande et appareils - Configuration de la télécommande - 
		Configurer les boutons Pwr, Volume et Mute de votre télévision</b> - 
		Choisir le fabricant de la télé concerné.</p>
		<p><br>
	<p><br>
		<b>a</b>) Appuyez et maintenez les boutons <b>Mute et TiVo</b> simultanément 
		jusqu'à ce que la lumière reste allumée rouge.<br>
		<b>b</b>) Entrer un code à 4 chiffres.<br>
		<b>c</b>) Tester le Mute. Si cela ne fonctionne pas, répéter a, b et c avec le 
		prochain code.<br>
		Une fois le bon code trouvé, le prendre en note et le conserver. <b>Il 
		sera requis à l’étape 7.</b><br>
		<b>Programmation de la fonction power pour les deux appareils</b><br>
		2- Tivo +TV-PWR<br>
		3- Entrez le code TV<br>
		4- Tivo + TV-PWR<br>
		5 - Entrer le code audio <br>
  <br>
		  L’audio <b>et</b> la tv se ferment en même temps.</p>
		  <p><br>
		<b>Programmation de la fonction mute</b><br>
		6- Appuyez et maintenez les boutons Mute et TiVo simultanément jusqu'à 
		ce que la lumière reste allumée rouge.<br>
		7- Entrez le Code audio retenu à l’étape 1<br>
		Tester la fonction mute</p>
		`,
			
			'tivo-prog-depair':`<p>
			1. Mettre la télécommande en IR</p>
			<ul>
			<p></p><li>Appuyez sur Tivo + <span style="color: red; --darkreader-inline-color: #f22424;" data-darkreader-inline-color="">C Rouge </span>jusqu’à ce que la mascotte Tivo clignote rouge sur la télécommande.
			<p></p></li><li><p>Appuyez sur n’importe quelle touche pour confirmer que la lumière allume rouge et non jaune.</p></li>
			<li><p>Appuyez sur Live TV.</p></li>
			</ul>
			<p>2. Effacer les pairing précédents</p>
			<li><p>Appuyez<b>&nbsp;Clear, Enter, Clear, 221, Clear</b>&nbsp;(Cela va enlever tous les pairages de télécommandes avec le décodeur).</p></li>
			<p>3. Refaire le pairing</p>
			<ul><li><p>Tenez enfoncé&nbsp;<b>TiVo + Back</b>&nbsp;jusqu’à ce que la lumière de la télécommande clingote<span style="color: rgb(255, 153, 0); --darkreader-inline-color: #f29f24;" data-darkreader-inline-color=""> 
		JAUNE</span>&nbsp;(cette télécommande&nbsp;essaiera alors de se pairer).</p></li>
			<li><p>Maintenant appuyez sur n’importe quelle touche qui devrait clignoter<span style="color: rgb(255, 153, 0); --darkreader-inline-color: #f29f24;" data-darkreader-inline-color="">
		JAUNE</span>.</p></li>
			<li><p>La télécommande est maintenant pairée en mode RF avec le décodeur.
			</p></li></ul>`,
			
			'tivo-prog-abc':`<ul>
			<li>"A" pour <b>activer/désactiver</b> le lecteur d'écran</li>
			<li>"B" pour <b>activer/désactiver</b> les sous-titres</li>
			<li>"C" pour<b> activer/désactiver</b> la vidéo-description</li>
		</ul>`,
		
		  
		  
            
        };

        // Inside onShow callback, initialize Tippy for each button
        instance.popper.querySelectorAll('.column button').forEach(button => {
            const tooltipContent = tooltips[button.id];
            if (tooltipContent) {
                tippy(button, {
                    content: tooltipContent,
                    placement: 'left', // Positioning of the tooltip
                    theme: 'light-border', // Optional theme
                    arrow: true, // Show arrow
                    trigger: 'focus', // Show tooltip on mouse hover or focus
					hideOnClick: true,
					allowHTML: true,
					maxWidth: 'none',
					flip: false,
                });
            }
        });
    }
});

// Get the element and set initial variables
let myelementLegacy = document.getElementById('legacy-sim');
let tipLegacy;

// Initial text content for the tooltip
let initialContentLegacy = "Cliquer pour avoir le simulateur Legacy";

// Initialize Tippy.js with hover tooltip
tipLegacy = tippy(myelementLegacy, {
    content: initialContentLegacy,
    arrow: true,
    placement: 'top',
    theme: 'light-border',
});

// Event listener for click to toggle iframe content
myelementLegacy.addEventListener("click", handleClickLegacy);

// Function to handle click event
function handleClickLegacy() {
    // Set content to iframe
    tipLegacy.setContent(`<iframe src="http://intranet.cogeco.com/interne/simulateurs/AppDemoStore/Tv/Legacy/index.html" frameborder="no" scrolling="no" width="1600" height="900"></iframe>`);
    
    // Configure Tippy instance settings
    tipLegacy.setProps({
        allowHTML: true,    // Allow HTML content
        interactive: true,  // Make tooltip interactive (e.g., able to click links inside iframe)
        hideOnClick: true,  // Do not hide on click (keep iframe visible)
        trigger: 'click',
        maxWidth: 'none',
        placement: 'right',
    });
    
    // Show the tooltip
    tipLegacy.show();
}

// Get the element and set initial variables for TiVo tooltip
let myelementTiVo = document.getElementById('tivo-sim');
let tipTiVo;

// Initial text content for the TiVo tooltip
let initialContentTiVo = "Cliquer pour avoir le simulateur TiVo";

// Initialize Tippy.js with hover tooltip for TiVo
tipTiVo = tippy(myelementTiVo, {
    content: initialContentTiVo,
    arrow: true,
    placement: 'top',
    theme: 'light-border',
});

// Event listener for click to toggle iframe content for TiVo
myelementTiVo.addEventListener("click", handleClickTiVo);

// Function to handle click event for TiVo
function handleClickTiVo() {
    // Set content to iframe for TiVo
    tipTiVo.setContent(`<iframe src="http://intranet.cogeco.com/interne/simulateurs/AppDemoStore/Tv/TiVo/index.html" fremborder="no" scrolling="no" width="1600" height="900"></iframe>`);
    
    // Configure Tippy instance settings for TiVo
    tipTiVo.setProps({
        allowHTML: true,    // Allow HTML content
        interactive: true,  // Make tooltip interactive (e.g., able to click links inside iframe)
        hideOnClick: true,  // Do not hide on click (keep iframe visible)
        trigger: 'click',
        maxWidth: 'none',
        placement: 'right',
    });
    
    // Show the tooltip for TiVo
    tipTiVo.show();
}
// Get the element and set initial variables for Epico tooltip
let myelementEpico = document.getElementById('epico-sim');
let tipEpico;

// Initial text content for the Epico tooltip
let initialContentEpico = "Cliquer pour avoir le simulateur Epico";

// Initialize Tippy.js with hover tooltip for Epico
tipEpico = tippy(myelementEpico, {
    content: initialContentEpico,
    arrow: true,
    placement: 'top',
    theme: 'light-border',
});

// Event listener for click to toggle iframe content for Epico
myelementEpico.addEventListener("click", handleClickEpico);

// Function to handle click event for Epico
function handleClickEpico() {
    // Set content to iframe for Epico
    tipEpico.setContent(`<iframe src="http://intranet.cogeco.com/interne/simulateurs/AppDemoStore/Tv/Epico/index.html" frameborder="no" scrolling="no" width="1600" height="900"></iframe>`);
    
    // Configure Tippy instance settings for Epico
    tipEpico.setProps({
        allowHTML: true,    // Allow HTML content
        interactive: true,  // Make tooltip interactive (e.g., able to click links inside iframe)
        hideOnClick: true,  // Do not hide on click (keep iframe visible)
        trigger: 'click',
        maxWidth: 'none',
        placement: 'right',
    });
    
    // Show the tooltip for Epico
    tipEpico.show();
}
// Get the element and set initial variables for App simulator tooltip
let myelementApp = document.getElementById('app-sim-info');
let tipApp;

// Initial text content for the App simulator tooltip
let initialContentApp = "Cliquer pour avoir les simulateurs des applications";

// Initialize Tippy.js with hover tooltip for App simulator
tipApp = tippy(myelementApp, {
    content: initialContentApp,
    arrow: true,
    placement: 'top',
    theme: 'light-border',
});

// Event listener for click to toggle iframe content for App simulator
myelementApp.addEventListener("click", handleClickApp);

// Function to handle click event for App simulator
function handleClickApp() {
    // Set content to iframe for App simulator
    tipApp.setContent(`
	<div class="container-b">
	<div class="column">
		<h3>Cogeco Wi-fi</h3>	
		<button type="button" id="cogeco-wifi-2-sim-fr-a">Cogeco Wi-Fi 2.0 (Plume Homepass 2.0) - <strong>Android</strong> - Francais</button>
		<!--<button type="button" id="cogeco-wifi-2-sim-en-a" disabled >Cogeco Wi-Fi 2.0 (Plume Homepass 2.0) - <strong>Android</strong> - Anglais</button>
		<button type="button" id="cogeco-wifi-sim-fr-a">Cogeco Wi-Fi (Plume Homepass) - <strong>Android</strong> - Francais</button>
		<button type="button" id="cogeco-wifi-sim-en-a">Cogeco Wi-Fi (Plume Homepass) - <strong>Android</strong> - Anglais</button>
		<button type="button" id="cogeco-wifi-sim-fr-i">Cogeco Wi-Fi (Plume Homepass) - <strong>IOS</strong> - Francais</button>
		<button type="button" id="cogeco-wifi-sim-en-i">Cogeco Wi-Fi (Plume Homepass) - <strong>IOS</strong> - Anglais</button>
		<button type="button" id="cogeco-wifi-sim-fr-a">Cogeco Wi-Fi Affaires (Plume Homepass) - <strong>Android</strong> - Francais</button>
		<button type="button" id="cogeco-wifi-sim-en-a">Cogeco Wi-Fi Affaires (Plume Homepass) - <strong>Android</strong> - Anglais</button>-->
</div>
</div>
<style>
.container-b {
    display: flex;
    justify-content: space-between; /* Adjust spacing between columns */
    align-items: flex-start; /* Align items at the top of the container */
}

.column {
    flex: 1; /* Each column takes up equal space */
    padding: 10px; /* Optional: Add padding for spacing */
}

button {
    display: block;
    margin-bottom: 10px; /* Optional: Add margin between buttons */
	with: auto;
	height: auto;
}

</style>
`);
    
    // Configure Tippy instance settings for App simulator
    tipApp.setProps({
        allowHTML: true,    // Allow HTML content
        interactive: true,  // Make tooltip interactive (e.g., able to click links inside iframe)
        hideOnClick: true,  // Do not hide on click (keep iframe visible)
        trigger: 'click',
        maxWidth: 'none',
        placement: 'right',
		 onShow(instance) {
// Define tooltip content for each button
        const tooltips = {
			'cogeco-wifi-2-sim-fr-a':`<html lang="en"><head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
<meta content="Demo description" name="description">
<title>Samsung Galaxy S21 homepasss scroll</title>
<meta name="twitter:card" content="summary_large_image">
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="/css/v2314_embed.css">
<script async="" src="//www.google-analytics.com/analytics.js"></script><script src="/js/v2314_embed.js" type="text/javascript"></script>
<link rel="shortcut icon" type="image/png" href="/favicon-2.ico">
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-31090930-1', 'appdemostore.com');
  
  ga('send', 'pageview');
  
</script>
 
 
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async="" src="https://www.googletagmanager.com/gtag/js?id=G-DGLT30E228"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DGLT30E228');
</script>


</head>
<body class="demo ">
<!--[if lt IE 11]><div class='a-error' style='position:absolute; width:100%; z-index:10'>You are using an old version of Internet Explorer. Please upgrade your browser to see this demo!</div><![endif]-->

<div id="a-demo-container" class="a-demo-container">
	<div id="a-demo-progress" class="a-demo-progress"><b></b></div>
	<div id="a-demo-runner" class="a-demo-embedder ar-cursor-1"><div class="ar-runner" style="width: 475px; height: 1010.9px; margin: auto;"><img class="ar-frame" src="https://storage.googleapis.com/interactive-demos-public/frames/samsung_galaxy_s21_v.png" style="width: 475px; height: 1010.9px;"><img class="ar-corner ct" src="https://storage.googleapis.com/interactive-demos-public/frames/samsung_galaxy_s21_v.ct.png" style="width: 20.2991px; margin-left: -10.1496px;"><div class="ar-demo" style="width: 438.462px; height: 974.359px; left: 17.0513px; top: 16.2393px;"><div class="ar-toolbar"><div class="ar-toolbar-left"><div class="ar-tb-b2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#fff" d="m 17.143441,10.219034 c -0.0083,3.944651 -3.198628,7.135802 -7.143441,7.143149 -2.0532316,0 -3.8925669,-0.868607 -5.1963468,-2.255603 L 6.4919547,13.92939 0.04163247,10.90641 0.649029,18.003842 2.4393789,16.755627 c 1.831987,2.117638 4.5407785,3.462999 7.5598011,3.462999 5.524526,0 10,-4.475284 10,-9.999592 H 17.143441 z M 10,3.0767006 c 2.054048,0 3.893373,0.869423 5.197969,2.256419 l -1.688289,1.178007 6.450317,3.021348 -0.60904,-7.096616 -1.789525,1.248214 C 15.728629,1.5664346 13.020659,0.21862462 10,0.21862462 4.4770963,0.21944162 -3.61e-6,4.6963586 -8.2e-4,10.219034 H 2.8573717 C 2.8638917,6.2751986 6.0560013,3.0832316 10,3.0767006 z"></path></svg></div></div><div class="ar-toolbar-right"><div class="ar-tb-ads"><a target="_blank" href="http://www.appdemostore.com/demo?id=5731082609098752">AppDemoStore</a></div></div><div class="ar-toolbar-center"><div class="ar-tb-b ar-tb-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#fff" d="M 16.99918,3.8568592 10.46641,10.21914 16.99918,16.581421 13.265565,20.218626 2.99918,10.21914 13.265565,0.218626 z"></path></svg></div><div class="ar-tb-screenno">1/109</div><div class="ar-tb-b  ar-tb-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#fff" d="M 2.99918,16.579364 9.5314575,10.217084 2.99918,3.8548026 6.7325133,0.218626 16.99918,10.217084 6.7325133,20.218626 z"></path></svg></div></div></div><div class="ar-screens" style="width: 438.462px; height: 974.359px; border-radius: 38.5684px;"><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255); display: block;"><div class="ar-o2 im show" style="width: 438.462px; height: 976.795px; top: -2.4359px; left: -1.21795px; background-image: url(&quot;//lh3.googleusercontent.com/x6seGC1uITRJadhOpKmawawY2CPNV7TPJ2B_l99YmkqeQCn9CXX-mi0TRlK1KoQNom4MUQu0PB_-ugh8sCExKEY8SUEhBpIhvCHK2nFj6uVun4ub358=s0&quot;);"></div><div class="ar-o2 hs show" style="width: 347.927px; height: 61.7094px; top: 825.769px; left: 47.5px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"><div class="ar-o2 im" style="width: 436.026px; height: 973.141px; top: 0px; left: 1.21795px; background-image: url(&quot;//lh3.googleusercontent.com/L18c3s90PW2uEmqHV8oH7QLZiNRoY9H_UoMt3gvfu6wdFxM_isiW4rGrek4SwUV-NFrmB_Wf0Hw4dhalOWA9DGpfDA55aIr_6X775c_L_HMyMPSXXQ=s0&quot;);"></div><div class="ar-o2 tb" style="width: 365.385px; height: 47.5px; top: 493.269px; left: 36.5385px; font-family: Arial; font-weight: normal; font-size: 16.2393px; color: rgb(0, 0, 0); background-color: rgba(238, 238, 238, 0.9); border-color: rgb(170, 170, 170);"><div class="text" style="height: 47.5px; width: 365.385px; text-align: center; vertical-align: middle;"></div></div><div class="ar-o2 tb" style="width: 367.821px; height: 47.5px; top: 565.128px; left: 35.3205px; font-family: Arial; font-weight: normal; font-size: 16.2393px; color: rgb(0, 0, 0); background-color: rgba(238, 238, 238, 0.9); border-color: rgb(170, 170, 170);"><div class="text" style="height: 47.5px; width: 367.821px; text-align: center; vertical-align: middle;"></div></div><div class="ar-o2 hs" style="width: 383.248px; height: 53.1838px; top: 633.333px; left: 32.8846px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"><div class="scroll-mid" style="overflow: hidden auto;"><img class="ar-screen-img" src="//lh3.googleusercontent.com/CweVQdaRPHUGbB21_3AL3ZUPurPDGj3LJaw2khZTSektZZo2TEh8Ab5tLvuZQRyXBhNgBdF_914iZZNyn82rUgcILtr3XB-QKE7zwWZ_V0E-qP2yYvA=s0" style="width: 438.462px; height: 3460.6px;"><div class="ar-o2 hs" style="width: 55.6197px; height: 47.094px; top: 209.487px; left: 354.423px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 62.9274px; height: 47.094px; top: 3391.99px; left: 185.128px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 58.0556px; height: 45.8761px; top: 3393.21px; left: 332.5px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 407.607px; height: 121.389px; top: 320.321px; left: 15.8333px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 406.389px; height: 182.286px; top: 466.474px; left: 17.0513px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 192.03px; height: 128.697px; top: 673.526px; left: 15.8333px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 200.556px; height: 133.568px; top: 669.872px; left: 228.974px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 51.9658px; height: 45.8761px; top: 913.462px; left: 356.859px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 98.2479px; height: 44.6581px; top: 1063.27px; left: 28.0128px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 49.5299px; height: 43.4402px; top: 1579.68px; left: 356.859px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 tb" style="width: 298.397px; height: 71.859px; top: 1461.54px; left: 136.41px; font-family: Arial; font-weight: bold; font-size: 18.6752px; color: rgb(255, 255, 153); background-color: rgba(145, 145, 145, 0.9); border-color: rgb(170, 170, 170);"><div class="text" style="height: 71.859px; width: 298.397px; text-align: center; vertical-align: middle;"></div></div><div class="ar-o2 ar" style="width: 236.282px; height: 236.282px; top: 1513.91px; left: 159.551px;"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="236.28205128205127" width="236.28205128205127" viewBox="0 0 100 100"><g stroke="#ff6600" stroke-width="4" stroke-linecap="round" fill="none" transform="rotate(205, 50, 50)"><path d="M 50 5 Q -10 50, 50 95"></path><polyline points="42 20 50 5 58 20" transform="rotate(50.1944289077348, 50, 5)"></polyline></g></svg></div><div class="ar-o2 hs" style="width: 392.991px; height: 55.6197px; top: 2247.12px; left: 24.359px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 ar" style="width: 207.051px; height: 207.051px; top: 1828.14px; left: 107.179px;"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="207.05128205128204" width="207.05128205128204" viewBox="0 0 100 100"><g stroke="#ff6600" stroke-width="4" stroke-linecap="round" fill="none" transform="rotate(231, 50, 50)"><path d="M 50 5 Q 50 50, 50 95"></path><polyline points="42 20 50 5 58 20" transform="rotate(0, 50, 5)"></polyline></g></svg></div><div class="ar-o2 ar" style="width: 124.231px; height: 124.231px; top: 1867.12px; left: 208.269px;"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="124.23076923076923" width="124.23076923076923" viewBox="0 0 100 100"><g stroke="#ff6600" stroke-width="4" stroke-linecap="round" fill="none" transform="rotate(198, 50, 50)"><path d="M 50 5 Q 50 50, 50 95"></path><polyline points="42 20 50 5 58 20" transform="rotate(0, 50, 5)"></polyline></g></svg></div><div class="ar-o2 hs" style="width: 394.209px; height: 172.543px; top: 2058.33px; left: 25.5769px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 36.1325px; height: 42.2222px; top: 1725.83px; left: 314.231px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 37.3504px; height: 34.9145px; top: 1728.27px; left: 364.167px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 48.312px; height: 51.9658px; top: 2346.99px; left: 350.769px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 384.466px; height: 111.645px; top: 2473.65px; left: 28.0128px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 76.3248px; height: 100.684px; top: 2638.48px; left: 48.7179px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 76.3248px; height: 103.12px; top: 2636.86px; left: 143.718px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 399.081px; height: 92.1581px; top: 2779.36px; left: 19.4872px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 64.1453px; height: 62.9274px; top: 2966.92px; left: 354.423px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 402.735px; height: 177.415px; top: 3070.45px; left: 19.4872px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div><div class="ar-o2 hs" style="width: 402.735px; height: 60.4915px; top: 3288.46px; left: 14.6154px; border-color: rgb(255, 102, 0); border-radius: 3.24786px;"></div></div><div class="scroll-top" style="height: 0px; background-image: url(&quot;//lh3.googleusercontent.com/CweVQdaRPHUGbB21_3AL3ZUPurPDGj3LJaw2khZTSektZZo2TEh8Ab5tLvuZQRyXBhNgBdF_914iZZNyn82rUgcILtr3XB-QKE7zwWZ_V0E-qP2yYvA=s0&quot;);"></div><div class="scroll-bot" style="height: 0px; background-image: url(&quot;//lh3.googleusercontent.com/CweVQdaRPHUGbB21_3AL3ZUPurPDGj3LJaw2khZTSektZZo2TEh8Ab5tLvuZQRyXBhNgBdF_914iZZNyn82rUgcILtr3XB-QKE7zwWZ_V0E-qP2yYvA=s0&quot;);"></div></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div><div class="ar-screen" style="width: 438.462px; height: 974.359px; z-index: auto; background-color: rgb(255, 255, 255);"></div></div><div class="ar-demo-panel"><div class="a-close"></div></div><div class="ar-demo-loading" style="display: none;"><div class="a-loader white"></div></div></div></div></div>
	<div id="a-demo-overview" class="a-demo-overview bg-violet"><h5>Start</h5></div>
		<div id="a-demo-cb" class="">
			<b class="i">…</b>
			<ul></ul>
		</div>
</div>

<div class="popup-bg gray" id="popup-cb">
<div class="popup">
	<div class="popup-close" onclick="APopup.hide(&quot;popup-cb&quot;)"><b class="i close">╳</b></div>
	<iframe src=""></iframe>
</div>
</div>

<div class="popup-bg gray" id="popup-cb-v">
<div class="popup">
	<div class="popup-close" onclick="APopup.hide(&quot;popup-cb-v&quot;)"><b class="i close">╳</b></div>
	<div class="videos"></div>
</div>
</div>

<script type="text/javascript">

var opt = {
container:document.getElementById('a-demo-runner'),
id:'5731082609098752',
title:'Samsung Galaxy S21 homepasss scroll',

frameType:'samsung_galaxy_s21_v',
jDemo:{"screens":[{"objects":[{"type":"image","h":2406,"w":1080,"x":-3,"y":-6,"hideAfterTimeout":0,"imgId":"5012105083748352","imgUrl":"G13/x6seGC1uITRJadhOpKmawawY2CPNV7TPJ2B_l99YmkqeQCn9CXX-mi0TRlK1KoQNom4MUQu0PB_-ugh8sCExKEY8SUEhBpIhvCHK2nFj6uVun4ub358","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":152,"w":857,"x":117,"y":2034,"hideAfterTimeout":0,"go":1,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"Se connecter","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1074,"x":3,"y":0,"hideAfterTimeout":0,"imgId":"6742901876326400","imgUrl":"G13/L18c3s90PW2uEmqHV8oH7QLZiNRoY9H_UoMt3gvfu6wdFxM_isiW4rGrek4SwUV-NFrmB_Wf0Hw4dhalOWA9DGpfDA55aIr_6X775c_L_HMyMPSXXQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"textbox","h":117,"w":900,"x":90,"y":1215,"hideAfterTimeout":0,"text":"Nom d&#39;utilisateur Mon Compte","fontFamily":"Arial","fontSize":40,"fontWeight":"normal","textColor":"#000000","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":true,"autotypingTimeout":500},{"type":"textbox","h":117,"w":906,"x":87,"y":1392,"hideAfterTimeout":0,"text":"Mot de passe Mon Compte","fontFamily":"Arial","fontSize":40,"fontWeight":"normal","textColor":"#000000","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":true,"autotypingTimeout":500},{"type":"hotspot","h":131,"w":944,"x":81,"y":1560,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"Identifiants","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"hotspot","h":116,"w":137,"x":873,"y":516,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":155,"x":456,"y":8355,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":143,"x":819,"y":8358,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":299,"w":1004,"x":39,"y":789,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":449,"w":1001,"x":42,"y":1149,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":317,"w":473,"x":39,"y":1659,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":329,"w":494,"x":564,"y":1650,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":128,"x":879,"y":2250,"hideAfterTimeout":0,"go":22,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":242,"x":69,"y":2619,"hideAfterTimeout":0,"go":25,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":122,"x":879,"y":3891,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"textbox","h":177,"w":735,"x":336,"y":3600,"hideAfterTimeout":0,"text":"Cliquez ici pour voir le mot de passe","fontFamily":"Arial","fontSize":46,"fontWeight":"bold","textColor":"#ffff99","backgroundColor":"#919191","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":false,"autotypingTimeout":500},{"type":"arrow","h":582,"w":582,"x":393,"y":3729,"hideAfterTimeout":0,"color":"#ff6600","angle":205,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":-6},{"type":"hotspot","h":137,"w":968,"x":60,"y":5535,"hideAfterTimeout":0,"go":48,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"arrow","h":510,"w":510,"x":264,"y":4503,"hideAfterTimeout":0,"color":"#ff6600","angle":231,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":0},{"type":"arrow","h":306,"w":306,"x":513,"y":4599,"hideAfterTimeout":0,"color":"#ff6600","angle":198,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":0},{"type":"hotspot","h":425,"w":971,"x":63,"y":5070,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":89,"x":774,"y":4251.000091552734,"hideAfterTimeout":0,"go":44,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":86,"w":92,"x":897,"y":4257.000091552734,"hideAfterTimeout":0,"go":47,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":128,"w":119,"x":864,"y":5781.000091552734,"hideAfterTimeout":0,"go":68,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":275,"w":947,"x":69,"y":6093,"hideAfterTimeout":0,"go":71,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":248,"w":188,"x":120,"y":6499.000183105469,"hideAfterTimeout":0,"go":77,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":254,"w":188,"x":354,"y":6495.000183105469,"hideAfterTimeout":0,"go":78,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":227,"w":983,"x":48,"y":6846,"hideAfterTimeout":0,"go":79,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":155,"w":158,"x":873,"y":7308.000457763672,"hideAfterTimeout":0,"go":81,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":437,"w":992,"x":48,"y":7563,"hideAfterTimeout":0,"go":82,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":149,"w":992,"x":36,"y":8100,"hideAfterTimeout":0,"go":83,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"id":"4961468023308288","url":"G13/CweVQdaRPHUGbB21_3AL3ZUPurPDGj3LJaw2khZTSektZZo2TEh8Ab5tLvuZQRyXBhNgBdF_914iZZNyn82rUgcILtr3XB-QKE7zwWZ_V0E-qP2yYvA","w":1080,"h":8524,"label":"homepage","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"hotspot","h":128,"w":149,"x":63,"y":111,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":98,"w":173,"x":840,"y":702,"hideAfterTimeout":0,"go":4,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":86,"w":185,"x":846,"y":1104,"hideAfterTimeout":0,"go":5,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":308,"x":717,"y":1959,"hideAfterTimeout":0,"go":6,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":83,"w":224,"x":807,"y":1569,"hideAfterTimeout":0,"go":7,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":917,"x":90,"y":2469,"hideAfterTimeout":0,"go":8,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":146,"w":992,"x":42,"y":2796,"hideAfterTimeout":0,"go":9,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"button","h":120,"w":360,"x":525,"y":132,"hideAfterTimeout":0,"go":24,"itrans":0,"text":"Menu &amp; Paramètres","fontFamily":"Arial","fontSize":40,"fontWeight":"bold","textColor":"#000000","backgroundColor":"#aaaaaa","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100}],"id":"4648937346039808","url":"G13/wKW6SYmf20aaZfxcjpUUk2xpQZwfgLKKeqPR6vJqaGKcVvMTEVzVTfB0dTO9BCiB0gDl2hBv2FwCJdy2kzsNjcbJmNi_CVDlD5giZtd5QI2se74w","w":1080,"h":2963,"label":"(1) parametres guard","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"image","h":2397,"w":1080,"x":-6,"y":-3,"hideAfterTimeout":0,"imgId":"4990822279282688","imgUrl":"G13/NazM8WE11yx26grcOfp5Yks85YibZRI47EN0hU6CPOycdcfgyvyx0K--baib_DZsKUdFO1cYnirvrKPgoeja86ACgpmodJiIVWwJPL1-Pkx7yyJ-","itype":"on screen","imgW":455,"imgH":987},{"type":"hotspot","h":80,"w":239,"x":696,"y":1332,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(4) act/desactiver protec en ligne","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1089,"x":-12,"y":0,"hideAfterTimeout":0,"imgId":"4798336072155136","imgUrl":"G13/P5P9_ALVsFiC0sSbylGPB1LEMPYA9VyFbP-Wo4oiKKF1sVDIK0Qw2amNYa0tsMMreSWUtyJjlbsA2VUYWPHrQbMtsIsMlymljOTcSwJc6__dSL73s1I","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":110,"w":149,"x":756,"y":2229,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"protection IdO avancee","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2391,"w":1080,"x":-3,"y":3,"hideAfterTimeout":0,"imgId":"5924235978997760","imgUrl":"G13/ez2G3TEs2TTtLCOkUKOOC6WCrxHJ6y1ZwEgu8zD0gcyO_bP8JOJg7AsGfy-NG7WYDXLbYpZ6OZsntaMzzFh6SDbN41L__x4WcVhv1IBd1Hq_eUfsUzo","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":95,"w":131,"x":768,"y":2211,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"blocage de fen pub","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1086,"x":-3,"y":0,"hideAfterTimeout":0,"imgId":"6154890855841792","imgUrl":"G13/2eLYvVjBi3aBe8mWQifVrEJGwouB8hQSL0U3i2tpnglxHYpyjgCU6c8wDCQxG3qwIStL3wGtCQ3oZ9uT8JabAzp_IrXjMj6ynjnIz_jzzmhlOPlQ8g","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":113,"w":143,"x":786,"y":2223,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"Protect contre acces a distance","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1086,"x":-3,"y":0,"hideAfterTimeout":0,"imgId":"5364072519827456","imgUrl":"G13/iayL-GgyMSHaxec-QxvTb71UI258d7XCVsFMtvB5p_hS1OO23AAl7qmDDvRo2avdS4rZh2mK7m43T-C4WIScVKM16tAZXBc1_QE1G2PyUhwC_sbAMQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":101,"w":134,"x":783,"y":2229,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":116,"x":921,"y":1437,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"en savoir plus mode privé","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2406,"w":1068,"x":0,"y":-3,"hideAfterTimeout":0,"imgId":"6210513232461824","imgUrl":"G13/VOkyjlcNLRVgwvLCHASQlw9AOLHb08HDlBhey7u440cnTy76AYw7aU8qtOw7BKgVuiju-5ez_WDruDlNGAZxbR1L7cOkIeVBJkt6G8rkfbj_qseRLQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":83,"w":416,"x":504,"y":1326,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":98,"w":281,"x":195,"y":1320,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":122,"x":777,"y":2187,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"supp les evenments guard","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1080,"x":3,"y":0,"hideAfterTimeout":0,"imgId":"6057331881672704","imgUrl":"G13/t5lc0T-5l058mUjB7eVAaK1if2gMM92kHZ9u2C3mKeYKlxfbq1hiXG305Y7j_u7BLpMMELKNVoENofdoXCOB0C7aA6wIxJqAvDHdIzg93EeTcZCoHUc","itype":"on screen","imgW":455,"imgH":987},{"type":"hotspot","h":104,"w":113,"x":45,"y":129,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":116,"x":789,"y":132,"hideAfterTimeout":0,"go":11,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":122,"x":945,"y":135,"hideAfterTimeout":0,"go":16,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":893,"x":51,"y":414,"hideAfterTimeout":0,"go":21,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(3) surveillance en cours","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2409,"w":1080,"x":0,"y":-6,"hideAfterTimeout":0,"imgId":"5418924218253312","imgUrl":"G13/nTKqfVNtM7IcNVq5bFPcksczRrT2d-lxqP0IN5gOItinabT05DtdqryAQdUxYigcBaDxw3BULKnMAfD6rPZbfenSJmbahbtskR6dsQaZekyJy0sS","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":122,"w":731,"x":54,"y":1446,"hideAfterTimeout":0,"go":12,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":740,"x":57,"y":1647,"hideAfterTimeout":0,"go":13,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":743,"x":57,"y":1851,"hideAfterTimeout":0,"go":"n","borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":746,"x":60,"y":2049,"hideAfterTimeout":0,"go":15,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(11) + en haut","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1074,"x":6,"y":-3,"hideAfterTimeout":0,"imgId":"6065898059726848","imgUrl":"G13/i-XH1Vbz2KPNbETqPgPSpKMmNXCM4TrEr_q3DQONBejXhdkZI71e-f_oO1XNlbvzns82i6Edb8zVOIyyDC8pZOn4QcfC7TULc0wJRukUKxOYiH6FhA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":113,"w":137,"x":75,"y":120,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":233,"x":822,"y":123,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"arrow","h":234,"w":234,"x":654,"y":264,"hideAfterTimeout":0,"color":"#ff6600","angle":33,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":0}],"color":"#ffffff","label":"(12) autoris IP","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1077,"x":3,"y":0,"hideAfterTimeout":0,"imgId":"5221177783484416","imgUrl":"G13/9SL1b-seK0fnzNNoa2bRPsioJBUglrImoUE5Fpyev6SkFX2eyXef4WkM8VbOuhqaPxbLgFfIR5cEydt5iT8uv_mD1FGfhcQhkkCpoABO_LQGgvBOkA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":122,"w":143,"x":63,"y":111,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":236,"x":819,"y":126,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"arrow","h":243,"w":243,"x":645,"y":255,"hideAfterTimeout":0,"color":"#ff6600","angle":29,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":0}],"color":"#ffffff","label":"(12) autoris site web","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1074,"x":0,"y":0,"hideAfterTimeout":0,"imgId":"6223753173794816","imgUrl":"G13/KRXuZBEw024jDc7t08HdCxJZdLRG42zD5RedoEBm5v5k6A4ev5IOFIzfRXgjfdGEx9ihD9Lk1w9mzYjbbHu8tDyNvsvdbgLgt9yV5GYDfiQMd-b2XqQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":92,"w":119,"x":78,"y":129,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":200,"x":813,"y":126,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"arrow","h":228,"w":228,"x":648,"y":261,"hideAfterTimeout":0,"color":"#ff6600","angle":35,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":0}],"color":"#ffffff","label":"(12) Bloquer IP","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2394,"w":1074,"x":0,"y":3,"hideAfterTimeout":0,"imgId":"5140950948511744","imgUrl":"G13/PwdKgLcwnOusEnlL0fT1fCBBcjKD12DqU27rXXKR_x7gvRhK_r3K9LH4Tpw9rheyw_3kBD4h0cyATk559vNZNtUEl1x5zits4fNzRo96wpWHICEE","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":92,"w":131,"x":78,"y":135,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":221,"x":819,"y":129,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"arrow","h":270,"w":270,"x":603,"y":255,"hideAfterTimeout":0,"color":"#ff6600","angle":44,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":0}],"color":"#ffffff","label":"(12) bloquer site web","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1080,"x":-3,"y":0,"hideAfterTimeout":0,"imgId":"4926821730091008","imgUrl":"G13/M6Tr-bhzj2kqEyLk6NuZb6qetEyge8xDNxgYEfdORqgkOLhrzeJ2ZsIf3NoXmFLrsCDZ7qtoJwnHCYRYizfA09eZ05j43e-d9IDuGuyllJHqsidO","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":107,"w":98,"x":789,"y":2208,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":140,"w":1097,"x":-9,"y":1650,"hideAfterTimeout":0,"go":17,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":134,"w":1073,"x":0,"y":2049,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":194,"w":1064,"x":0,"y":1827,"hideAfterTimeout":0,"go":19,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(11) 3 ptits points","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2388,"w":1077,"x":6,"y":6,"hideAfterTimeout":0,"imgId":"6278866194137088","imgUrl":"G13/V0bsQmKWA9_lnqS83rO_4gWL7i9REWmzaE2M1b29YvGRO3kFbQct6sEoYrPNVxb7_AIKqWMbXEe3ZbaSPymmC3EY2W5a5fjhEAqa91hDQa6S-9sZzw","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":107,"w":113,"x":81,"y":135,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":116,"x":927,"y":129,"hideAfterTimeout":0,"go":18,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(17 voir la liste autorisée","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2391,"w":1074,"x":3,"y":3,"hideAfterTimeout":0,"imgId":"4869629408706560","imgUrl":"G13/aerEcWBl-TzwVNII8ksMGj0PrGEzfT2yhM1sukLxOobWcv5drLsEMTCRhJirfbpXrbbu6nUXXkdAB0z0DPVL8VQDJcgxaZT0wyOA3ZXKMLyMudDuKA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":98,"w":137,"x":780,"y":2205,"hideAfterTimeout":0,"go":17,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":125,"w":1079,"x":9,"y":1842,"hideAfterTimeout":0,"go":12,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":134,"w":1070,"x":9,"y":2040,"hideAfterTimeout":0,"go":13,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(18) + en haut à droite","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1086,"x":3,"y":-3,"hideAfterTimeout":0,"imgId":"5282256043638784","imgUrl":"G13/NdllCrmUcvfn91LE8TNlUfO3PkwZtkvlPIp-DMcTT8BVPRJrDfiTOBCVijvHGxLn0PZhAgV_usnOhrl9hfQnzifNrTfUCR2UbIe-3MTkkRdfYI7E4g","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":119,"w":113,"x":75,"y":117,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":128,"x":921,"y":120,"hideAfterTimeout":0,"go":20,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(17)  liste bloquée","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1080,"x":0,"y":-3,"hideAfterTimeout":0,"imgId":"6342315074912256","imgUrl":"G13/0GNMEVXKLoE2ZYmgsHV-t8EUZD_F6XovTcafZB6vvLWKJZ9-YvedN_IUjsbDFlMJpH9QwcW9PNkdn1uvZxrWwt26MJTiYUDgFJ1SEKiCf697F-lmqr4","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":131,"w":119,"x":786,"y":2196,"hideAfterTimeout":0,"go":19,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":164,"w":1088,"x":-6,"y":1848,"hideAfterTimeout":0,"go":14,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":140,"w":1088,"x":0,"y":2046,"hideAfterTimeout":0,"go":15,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(20) + en haut","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2406,"w":1113,"x":-3,"y":0,"hideAfterTimeout":0,"imgId":"6660282878787584","imgUrl":"G13/L6JblCMjvfOOtLioBK5Fllf1ptNl5XcvLQNtLvGRR-iQOIUfX5KIYqdp9JYx0rMI6MCZXxUjMP-QkiN0uWI3mNSiPqvBCrIcFKod4gs5Dlg5d8MBRhY","itype":"on screen","imgW":392,"imgH":831},{"type":"hotspot","h":98,"w":116,"x":81,"y":135,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":95,"w":188,"x":846,"y":144,"hideAfterTimeout":0,"go":10,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(11) banniere verte","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"hotspot","h":98,"w":245,"x":801,"y":132,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"id":"5135914596040704","url":"G13/Pc4h_1HQ-7Hc1jqXbzmp3wftgDBIddkwwvKqZ82gCVIb9-trfZMmXA5NVV-mt8ij2h5q05HFqxFkF5gP-46S9LgOutMcEa-z33tHHc23RsNz6NNxaA","w":1080,"h":2400,"label":"(3) parametres sense","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"hotspot","h":134,"w":158,"x":90,"y":6549,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":143,"x":831,"y":6558,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"textbox","h":153,"w":975,"x":36,"y":1866,"hideAfterTimeout":0,"text":"Glissez de gauche à droite pour voir les appareils associés au Foyer","fontFamily":"Arial","fontSize":48,"fontWeight":"bold","textColor":"#ff0000","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":false,"autotypingTimeout":500},{"type":"arrow","h":192,"w":192,"x":0,"y":1653,"hideAfterTimeout":0,"color":"#ff0000","angle":353,"arrowStyle":"curve2","arrowLineWidth":4,"arrowCurveAngle":-6},{"type":"hotspot","h":113,"w":122,"x":909,"y":129,"hideAfterTimeout":0,"go":84,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":233,"x":594,"y":6417,"hideAfterTimeout":0,"go":91,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":335,"w":200,"x":336,"y":642,"hideAfterTimeout":0,"go":92,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":194,"w":521,"x":69,"y":1116,"hideAfterTimeout":0,"go":93,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":89,"w":80,"x":801,"y":1170,"hideAfterTimeout":0,"go":94,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":77,"w":71,"x":936,"y":1173,"hideAfterTimeout":0,"go":95,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":98,"w":110,"x":786,"y":2073,"hideAfterTimeout":0,"go":94,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":98,"w":110,"x":783,"y":2988,"hideAfterTimeout":0,"go":94,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":92,"x":798,"y":5142,"hideAfterTimeout":0,"go":94,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"textbox","h":483,"w":417,"x":633,"y":3138,"hideAfterTimeout":0,"text":"Le bouton pause se changera en x une fois le délais actif, et il sera possible de le desactiver en appuyant directement sur le x","fontFamily":"Arial","fontSize":40,"fontWeight":"normal","textColor":"#ff0000","backgroundColor":"#e9e9e9","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":false,"autotypingTimeout":500}],"color":"#ffffff","label":"Screenshot_20240404_143323_Cogeco","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"6140083628933120","url":"G13/xbD0Cyi-CV8xH-ojbphn7E4rFnWl9uza-EYbsWNPYqHEmE9Qy0ujbijiziICtfg0CEu61k3YTmVFrgAkfPuVj6enbjEPioLMMpV4LRcgdRU0cwxSXA","w":1080,"h":6720},{"objects":[{"type":"hotspot","h":122,"w":143,"x":114,"y":3639,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":131,"w":128,"x":468,"y":3630,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":152,"w":998,"x":36,"y":501,"hideAfterTimeout":0,"go":104,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":317,"w":296,"x":48,"y":834,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":302,"w":293,"x":399,"y":846,"hideAfterTimeout":0,"go":3,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":308,"w":311,"x":33,"y":1203,"hideAfterTimeout":0,"go":107,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":311,"w":311,"x":393,"y":1203,"hideAfterTimeout":0,"go":81,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":314,"w":296,"x":48,"y":1809,"hideAfterTimeout":0,"go":77,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":302,"w":299,"x":393,"y":1815,"hideAfterTimeout":0,"go":71,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":299,"w":299,"x":747,"y":1818,"hideAfterTimeout":0,"go":78,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"id":"5489292962430976","url":"G13/0wmhnqAo-VL1r63BUiS6JoIHNk_Or5J9wIW1VvMgtQ_VH3JPuCijLgQB5V-fGZqzABnAokN9fN0ITZbNNcczyWDNkdYq7jxba5pRiCv3laCNOyvU7g","w":1080,"h":3808,"label":"Menu et parametres","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"hotspot","h":107,"w":131,"x":21,"y":126,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":203,"w":1004,"x":39,"y":2634,"hideAfterTimeout":0,"go":26,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":101,"w":965,"x":69,"y":4242,"hideAfterTimeout":0,"go":27,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":92,"w":101,"x":720,"y":5673,"hideAfterTimeout":0,"go":28,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":89,"w":110,"x":864,"y":5673,"hideAfterTimeout":0,"go":29,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":146,"w":599,"x":48,"y":5643,"hideAfterTimeout":0,"go":29,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":182,"w":998,"x":39,"y":5880,"hideAfterTimeout":0,"go":22,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":95,"w":113,"x":123,"y":6162,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":95,"w":107,"x":480,"y":6162,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":101,"w":110,"x":840,"y":6160,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"id":"6594271915802624","url":"G13/rk7iiYAJGttoKCkyEwQEuCyFFJEa_3myUjAY6Xifzu6PeLTCUSnTR2KpIijQDHMZQuFAB6QvBS9Oecx0aEzG_VEZDz73yFuXvBEEDKguw6_wo-Qi8g","w":1080,"h":6314,"label":"(3) sense en direct","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"image","h":2409,"w":1080,"x":0,"y":-9,"hideAfterTimeout":0,"imgId":"4551148859555840","imgUrl":"G13/J-XGQIsUmNelR7qKO2415e2q9FKDiC6OYSERqqQRoxgvxio_m-95nRT1FX_06KF2VosrPSKK29bdDkvUyJJC7BqkLu78vLME9DGr1bHUIww21VIByQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":80,"w":260,"x":768,"y":132,"hideAfterTimeout":0,"go":25,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":89,"w":128,"x":69,"y":129,"hideAfterTimeout":0,"go":25,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(26) attribuer un appareil","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1089,"x":-6,"y":0,"hideAfterTimeout":0,"imgId":"4851247485550592","imgUrl":"G13/16giJZE44G-15pfvEfQXtf33Atg4Og5v3xoMNNyGz3C4vNNuSWX6mj37a6pkJ3u_is9o3uckPoTezFcEHEolYQFfioVyNO9KXm0IrfVXg-KDBjjK","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":95,"w":92,"x":807,"y":2226,"hideAfterTimeout":0,"go":25,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":779,"w":1052,"x":12,"y":123,"hideAfterTimeout":0,"go":25,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(26) légende graphique","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2406,"w":1080,"x":-3,"y":-3,"hideAfterTimeout":0,"imgId":"5977147392393216","imgUrl":"G13/M6xVYJk9TDlPTU9j0mGF4B9x1tBUUMCL1-PEHwKbYRNuf7FE_HzY5CSJZk_WYJSQbOp56EXTKxOMfTvYPk2CsO0lePff5WLWHY7OjFOjznuEV80ewg","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":92,"w":101,"x":789,"y":1275,"hideAfterTimeout":0,"go":25,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(26) bouton info app sense","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1089,"x":0,"y":0,"hideAfterTimeout":0,"imgId":"5379207212826624","imgUrl":"G13/bfxK6jWzq-6hMvVyP-XMX-2qKV8qYu0cwpobvWOyki_ewtXOyI-jBSc0g3t0K6J-LgyJE0962kdQWVq3Kx2HWVct9qX4LUCxw8leSbY8xgrwLZEt","itype":"on screen","imgW":512,"imgH":1119},{"type":"hotspot","h":125,"w":143,"x":69,"y":114,"hideAfterTimeout":0,"go":25,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":164,"w":1013,"x":45,"y":690,"hideAfterTimeout":0,"go":30,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":275,"x":759,"y":135,"hideAfterTimeout":0,"go":25,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(26) crayon app sense","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1077,"x":0,"y":-9,"hideAfterTimeout":0,"imgId":"6505107119669248","imgUrl":"G13/14pEccEpOVKouaNC7L2x_LAm3DGTw2lH7fGQn5I4GkdgUmzb9XUQQKoCVou4k0p1hCizUei48k8kNgm48Xgg5VmUZSPJUpnhBVvC7XvTOglvj7B9poI","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":107,"w":239,"x":792,"y":114,"hideAfterTimeout":0,"go":29,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":89,"w":107,"x":72,"y":120,"hideAfterTimeout":0,"go":29,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(30) appuyer pour attribuer","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2391,"w":1065,"x":9,"y":3,"hideAfterTimeout":0,"imgId":"4751160419811328","imgUrl":"G13/eE_k0DiRKo6mclqadA-sJdOymJwfloe0WdkjcsF4U3WCJ8My7B4ucIcbz1CYonIKvuO1OoHYP_cHLJmTqlfaU9x7Cj6l_1ub7CnKfRuQqHtQIFvKWL0","itype":"on screen","imgW":464,"imgH":1006},{"type":"hotspot","h":101,"w":116,"x":84,"y":129,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":167,"w":977,"x":51,"y":294,"hideAfterTimeout":0,"go":32,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":809,"x":165,"y":1860,"hideAfterTimeout":0,"go":39,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":122,"x":876,"y":792,"hideAfterTimeout":0,"go":40,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":269,"x":414,"y":930,"hideAfterTimeout":0,"go":41,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":284,"x":753,"y":933,"hideAfterTimeout":0,"go":42,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":122,"w":158,"x":63,"y":1602,"hideAfterTimeout":0,"go":43,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":98,"w":116,"x":882,"y":1614,"hideAfterTimeout":0,"go":47,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":149,"x":675,"y":1599,"hideAfterTimeout":0,"go":44,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"button","h":120,"w":360,"x":501,"y":117,"hideAfterTimeout":0,"go":24,"itrans":0,"text":"Menu &amp; Paramètres","fontFamily":"Arial","fontSize":40,"fontWeight":"bold","textColor":"#000000","backgroundColor":"#a7a7a7","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100}],"color":"#ffffff","label":"(3) Parametres Adapt","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1071,"x":6,"y":0,"hideAfterTimeout":0,"imgId":"5907614958878720","imgUrl":"G13/nnXZ1pnN9w5P2wrGiGoc0hTAHF35bjxXKXj94N4tcLuZEXr2HoFX59CVHclhdPyRDyJWCh-PsEtvzUwSLxtyKggDGVzRXzBcmhV7ARREangXk5NIIMg","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":125,"w":140,"x":69,"y":111,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":122,"w":938,"x":48,"y":309,"hideAfterTimeout":0,"go":33,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":146,"w":956,"x":45,"y":504,"hideAfterTimeout":0,"go":36,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":143,"w":953,"x":51,"y":708,"hideAfterTimeout":0,"go":37,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":203,"w":953,"x":48,"y":900,"hideAfterTimeout":0,"go":38,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(32) parametres avancés","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2406,"w":1074,"x":3,"y":0,"hideAfterTimeout":0,"imgId":"4814277380145152","imgUrl":"G13/fa1rWsEgEb3tRYM6D939k954C6VJnLsCZa-JYBs0hg2x-KwYgRuiMmMTWme9XMPTIw0p3fDtuOrcV7qhzs4AQeAMC3hWSh0dlfYCZ1w2N1RhNzE6FlI","itype":"on screen","imgW":464,"imgH":1006},{"type":"hotspot","h":98,"w":143,"x":78,"y":136,"hideAfterTimeout":0,"go":32,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":125,"w":692,"x":48,"y":300,"hideAfterTimeout":0,"go":34,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(33) redirection de ports","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2406,"w":1083,"x":-3,"y":0,"hideAfterTimeout":0,"imgId":"4957691539095552","imgUrl":"G13/1sobZzerR9HEZVq9oElUdGjl0HMOc8dCyfCTTxduDK6HV9X-feOpxPFi-VRGV5Kkvsq2Ah6lIOH2nCbXVH4IHSZzg96uQjREq_GsGfwlQ1qfafXr","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":98,"w":119,"x":84,"y":132,"hideAfterTimeout":0,"go":33,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":122,"w":512,"x":54,"y":309,"hideAfterTimeout":0,"go":35,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(34) reservation Ip","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2394,"w":1074,"x":0,"y":0,"hideAfterTimeout":0,"imgId":"6294000887136256","imgUrl":"G13/jOc3rShyadQs-qso-05bCPnS5MJ7rK7SwbIFZAQ5pON9osRkP3vuoBU5SuMpauvQp1D_HQ-zSD_Mjx8HOwAjZCeblB40dYuGelsWKbCuSZN22Spf","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":104,"w":134,"x":42,"y":123,"hideAfterTimeout":0,"go":34,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":353,"x":687,"y":123,"hideAfterTimeout":0,"go":34,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(35) selection app a reserver","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1080,"x":0,"y":-3,"hideAfterTimeout":0,"imgId":"5940177286987776","imgUrl":"G13/2pQqanWYlHh0Ta7NXd65L_dGXKjehD1w0DLTBbE7uGTFaZ6QZjh8M3Pjq4fFnr03W4kp-YCtk7y9htMQ8cFI8kUz3_N156cxe2zIZQQA9HiB6wVfUw","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":101,"w":161,"x":63,"y":135,"hideAfterTimeout":0,"go":32,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(33) Mode reseau","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1080,"x":3,"y":-3,"hideAfterTimeout":0,"imgId":"4519599237758976","imgUrl":"G13/1WjKkGcWyt6y8-HOvKeprAqyjZX87dBBlsvPIRFQ23LnW-0DZ7jU-xg67QCXUWXwMbfjop_jmAQ4VEAMFUqLm-DZTUKIooRIduld14Aws8WQ7jDkYA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":116,"w":122,"x":81,"y":123,"hideAfterTimeout":0,"go":32,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(33) s-reseau ip lan","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2406,"w":1074,"x":3,"y":0,"hideAfterTimeout":0,"imgId":"4638544733143040","imgUrl":"G13/n8qrGP704nkHQ4MgSmFqeGaAqfDRqfXFSZKRoVp3TCVEMuy_umFoikDAxtvjPfP9qGVJ-eAHek-D7uvm2NfcGrw9G6FNNBE8uWV62S1ub6HKngdQnzQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":107,"w":122,"x":60,"y":129,"hideAfterTimeout":0,"go":32,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(33) DNS","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1071,"x":3,"y":6,"hideAfterTimeout":0,"imgId":"6395732757577728","imgUrl":"G13/M5gxafupdbe_GX2TFdeCJ-F9mz_Iv7w-2MK5JQHqEffo2ZlrsjHwkWU0vASAYOfvX3nw29bMHpxSnVOcMRIIoYvWTD7IAeY_Z5LewPoca0uPxL5uDw","itype":"on screen","imgW":464,"imgH":1006},{"type":"hotspot","h":104,"w":116,"x":78,"y":123,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"textbox","h":105,"w":609,"x":216,"y":405,"hideAfterTimeout":0,"text":"Mot de passe sécuritaire","fontFamily":"Arial","fontSize":40,"fontWeight":"bold","textColor":"#000000","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":true,"autotypingTimeout":500},{"type":"arrow","h":270,"w":270,"x":618,"y":159,"hideAfterTimeout":0,"color":"#ff6600","angle":57,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":0}],"color":"#ffffff","label":"(32) nouveau mdp domicile","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1080,"x":-3,"y":-6,"hideAfterTimeout":0,"imgId":"6151019345477632","imgUrl":"G13/xCQs7E7GOOusLBJKK7lBOlheNiizsHNHSGOMBfm3NZZ1XZcbnu-lnPlkcWv7h2tgS1eH48n5dVHXxPEbjX4Z-7CBlpF7MJpQ6zcY2rIDny0CngckWQ","itype":"on screen","imgW":406,"imgH":881},{"type":"arrow","h":270,"w":270,"x":621,"y":207,"hideAfterTimeout":0,"color":"#ff6600","angle":41,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":0},{"type":"hotspot","h":113,"w":122,"x":78,"y":120,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(32) crayon modif","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2394,"w":1083,"x":-3,"y":3,"hideAfterTimeout":0,"imgId":"6211311861497856","imgUrl":"G13/2xtpvW8zSyPpSjjXO0xIY30PVPASqjLCmt3tHZCiy1UD5QbLO9XC-3FUwHp2Fq4MefBF56jBkJ5hXNNYMoHZ0ITSwzRuX8IpSxV28da45StQrExEJqI","itype":"on screen","imgW":464,"imgH":1006},{"type":"hotspot","h":101,"w":260,"x":78,"y":942,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":152,"w":1007,"x":33,"y":303,"hideAfterTimeout":0,"go":32,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":128,"x":69,"y":132,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":131,"w":116,"x":885,"y":795,"hideAfterTimeout":0,"go":40,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":92,"w":284,"x":729,"y":951,"hideAfterTimeout":0,"go":42,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(32) invités","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2391,"w":1080,"x":-3,"y":3,"hideAfterTimeout":0,"imgId":"4841229541441536","imgUrl":"G13/EdoQ7oBpa4DfkDw92svdkaA32p4ElDYvk-USnv79G0jnSYiB29F4k3I8kuTv4RMLo9ajmoq8SZ16LA09sKATjBYM_gc4fQ2exdXodnK3YZhVmbKf","itype":"on screen","imgW":464,"imgH":1006},{"type":"hotspot","h":122,"w":137,"x":63,"y":120,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":152,"w":998,"x":42,"y":300,"hideAfterTimeout":0,"go":32,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":122,"w":275,"x":393,"y":930,"hideAfterTimeout":0,"go":41,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":134,"w":296,"x":54,"y":927,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":125,"x":879,"y":798,"hideAfterTimeout":0,"go":40,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(32) internet uniquement","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2394,"w":1074,"x":0,"y":0,"hideAfterTimeout":0,"imgId":"4945670630277120","imgUrl":"G13/P36p5oV9rcEdCu5aUE_aQckbPoWH3IYMvMo7Z7QaPfoC3qDvP6NLgDf_Se2xJOKKvmi_uz_YKAt5_qZ3SFawGgnlmz81X1yzHhefoYAlxlT-wj8cXw","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":110,"w":239,"x":789,"y":123,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(32) clef","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"hotspot","h":944,"w":1079,"x":0,"y":3,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":251,"w":197,"x":294,"y":1926,"hideAfterTimeout":0,"go":45,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"id":"4987364193075200","url":"G13/7Qx9i93yoBfeKPlnM3FnR7vVry-4FM-Ddswft4XOLQnsVx4bWKnS1ekIaTEj4zqt5GDRDHYaIQpQKMLXVuQyRJi4oPa8pFfXAV5mTu3GGr80MFZuSQ","w":738,"h":1600,"label":"(32) partage de connexion","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"hotspot","h":443,"w":953,"x":108,"y":1029,"hideAfterTimeout":0,"go":46,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"textbox","h":300,"w":960,"x":102,"y":705,"hideAfterTimeout":0,"text":"Vue du cellulaire invité","fontFamily":"Arial","fontSize":74,"fontWeight":"normal","textColor":"#ff0000","backgroundColor":"#9999ff","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":false,"autotypingTimeout":500},{"type":"button","h":174,"w":621,"x":228,"y":435,"hideAfterTimeout":0,"go":31,"itrans":0,"text":"Retour aux paramètres","fontFamily":"Arial","fontSize":50,"fontWeight":"bold","textColor":"#ff0000","backgroundColor":"#aaaaaa","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100}],"color":"#ffffff","label":"(45) partage par txt","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0,"id":"6043257676496896","url":"G13/KrWQZ_O36YvNiSkrq1uoChIsxJNqvtmP5pg58yOx2kHLW_M2RNxZ3whdzrhDL94KJ2QzgmBWdoa58CHlLw9e0I6Hk2Xb8cY4CJuB2RtezBagVcoM","w":738,"h":1600},{"objects":[{"type":"image","h":2385,"w":1080,"x":-3,"y":9,"hideAfterTimeout":0,"imgId":"4850517274001408","imgUrl":"G13/JvghDSzKBJrEVPBpaWwIsnWWKWR1La7p_6ONKxYqj8KMWl4hm8UPYgKsbS83J_-jNBqS8WFjCoGT0UIQh1mbU2xR3qF5tMgXxOyB13ULgwXmtruKbA","itype":"on screen","imgW":485,"imgH":913},{"type":"textbox","h":255,"w":960,"x":33,"y":1377,"hideAfterTimeout":0,"text":"En cliquant sur copier, vous pouvez inscrire le mot de passe dans les paramètres Wi-Fi, en évitant de faire des fautes d&#39;orthographe","fontFamily":"Arial","fontSize":46,"fontWeight":"bold","textColor":"#0000ff","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":false,"autotypingTimeout":500},{"type":"button","h":180,"w":375,"x":324,"y":354,"hideAfterTimeout":0,"go":31,"itrans":0,"text":"Retours aux paramètres Adapt","fontFamily":"Arial","fontSize":42,"fontWeight":"bold","textColor":"#ff0000","backgroundColor":"#aaaaaa","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100}],"color":"#ffffff","label":"(46) vue instruction cell invité","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2409,"w":1089,"x":0,"y":-6,"hideAfterTimeout":0,"imgId":"5620682890674176","imgUrl":"G13/c8znE412ZuSlZAynQ3_CImWhDK7pMb7Wwf43d1a_DS_-Pf4ttIq6StSEY1IjsCOO7I0YWNlABp1TaNYwJeeI6q6j39irR5rtgPmeX_0LJh1sFU1hCQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":1712,"w":1031,"x":12,"y":12,"hideAfterTimeout":0,"go":31,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":101,"w":458,"x":36,"y":1854,"hideAfterTimeout":0,"go":40,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(32) 3ptits points","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"hotspot","h":98,"w":119,"x":72,"y":132,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":143,"x":108,"y":3240,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":128,"x":462,"y":3240,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":116,"x":840,"y":3240,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":254,"w":1001,"x":39,"y":639,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(3) afficher tout","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"4636001307197440","url":"G13/in1x40RtufRQxYvhOgFdhkrNA4vZyOKbLMRxqjW5qXwQJQLdWyRnS26rqr60jVilpc01WwzoRwntSms8O4dHtdlTnBgG2RzCTIsFFJxjZpNVOC6T","w":1080,"h":3402},{"objects":[{"type":"hotspot","h":119,"w":143,"x":18,"y":123,"hideAfterTimeout":0,"go":48,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":323,"w":695,"x":189,"y":756,"hideAfterTimeout":0,"go":50,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":77,"w":341,"x":372,"y":1125,"hideAfterTimeout":0,"go":51,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":164,"w":1004,"x":45,"y":1599,"hideAfterTimeout":0,"go":53,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":98,"x":924,"y":126,"hideAfterTimeout":0,"go":54,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":467,"w":1007,"x":42,"y":1809,"hideAfterTimeout":0,"go":55,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":98,"w":98,"x":912,"y":2373,"hideAfterTimeout":0,"go":66,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":185,"w":1010,"x":30,"y":3249,"hideAfterTimeout":0,"go":67,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(49) appareil le plus actif","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"6034227641974784","url":"G13/kHL4uo68eyTPSw2CJSJlrym9464-WZw9MB8adDgJ3MXnPQ2gKGtvBioJm_HivGf6R16OeUU8YWrYHweRlD34V5blMn-cxpQYoAGTzQTjJ-Lconk9iSc","w":1080,"h":3470},{"objects":[{"type":"image","h":2415,"w":1086,"x":-3,"y":-3,"hideAfterTimeout":0,"imgId":"5306880735313920","imgUrl":"G13/mESSPPOQGAULj8n8BV9UU_BIhbndQZYLVhFhzpEAu3TWB1HcZdu-bJpWyZXN5GIxPTRkb3HGm2UDTXuMwXuNrPiEu93Om8NMsNR8Lytp1d2jrbM1EA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":119,"w":113,"x":21,"y":120,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":278,"x":774,"y":135,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(50) bte epico","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"hotspot","h":104,"w":116,"x":21,"y":126,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":95,"w":314,"x":387,"y":708,"hideAfterTimeout":0,"go":52,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(50) qualité du signal","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"4573835950555136","url":"G13/WcQ2eVFPa99A1CHsfLzd1OYbyahLi2ssf-IzeXZnN3VieteNlzd3K5sOFdM5y-GC2QqccGtvzRxbi-omYug90V8QcP3WBE5KeR0USjFFLf9BGC1l","w":1080,"h":2425},{"objects":[{"type":"hotspot","h":113,"w":98,"x":36,"y":120,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(52) afficher plus","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"5991733101330432","url":"G13/LOhRXCk_2nBARi7N8h9LaudT8tDEuBifqKoUIaoLbIF92-Q6RX2iUxMv-4qP0eYGsfwaQtNVqsY_9v62tsjs2jgONATWgIU3YJIZHC6AhGXnl6c","w":1080,"h":4475},{"objects":[{"type":"hotspot","h":107,"w":101,"x":33,"y":132,"hideAfterTimeout":0,"go":48,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":1010,"x":36,"y":1617,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":347,"w":698,"x":192,"y":750,"hideAfterTimeout":0,"go":50,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":86,"w":365,"x":357,"y":1137,"hideAfterTimeout":0,"go":51,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":464,"w":1007,"x":39,"y":2709,"hideAfterTimeout":0,"go":55,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":128,"w":116,"x":915,"y":3258.0000915527344,"hideAfterTimeout":0,"go":66,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":179,"w":1025,"x":36,"y":4164,"hideAfterTimeout":0,"go":67,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(50) plus d'infos","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"6354966572171264","url":"G13/eNqc9j-z9oa54Sl__mNDfZaEtbZVzs3jg8cxTvhwg2gw_0UL10NiIze7mUh-vLqsVYpfx72W3sxha-QfmI3nK2sLgVbnZpV2lhCFiCePDTnfgRXROQ","w":1080,"h":4365},{"objects":[{"type":"image","h":2418,"w":1101,"x":-15,"y":-6,"hideAfterTimeout":0,"imgId":"5181659722285056","imgUrl":"G13/IcZ6wauE91l8J4PBZBpOUxr_nYEAkbyXU2JhxmZySfwaD6xyIoqMJP6Yv4sqWzjgFcKwiPrZfR_ry3KBwliGJ8BMtzyEMQGDKFQx1NrlJbbGZNsh3g","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":1541,"w":1073,"x":6,"y":12,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(50) 3 pttits points","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1095,"x":-9,"y":0,"hideAfterTimeout":0,"imgId":"5428783147909120","imgUrl":"G13/D3AgQZ3JJ-uBYmMe-lg3pLkALh07IcHriLFH2gJJAv1esccSd309auYYcISoXpOh9-hMQfzTUizAe_KchdRDO-LzHTYFOFcN4ZLT4SIIzMHJSchrIns","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":107,"w":125,"x":66,"y":132,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":149,"w":1028,"x":24,"y":1092,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(50) prog verrou internet","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1086,"x":3,"y":3,"hideAfterTimeout":0,"imgId":"4804296111030272","imgUrl":"G13/v30cnYln_Qfd4cxrIeVQ1-2ikoJeskmLp5QcJlwRJNesFcVwMEejiDyif2KKQ57LfQ2Q5jzRCC3WX5rn4J9swej7Ute7GjxanXQPRPTY5W6I6kCY9A","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":95,"w":110,"x":84,"y":132,"hideAfterTimeout":0,"go":55,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":149,"w":1016,"x":39,"y":1461,"hideAfterTimeout":0,"go":57,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(56) nouvelle prog de blocage","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1083,"x":0,"y":0,"hideAfterTimeout":0,"imgId":"6229023937527808","imgUrl":"G13/L-8OJ78HZ3OU1dpvbgntXF1Brie1uXz9TUvgxvFlfzcCVIwXAyKHxXtKVJYFMZJgEonYTjdxBWlZky8X4jR5Dy1wDiFUd_ePfi-fqdDh_HlUsQgi","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":122,"w":134,"x":69,"y":111,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":161,"w":1010,"x":39,"y":1452,"hideAfterTimeout":0,"go":58,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(57) saisir l'heure","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1092,"x":0,"y":0,"hideAfterTimeout":0,"imgId":"6544272658006016","imgUrl":"G13/Ndb3C4qB4bwPVuQ4GW7jOzSlSLL4SWvEEINNqCR4XZW5OUhWXRJYk1wt7ZvWhw1k6d7DcKbV7Ko-FmkLYx6oiyyE9Wa274XdHaw9z9l5in7923Mm7g","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":128,"w":155,"x":858,"y":1779,"hideAfterTimeout":0,"go":59,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":275,"x":534,"y":1791,"hideAfterTimeout":0,"go":57,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(58) verrouiller internet","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1083,"x":0,"y":3,"hideAfterTimeout":0,"imgId":"5068716208816128","imgUrl":"G13/ujrnUDNqV-az0LoXkCc-0FqSnrLZ9WBd_A33BjNVxjMqCF_vPXsxDhr7iqcvtxkftXD0Z2SDTjLH5hBD0I1m5gLTzWb1IpxUKfadilDx2S1pX0wAlw","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":149,"w":995,"x":48,"y":1632,"hideAfterTimeout":0,"go":60,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":134,"x":72,"y":120,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(58) deverouiller internet","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1083,"x":-6,"y":-3,"hideAfterTimeout":0,"imgId":"6504406637346816","imgUrl":"G13/qmjC40Tq7qGDTqWAixaOwr4v9dor4nd2R8L5ksZszw2Vr5LOkWw6DdDNNKhzVBhGh10plu-wrPlN_M5O7rwbSyN-TSbfVQPENqOY67f12W5sGToGRZw","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":101,"w":119,"x":843,"y":1770,"hideAfterTimeout":0,"go":61,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":266,"x":537,"y":1767,"hideAfterTimeout":0,"go":59,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(60) ajuster l'heure","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1086,"x":-6,"y":-3,"hideAfterTimeout":0,"imgId":"5447763078152192","imgUrl":"G13/W-f2vdKVLbbLVtBWBFH-nH4XoRnXQ8DuvYHa3fDO2mZUu6IWn-TNjUtw12ALpzGDCAGgrC6qFO0riFaKcNIo5sOcbsXMyPmBHPJXPzoLi7bQgfO8UQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":128,"w":116,"x":69,"y":114,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":149,"w":1004,"x":36,"y":1797,"hideAfterTimeout":0,"go":62,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(61) ok","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1095,"x":-9,"y":0,"hideAfterTimeout":0,"imgId":"5990247176863744","imgUrl":"G13/rWTjuApizV77mvc3BHKpVeutZgK_rzLxctOtjjwZ-nr4N3QDGXwC-7Ha53696SVBhSP3hdhz3E62Ba-7KjtcGxopbY-pCV8wzDWC4TTHInZuiDTO","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":131,"w":335,"x":0,"y":1023,"hideAfterTimeout":0,"go":61,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":140,"w":365,"x":717,"y":1011,"hideAfterTimeout":0,"go":63,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(62) repeter","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1083,"x":0,"y":-3,"hideAfterTimeout":0,"imgId":"5014714343489536","imgUrl":"G13/EmQPltJTfAQrNGubmX7Dw2hwywyMkjBjAbgMSSDhzvjRqjUHauy_UPF_OyhyeMtjrdzT5V1u4gQ1Jx9yyBtl-aSkQofqzsTww15Zqz6EiL0HJ9ntoA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":113,"w":143,"x":69,"y":132,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":101,"w":254,"x":759,"y":126,"hideAfterTimeout":0,"go":64,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(63) enregistrer","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2409,"w":1089,"x":-6,"y":0,"hideAfterTimeout":0,"imgId":"5432451184197632","imgUrl":"G13/O4n7qRqu68C0rNMZVT7pv02C-Iv0GWrI4naD0sjxzt4tbr5nNSHeY3ad6-5FaNPS-SHtOYfT9XSTjxCG2FZ3YFv6aCq_HVJBoCD4BupfSgLMACb8QQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":125,"w":146,"x":66,"y":123,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":263,"w":1010,"x":33,"y":1092,"hideAfterTimeout":0,"go":65,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":149,"w":1004,"x":39,"y":1413,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(64) enregistrer","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2409,"w":1086,"x":-3,"y":-6,"hideAfterTimeout":0,"imgId":"6244090078822400","imgUrl":"G13/XDPxBATTFNb7D3pmJsCesqtQINPUibMM4NP1G369uUiWZxG3VJCM4Knh56XgGh02SqDoVy-d5AavXnyxD_Tln4ixA5cGE4YGyoc7nGnKiy-30K5N","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":164,"w":1019,"x":33,"y":1395,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":278,"w":1016,"x":36,"y":1077,"hideAfterTimeout":0,"go":64,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":113,"x":78,"y":113.9999771118164,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(65) desactiver perso","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2406,"w":1086,"x":-6,"y":-3,"hideAfterTimeout":0,"imgId":"4983328467320832","imgUrl":"G13/CbfE1aIKlg0nu51RaMRZPcBUZLenSen6T413cWbYMP8KnXyHFDc2-Kg8YjkiMd7rak4aIbuh453Ao86MhUPjuHPuI5kcrvLtHzEEBapkT0DEn9nBCok","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":122,"w":125,"x":69,"y":105,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(50) parametre evenements","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2391,"w":1080,"x":0,"y":3,"hideAfterTimeout":0,"imgId":"5476998987644928","imgUrl":"G13/9RtLVZbxo5o7LSO2qmsUiZs6HQ1JcALrao2-w2m-mR6OjI2tpyf593nS3576y_pRUsjO37lXWbo6eIheVSr_YfWIChCmAvl0tNciWigu577PImWbog","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":104,"w":131,"x":33,"y":135,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":98,"w":119,"x":813,"y":138.0000228881836,"hideAfterTimeout":0,"go":11,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":98,"w":104,"x":951,"y":138.0000228881836,"hideAfterTimeout":0,"go":16,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":122,"w":791,"x":48,"y":414,"hideAfterTimeout":0,"go":21,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(50) afficher tout","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1080,"x":0,"y":0,"hideAfterTimeout":0,"imgId":"6178829216776192","imgUrl":"G13/umFZOwcNVkZ-Iz4UATHdZC-zOuiubXbx8nEgGD51xyW0qhQ7nSmtrw_QauXejI1rqxbgRwciq8OujAE_BMQn76a6jhiH_xSyZFBiBkK_HsXouRIa","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":134,"w":1019,"x":36,"y":1839,"hideAfterTimeout":0,"go":69,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":1697,"w":1052,"x":27,"y":27,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(3) 3 ptits  points modules","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2388,"w":1074,"x":0,"y":3,"hideAfterTimeout":0,"imgId":"6475862821568512","imgUrl":"G13/vkuW0wDxnOd-TRsjBZaK79B1kVtdwfYuFCeeEryP22zq08hdhK9KlW8AWegskl1y3eOyt0o4bR7o7J4aJqhPEOgRHw_7i1jb2oaQ_fk7-VikRlj-mA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":113,"w":119,"x":66,"y":126.0000228881836,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":269,"x":777,"y":129.0000228881836,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":140,"w":944,"x":63,"y":1749,"hideAfterTimeout":0,"go":"n","borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(69) localiser et renommer modules","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2394,"w":1083,"x":-3,"y":3,"hideAfterTimeout":0,"imgId":"5674763105599488","imgUrl":"G13/Y9zGFSduox9vquZJwDhHRBxX0EtZx7hnCdaVow0EYsBDgA5aBVGvbH4Y9rmBku_yb6s8XwBL8hLGIOgDpTZkJIx06PsMQS9MSKzfgz3USCLrN1RqIuE","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":125,"w":134,"x":63,"y":117.00004577636719,"hideAfterTimeout":0,"go":69,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":95,"w":263,"x":786,"y":135.0000457763672,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":134,"w":923,"x":81,"y":1299,"hideAfterTimeout":0,"go":69,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(70) 1 choix","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2394,"w":1077,"x":0,"y":6,"hideAfterTimeout":0,"imgId":"4980957175611392","imgUrl":"G13/2yVnWQk3qg05lirVtepAy9UypBniq9FrpXnRWcwXkZDjpkMKVTdVOOgzFKAMHuugr6v_am4bxaeWflFx7jLC-aeGwDHgJGq0qRa6_2WVy8CeHzezrw","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":119,"w":173,"x":21,"y":129.0000228881836,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":128,"w":140,"x":894,"y":135.0000228881836,"hideAfterTimeout":0,"go":72,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":131,"x":108,"y":2034.0000457763672,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":131,"x":468,"y":2040.0000457763672,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":131,"x":828,"y":2046.0000457763672,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"button","h":99,"w":303,"x":393,"y":2211.000045776367,"hideAfterTimeout":0,"go":73,"itrans":0,"text":"Descendre","fontFamily":"Arial","fontSize":40,"fontWeight":"bold","textColor":"#000000","backgroundColor":"#aaaaaa","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100},{"type":"hotspot","h":302,"w":974,"x":51,"y":1506,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"button","h":120,"w":360,"x":333,"y":132,"hideAfterTimeout":0,"go":24,"itrans":0,"text":"Retour Menu et Paramètres","fontFamily":"Arial","fontSize":40,"fontWeight":"bold","textColor":"#000000","backgroundColor":"#aaaaaa","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100}],"color":"#ffffff","label":"(3) passerelle","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1080,"x":0,"y":-3,"hideAfterTimeout":0,"imgId":"4865731792994304","imgUrl":"G13/XLfzKanRVRm6w-CyjJra27XdbX92c22xJ7SHdoNeqSKSylWt8jMQx2OTxEJObGrbkATdvZwf3UPe7MOo6g1j8PnyknPaKVDh_tTWcICyz9cYqBJpeg","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":1523,"w":1055,"x":12,"y":15,"hideAfterTimeout":0,"go":71,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":1034,"x":39,"y":1650,"hideAfterTimeout":0,"go":75,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":1019,"x":54,"y":1851,"hideAfterTimeout":0,"go":76,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":122,"w":1022,"x":48,"y":2040,"hideAfterTimeout":0,"go":69,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(72) 3 ptits points","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2391,"w":1071,"x":6,"y":6,"hideAfterTimeout":0,"imgId":"6572546318663680","imgUrl":"G13/-c--I386NqXZAK0rUkzSHo0Cgk4AxmhwuFfH8FXxn3knYW4i66_Fzxlp_0-uS7Gm5uwQoUJfYI57pZk0ClXBcylxWBl3KLXhTVFttU0BMe0mBgGf","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":104,"w":143,"x":111,"y":2031.0000686645508,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":101,"w":146,"x":468,"y":2031.0000686645508,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":125,"x":834,"y":2028.0000686645508,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":146,"w":953,"x":66,"y":1527,"hideAfterTimeout":0,"go":74,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"button","h":120,"w":360,"x":360,"y":1821.0000686645508,"hideAfterTimeout":0,"go":71,"itrans":0,"text":"Remonter","fontFamily":"Arial","fontSize":40,"fontWeight":"bold","textColor":"#000000","backgroundColor":"#aaaaaa","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100},{"type":"hotspot","h":287,"w":959,"x":60,"y":906,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(72) descendre","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"hotspot","h":113,"w":119,"x":75,"y":126.0000228881836,"hideAfterTimeout":0,"go":71,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"id":"6265446493323264","url":"G13/sbnKSBafvmOgkEU1M5AcK8tHnj37NcQboY8YdOqDa86f2Giw4LfIJ0PYcu2AGaXxHLkE7nb-7EyCggez3McRXvm0l-htClDaTIQGYgSHc9oI9oDj","w":1080,"h":2532,"label":"(74) afficher tout","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"image","h":2394,"w":1080,"x":3,"y":0,"hideAfterTimeout":0,"imgId":"5148082943033344","imgUrl":"G13/_XhebhzrtbcQc7iIoY0eF2T1YzgqHpKOGzJkp2KDgWF1cRCRdEAjv0TrtXrxAS2i2cbT8pMkoJjjlfnDzA4PkKnL_937WQv3UNKQlXyimgRMvjNhPA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":104,"w":113,"x":42,"y":144.0000228881836,"hideAfterTimeout":0,"go":71,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":125,"w":287,"x":750,"y":144.0000228881836,"hideAfterTimeout":0,"go":"n","borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(73) renommer le module","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1092,"x":-9,"y":0,"hideAfterTimeout":0,"imgId":"4618710532227072","imgUrl":"G13/U56smzoM2SBmLPe35Cf8r61BwHL1H1ZoWMqepzcrb31EviPYryTguGPPmR6OTgyDgEBOjrFk8LH0uTdcNQ9jkxCIotOqs49p6Tbafe7bR8HXuK6Y","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":1100,"w":1070,"x":0,"y":0,"hideAfterTimeout":0,"go":71,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(73) info materiel","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2391,"w":1071,"x":6,"y":3,"hideAfterTimeout":0,"imgId":"5048912819257344","imgUrl":"G13/bEPmRcNARt5g0K49RctMylEvdtqF5RNY1b4XKAQjuUf5r7XHJrUDiLr5-GHRg1bjd0cIzG094PKwFOh2m7lfHhaoFUhW-gegqwF91UZ5fneZ1WThhQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":107,"w":122,"x":39,"y":132.0000228881836,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":128,"w":131,"x":111,"y":2024.9999771118164,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":125,"w":167,"x":456,"y":2025.0000686645508,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":125,"w":149,"x":822,"y":2024.9999771118164,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":122,"w":131,"x":909,"y":129.0000228881836,"hideAfterTimeout":0,"go":72,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"button","h":120,"w":360,"x":345,"y":141,"hideAfterTimeout":0,"go":24,"itrans":0,"text":"Retour Menu &amp; Paramètres","fontFamily":"Arial","fontSize":40,"fontWeight":"bold","textColor":"#000000","backgroundColor":"#aaaaaa","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100}],"color":"#ffffff","label":"(3) module autres cuisine","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2388,"w":1071,"x":0,"y":3,"hideAfterTimeout":0,"imgId":"6412718371766272","imgUrl":"G13/-VbBsV_QufOF5qDV8wYVaml2GW_AxG1IJiDumJRPVjWlOO3BMNQFdOXHfYXV-mFUhzjXMf_Wa-eSoAoJ0DWhTpCYOgfPwdAHZN1sdHBuWuM1vbBhdA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":119,"w":128,"x":111,"y":2013.0000686645508,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":125,"w":161,"x":462,"y":2013.0000686645508,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":140,"x":819,"y":2019.0000686645508,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":128,"x":33,"y":132.0000228881836,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":119,"x":906,"y":129.0000228881836,"hideAfterTimeout":0,"go":72,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":242,"w":929,"x":90,"y":1665,"hideAfterTimeout":0,"go":49,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"textbox","h":363,"w":960,"x":0,"y":1206.0000228881836,"hideAfterTimeout":0,"text":"Mêmes paramétrage que les appareils les plus actifs","fontFamily":"Arial","fontSize":58,"fontWeight":"bold","textColor":"#ff0000","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":false,"autotypingTimeout":500},{"type":"arrow","h":270,"w":270,"x":696,"y":1437.0000686645508,"hideAfterTimeout":0,"color":"#ff0000","angle":200,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":-4},{"type":"button","h":120,"w":360,"x":342,"y":144,"hideAfterTimeout":0,"go":24,"itrans":0,"text":"Retour Menu &amp; Paramètres","fontFamily":"Arial","fontSize":40,"fontWeight":"bold","textColor":"#000000","backgroundColor":"#aaaaaa","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100}],"color":"#ffffff","label":"(3) module autres s-sol","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2394,"w":1080,"x":-3,"y":0,"hideAfterTimeout":0,"imgId":"5817559250632704","imgUrl":"G13/9mnbk3XJFjefQikPIEsk98nxKHSZ-8DtDmAdHgTfXzunJ8Xit4GgjcOwP6paNrdgLtWC_IVJoLLbJ7MeQzIMgrA1_XuqsShaKPmeq5Bmy1CgoNRY","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":98,"w":107,"x":84,"y":126.0000228881836,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":287,"w":254,"x":642,"y":1200.0000686645508,"hideAfterTimeout":0,"go":78,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":332,"w":311,"x":150,"y":1242,"hideAfterTimeout":0,"go":71,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":161,"w":134,"x":906,"y":116.9999771118164,"hideAfterTimeout":0,"go":80,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(3) afficher le reseau","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1074,"x":3,"y":3,"hideAfterTimeout":0,"imgId":"5934343546994688","imgUrl":"G13/qIcRvOjEIz2lbl42NMsw_5daQVVhM1P4ilHE12qGBPrBZ1Jh-OsZWCez-TjRbA70E5fPaEP-jvL6brIYvlqt6l77OFFVKQehU3ZCMj07BlOGJsFRDg","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":1721,"w":1061,"x":9,"y":18,"hideAfterTimeout":0,"go":79,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":137,"w":992,"x":39,"y":1836,"hideAfterTimeout":0,"go":69,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(80) 3 ptits points","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1074,"x":6,"y":3,"hideAfterTimeout":0,"imgId":"4734926307459072","imgUrl":"G13/7XNjmZmg_QKjWpleixrMS4ZrbPwD-32o9USv2i-SWUmF9GqncRH8BxYICDbXWwZEwYVeKUsQPrlfOAUIxVWRFBOmQRVSqm98W1S4hYzat2Ctc2h5AVY","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":131,"w":146,"x":72,"y":126.0000228881836,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":149,"w":986,"x":51,"y":312,"hideAfterTimeout":0,"go":56,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"button","h":120,"w":360,"x":342,"y":591,"hideAfterTimeout":0,"go":24,"itrans":0,"text":"Retour au Menu e&amp; Paramètres","fontFamily":"Arial","fontSize":40,"fontWeight":"bold","textColor":"#000000","backgroundColor":"#aaaaaa","borderColor":"#666666","textColorH":"#ffffff","backgroundColorH":"#cccccc","borderColorH":"#888888","borderWidth":6,"borderRadius":20,"opacity":100}],"color":"#ffffff","label":"(3) parametres controle","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"hotspot","h":116,"w":134,"x":69,"y":120,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":281,"x":759,"y":129,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"textbox","h":168,"w":960,"x":0,"y":483,"hideAfterTimeout":0,"text":"Cliquez pour définir la durée du délais","fontFamily":"Arial","fontSize":46,"fontWeight":"bold","textColor":"#ff0000","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":1,"autotyping":false,"autotypingTimeout":500},{"type":"arrow","h":174,"w":174,"x":783,"y":414,"hideAfterTimeout":0,"color":"#ff0000","angle":78,"arrowStyle":"curve","arrowLineWidth":4,"arrowCurveAngle":0},{"type":"textbox","h":201,"w":960,"x":111,"y":972,"hideAfterTimeout":0,"text":"Cliquez ici pour choisir un appareil","fontFamily":"Arial","fontSize":50,"fontWeight":"bold","textColor":"#ff0000","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":0,"autotyping":false,"autotypingTimeout":500},{"type":"arrow","h":105,"w":105,"x":33,"y":948,"hideAfterTimeout":0,"color":"#ff0000","angle":342,"arrowStyle":"curve","arrowLineWidth":6,"arrowCurveAngle":-6},{"type":"textbox","h":198,"w":624,"x":105,"y":693,"hideAfterTimeout":0,"text":"Tout sélectionner","fontFamily":"Arial","fontSize":54,"fontWeight":"bold","textColor":"#ff0000","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":0,"autotyping":false,"autotypingTimeout":500},{"type":"arrow","h":129,"w":129,"x":672,"y":702,"hideAfterTimeout":0,"color":"#ff0000","angle":65,"arrowStyle":"curve","arrowLineWidth":7,"arrowCurveAngle":4}],"id":"6135902604099584","url":"G13/jLJ9Uo1Byfg_-wq84U36iiuZBKQ2JTg5eNzA-_qgbWEZ5gWSlAcWs376-ICRvtagye_mjWYyF1zy4Mewuf1EScQUb7bxqr7CjFpzt5J0am3kcdQEVA","w":1080,"h":4378,"label":"(3) Définir un delais d'attente","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"image","h":2388,"w":1068,"x":6,"y":6,"hideAfterTimeout":0,"imgId":"5091907186720768","imgUrl":"G13/6uL6j3vzTaITWFMW2VAR0JUBJgd38EBBaXkC1A_EDRXpwX15Pfwx8GWhxm78NWQagIv7fZErU4zs1i4km3QBQojdx-CUqg-z_WwaGtMceRsDGrCu4iQ","itype":"on screen","imgW":512,"imgH":1110},{"type":"textbox","h":480,"w":960,"x":42,"y":975,"hideAfterTimeout":0,"text":"Pour organiser les icônes, simplement tenir votre doigt enfoncé, pour pouvoir déplacer les blocs, selon l&#39;ordre que vous désirez les voir dans le menu, et cliquez sur Terminer","fontFamily":"Arial","fontSize":50,"fontWeight":"bold","textColor":"#0000ff","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":false,"autotypingTimeout":500},{"type":"hotspot","h":119,"w":131,"x":69,"y":120,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":221,"x":807,"y":129,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"(3) personnaliser la disposition","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2406,"w":1080,"x":-3,"y":-3,"hideAfterTimeout":0,"imgId":"5335141427183616","imgUrl":"G13/nNuYFUibmZFRG5ipvlawVSwyjHrShnuDyZp-ND7Xr0byxk_4bp7ATWapfHbDM5gL7phyoonMLycDQW4poeuxT1zMHb_1E8vBnVs4ByK0X7_HAmkC028","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":113,"w":152,"x":762,"y":2205,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":1826,"w":1082,"x":0,"y":90,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":194,"w":1061,"x":0,"y":1986,"hideAfterTimeout":0,"go":85,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"ajouter personne (+) p24","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2403,"w":1071,"x":6,"y":0,"hideAfterTimeout":0,"imgId":"4704650630004736","imgUrl":"G13/4SsBC_6AKE5GGkHAid33m7S7-Bkn4nblV1aowWfrGS7RIQtSg-gbbQmcNPMidJAIkTrDc1r5mCpn56ZQ0C_hLa-cy5frHvNIY2UD6qAFuxiU1LDhAw","itype":"on screen","imgW":403,"imgH":877},{"type":"hotspot","h":110,"w":125,"x":66,"y":123,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":233,"x":810,"y":123,"hideAfterTimeout":0,"go":86,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"taper le nom (p85)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1086,"x":0,"y":0,"hideAfterTimeout":0,"imgId":"6440298453925888","imgUrl":"G13/DAqjL5ovsbD8ztCmZCMavKxymOY9lbZNt3XgdPsk22lwn9dcQoIUKnaZStPbd82cWUbA0wU63BKeDeSU9U6OOH3U7uRHWh71_VMFba9FrlehoYaN0g","itype":"on screen","imgW":464,"imgH":1006},{"type":"hotspot","h":104,"w":107,"x":81,"y":129,"hideAfterTimeout":0,"go":85,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":239,"x":801,"y":120,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"textbox","h":294,"w":960,"x":24,"y":1731,"hideAfterTimeout":0,"text":"cliquez sur le type de contenu que la personne crée peut consulter.","fontFamily":"Arial","fontSize":60,"fontWeight":"normal","textColor":"#6666ff","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":false,"autotypingTimeout":500},{"type":"arrow","h":1125,"w":1125,"x":-45,"y":732,"hideAfterTimeout":0,"color":"#6666ff","angle":339,"arrowStyle":"curve","arrowLineWidth":3,"arrowCurveAngle":6}],"color":"#ffffff","label":"finaliser creation personne (p86)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"hotspot","h":113,"w":149,"x":903,"y":126,"hideAfterTimeout":0,"go":84,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":125,"x":117,"y":3864,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":116,"x":840,"y":3870,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":89,"w":233,"x":603,"y":3744,"hideAfterTimeout":0,"go":88,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"id":"4771973235736576","url":"G13/U1DtGpKYsnMxni8Ob6PmNeU1FhQjSnN1Y6gomJTOJO-f6sHzRKAES7FM3xLRAy1b1W9hDdx4MZwPPsy1A2A2KPv3AjvmpcBo3mxANnLMHGNxe8L4kw","w":1080,"h":4029,"label":"creatio personne","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"hotspot","h":104,"w":245,"x":240,"y":5307,"hideAfterTimeout":0,"go":87,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":125,"w":146,"x":99,"y":5439,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":125,"x":840,"y":5439,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":92,"w":206,"x":447,"y":513,"hideAfterTimeout":0,"go":89,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":263,"x":738,"y":504,"hideAfterTimeout":0,"go":90,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"id":"4717727530352640","url":"G13/5ndJd7NPyb8ietfSRXujCzxWE6v2PEG4ssnIq-NyOhEX97iSyIx5f018d00xhlOkGfiLy0rE6Z9Pg65c8finZnR8OO_imyK_RkzcvQZwP8hRcOdBzg","w":1080,"h":5604,"label":"appareils (p24-88)","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"color":"#ffffff"},{"objects":[{"type":"image","h":2400,"w":1077,"x":0,"y":3,"hideAfterTimeout":0,"imgId":"6044315505131520","imgUrl":"G13/44SbdXxt1-tNEA48sQgMA3KnjkfLHPgDaMpcxTH5MNt9ChZqn1-2FDf0ofDApFZ9Kt0mJ6tHcYUXInJD0ljbVPZ_lHE4wrR-0h5R75mrxgxCmSyD0A","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":80,"w":191,"x":111,"y":519,"hideAfterTimeout":0,"go":88,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":272,"x":726,"y":501,"hideAfterTimeout":0,"go":90,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":146,"x":102,"y":2031,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":146,"x":822,"y":2025,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":95,"w":305,"x":204,"y":1902,"hideAfterTimeout":0,"go":87,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"appareils invités (89)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2397,"w":1077,"x":3,"y":3,"hideAfterTimeout":0,"imgId":"5729446083952640","imgUrl":"G13/A3N9WVYl4fcWUqs9TV8gsByzB0yh5YlN3WuMAHoLvoKfiKnNJSoZ_UvfJF3eB3Hoy7YG29VPgD_ivOHT7LfvgMKjxnom3zm7LRWdZv3OcOApW5YKEtg","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":95,"w":254,"x":411,"y":510,"hideAfterTimeout":0,"go":89,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":86,"w":221,"x":93,"y":513,"hideAfterTimeout":0,"go":88,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":74,"w":263,"x":222,"y":1911,"hideAfterTimeout":0,"go":87,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":140,"x":117,"y":2022,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":101,"w":140,"x":831,"y":2034,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"internet uniquement (89)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"hotspot","h":98,"w":245,"x":234,"y":4980,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":119,"x":105,"y":5094,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":134,"x":831,"y":5091,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":206,"x":432,"y":507,"hideAfterTimeout":0,"go":98,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":107,"w":233,"x":756,"y":510,"hideAfterTimeout":0,"go":"n","borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":329,"w":1004,"x":36,"y":1449,"hideAfterTimeout":0,"go":100,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"section appareils","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"5063530492985344","url":"G13/oQeBXDpz8_KE-czyWgpTcxD00ketoXX-SDjm1HoYzR-8_hbM4AFI4XyWCYaakVDIPxXlwrDJpgLCLA7fcmV-K1wW6pivn9qEyA9SO9Gzm7JyIzLr1-U","w":1080,"h":5269},{"objects":[{"type":"hotspot","h":128,"w":143,"x":21,"y":117,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":245,"x":606,"y":3270,"hideAfterTimeout":0,"go":91,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":143,"x":459,"y":3399,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":125,"w":119,"x":114,"y":3393,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":128,"x":828,"y":3396,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"2 personnes a la maison","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"6227112563834880","url":"G13/3LyrEQFHA209eY0PZvTLbdUJVnSWXDBMtTEUPwMKMyscbiunYIFEwzsjK__S5DfWz5mOnwm5JOJBKzGjtG2K3fPfRVVEaEC2MuPRa9KhNKrM5yGAdg","w":1080,"h":3556},{"objects":[{"type":"hotspot","h":104,"w":104,"x":48,"y":129,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":89,"w":245,"x":606,"y":3672,"hideAfterTimeout":0,"go":91,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":137,"w":125,"x":105,"y":3786,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":110,"w":134,"x":471,"y":3798,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":131,"w":137,"x":819,"y":3792,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"à lamaison","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"5696674963390464","url":"G13/BHgKHAUYyM4lgwQPlmkrifadfVeWBjiMQ0Z6Ik8MjuFZ3zkArEOjyCNwwxQ6Wk_8GMI7bX5FHQ1dCvSCnRvOqixJ97R1KubLbQl-rPFVubtoS6zi","w":1080,"h":3955},{"objects":[{"type":"hotspot","h":1523,"w":1067,"x":6,"y":45,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":803,"x":66,"y":1668,"hideAfterTimeout":0,"go":96,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"definir un delais d'attente (24)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0,"id":"4541579076829184","url":"G13/9mgucJcJSoieC0ooWg1L3chmX-bzNE4l91kDZPdXTIrrICEu3dG1u68IWptCzyeL0rnOt6gzz4g9L4kFUjxGSlQTFXx0h0hjgPGEaz7fzLqBFnWdOQ","w":738,"h":1600},{"objects":[{"type":"hotspot","h":1784,"w":1088,"x":-12,"y":42,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":128,"w":1013,"x":48,"y":1899,"hideAfterTimeout":0,"go":97,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"3 ptits points maisons 24","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0,"id":"4841791397822464","url":"G13/N-y1qrcsVRm903HKsQvi0Wj9CHD3kmgZCouwdKpwbDILJnmcO5H4buq75wVpI3mFcjs-7GEbH6XUOn6wOD7Mn8jzkUXddDnEhiHu5S3NAXI3egIxvA","w":738,"h":1600},{"objects":[{"type":"hotspot","h":92,"w":236,"x":504,"y":1368,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"textbox","h":363,"w":960,"x":60,"y":1521,"hideAfterTimeout":0,"text":"En appuyant sur ok, un délais d&#39;attente sera activé. pour enlever le delais simplement cliquer sur le x (qui prendra la place du bouton pause de la p. precedente.","fontFamily":"Arial","fontSize":46,"fontWeight":"normal","textColor":"#ff0000","backgroundColor":"#eeeeee","borderColor":"#aaaaaa","borderWidth":0,"borderRadius":0,"padding":0,"textAlign":"center","verticalAlign":"middle","opacity":90,"autotyping":false,"autotypingTimeout":500}],"color":"#ffffff","label":"saisir l'heure du delais (24)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0,"id":"5739507262947328","url":"G13/t9j3THQJqveIv6Nvp5Jbz4CTITaU3AHTEjdL8HZxq_rIOWfDIE8Bg8mXryV8XJKOX4opfL1RNBDjsODZQ5hJsf8Ww-W-8LOXdfuy9ozOBWQs7Tr-TQ","w":738,"h":1600},{"objects":[{"type":"hotspot","h":98,"w":116,"x":72,"y":159,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"appareils attribués (24)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0,"id":"4872994591080448","url":"G13/vKC876Lsib0KEtComPkH7tOIk5uqm9W9PLkR_hZAS8yHusWuyb6EGVVPlq9vfytJSCbv4UFP6Ko_iyHIxVRhn8Mnx3Qek1AF5F_XD4SqOPGjwHZV","w":738,"h":1600},{"objects":[{"type":"hotspot","h":101,"w":209,"x":102,"y":537,"hideAfterTimeout":0,"go":91,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":122,"w":257,"x":753,"y":525,"hideAfterTimeout":0,"go":99,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":128,"w":128,"x":114,"y":2061,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":134,"x":471,"y":2064,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":131,"w":146,"x":819,"y":2064,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"invités (92)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0,"id":"4904111373287424","url":"G13/rIdr3MPApKrMYl_-OuiSIcZJvkCwaTZdrbk-dY8nmbzP0QduFvYn6RYc33Fbc_bvgYbxHZuT6_ursobWPG6ln19NkXwLoGTbE2El-sc6D2-xyihyrg","w":738,"h":1600},{"objects":[{"type":"hotspot","h":104,"w":203,"x":96,"y":534,"hideAfterTimeout":0,"go":91,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":218,"x":441,"y":537,"hideAfterTimeout":0,"go":98,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":104,"x":852,"y":2067,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":119,"x":477,"y":2061,"hideAfterTimeout":0,"go":23,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":107,"x":114,"y":2064,"hideAfterTimeout":0,"go":2,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"internet uniquement (92)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0,"id":"6392299342266368","url":"G13/sO-2IanKX0kNnsik8XfIx0IvpnQSTw30crEBE0KG-k8nDwmdXeOEKdPC3s8YB63kTSSdjhMiz_dl-pwOEZSBUChZk5f7vL7_MhiTVmVHgs7jaigJT_k","w":738,"h":1600},{"objects":[{"type":"hotspot","h":107,"w":119,"x":33,"y":132,"hideAfterTimeout":0,"go":91,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":221,"w":1031,"x":30,"y":1803,"hideAfterTimeout":0,"go":101,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"integration iot (92)","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"5420626275205120","url":"G13/xBKn9Q0RcTVCH20wxWWoUnY_KZlqX0LHznTrowc6eHrr8mvYT3FziFf-DqY-QT5wIzaUAZ36qS8M_CkvSbw2R1PVAVu_cnmTT08A-h9-b8ZE9kHP","w":1080,"h":3499},{"objects":[{"type":"hotspot","h":107,"w":107,"x":78,"y":123,"hideAfterTimeout":0,"go":100,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":131,"w":236,"x":807,"y":114,"hideAfterTimeout":0,"go":100,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":158,"w":866,"x":102,"y":1974,"hideAfterTimeout":0,"go":102,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"integration iot2 (101)","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"5119736838356992","url":"G13/eihgsTUEl9OQiiCCatDAL3B5NXw_3dDlYf_hMSJqXxERX8YWlt-so3xUMEvfX1VGTuDx3Unc7kE_flMCNmCN4fLbOXz5Mote1iNQ98RG7Uqkg6BhTQ","w":738,"h":1600},{"objects":[{"type":"hotspot","h":104,"w":152,"x":54,"y":123,"hideAfterTimeout":0,"go":103,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":104,"w":221,"x":807,"y":132,"hideAfterTimeout":0,"go":103,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":149,"w":848,"x":120,"y":1971,"hideAfterTimeout":0,"go":100,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"activer iot (102)","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"6508587540545536","url":"G13/P6bU9_ijpi_I6bZ_BKXplaQYOtcbVdSdEEnPvaAr__AO4tlziVwJhZQ5THfttxW8AXJV9FtciSZl1NtUqd-f9zEWcXaxol0e4KmyFZ0FN8Z381uWlWs","w":738,"h":1600},{"objects":[{"type":"hotspot","h":233,"w":1013,"x":33,"y":1803,"hideAfterTimeout":0,"go":102,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":116,"w":140,"x":15,"y":126,"hideAfterTimeout":0,"go":91,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"retour iot actif (103)","fold":0,"layout":"scroll","scrollTop":0,"scrollBot":0,"id":"6270396694790144","url":"G13/wRBmeF6JGtAccF1zbQDB5hZKm3mYXHGdBt-CHYLsL_OfTHkfXCEIapKO6Zf-bJe9epbnVGwiYXtU0A-d5-KfMwgm1AH_zqTacRv9MbIULN5nIfcSbQ","w":1080,"h":3499},{"objects":[{"type":"image","h":2403,"w":1071,"x":3,"y":0,"hideAfterTimeout":0,"imgId":"4551874025357312","imgUrl":"G13/vb-EIDi4lE1TMTrjDok87kSi3PK2_E9B6RaE8QUEf0-coeRdYFf-qzJpBWEnHImvxKgrVPjoO2MfgWbHrZfD-rVwF-I1yeAwuGaKZUGJxWt7IhtlRw","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":107,"w":128,"x":63,"y":132,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":113,"w":122,"x":888,"y":357,"hideAfterTimeout":0,"go":"n","borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"emplacement menu et par (25)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2409,"w":1101,"x":-9,"y":-6,"hideAfterTimeout":0,"imgId":"6114647301685248","imgUrl":"G13/8xKQGXR60YQ8zr_YszG3ajoGEFeF8kBLPIrz15xW3toqGhgXwJqmLTxmFvnV4QuBNUbT2JrwOhU6L_rHKzbQcpa4klhZa2AHozxXXl41q0_mBYQYaEE","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":1985,"w":1112,"x":-6,"y":-15,"hideAfterTimeout":0,"go":104,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":233,"w":1091,"x":0,"y":2007,"hideAfterTimeout":0,"go":105,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"3 points emplacement (105)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2388,"w":1080,"x":-6,"y":0,"hideAfterTimeout":0,"imgId":"4995233667874816","imgUrl":"G13/LZcxpNZ_g1KZaP-vgUXZor2CsQlQfZtVpf9-xC-4DMvJDsii_j6DlAAHBIGDOYHgBQOK9Kqz3JRULbgFAP1HMMlj7Vt8BMc0A5OM2ByOXZFvyWHXJvM","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":107,"w":266,"x":642,"y":810,"hideAfterTimeout":0,"go":104,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"renommer emplacement (107)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2400,"w":1077,"x":3,"y":-6,"hideAfterTimeout":0,"imgId":"5600150619160576","imgUrl":"G13/l9aFWrt4AkIcypTjU3pJNVPQTpkFgKCUFRrZ-eyGuP-ry73TH41puC-vjTMx-nSYH0DDMmctJhaOchvAmxbxF2DyfbLyKPcAfyHemTxu5Egdf1_oyA","itype":"on screen","imgW":512,"imgH":1110},{"type":"hotspot","h":155,"w":269,"x":789,"y":96,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0},{"type":"hotspot","h":119,"w":131,"x":840,"y":438,"hideAfterTimeout":0,"go":108,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"Notifications (25)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0},{"objects":[{"type":"image","h":2388,"w":1074,"x":3,"y":9,"hideAfterTimeout":0,"imgId":"6358700496781312","imgUrl":"G13/_cJonYmfgzQZTfbXQD4GT651bWSb3iL5TFlr-AH-pBc1qGuRWQA0HOJ8gmTRsT_uc6u24WeKJSLfx_ms9KMehCLJDi9kgSAKQUNYGqXfAv2r-wRfLyI","itype":"on screen","imgW":405,"imgH":879},{"type":"hotspot","h":116,"w":248,"x":795,"y":132,"hideAfterTimeout":0,"go":24,"borderColor":"#ff6600","borderRadius":8,"borderWidth":-1,"gestureImgId":0,"gestureImgUrl":"","itrans":0}],"color":"#ffffff","label":"notification de personnes (108)","fold":0,"layout":"fit screen","scrollTop":0,"scrollBot":0}]},

showFrame:true,
showToolbar:true,
//hideAds:__hide_ads__,
brandingText:'',
brandingUrl:'',

autoplay:false,
autoplaySeconds:5,
autoplayResume:2,
autoplayTransition:'default',

cursor:1,

showAd: false,
showLeads:false,
leadsScreens:1,

lcClose: true,
lcMessage: 'Contact Info',
lcFields: 'fl_name,email,company,message',

enableAnalytics:false,
analyticsGa: '',

showProgress: false,
showOverview: false,
showCb: false,

settings_cb: {"s":"0","sa":false,"sh":true,"sc":true,"l1_t":"","l1_u":"","l1_o":"","l2_t":"","l2_u":"","l2_o":"","v":""},

disableIframe: false,

}
;

//url param
if (DTools.hasUrlParam('autoplay')) opt.autoplay = true;

// demo
var demo;
window.onload = function() {
	demo = $arRunnerBuild.fullScreen(opt);
};

//resize handler
var width = window.innerWidth;
window.addEventListener('resize', function(e) {
	
	// only check the width change - not the height as on Android Chrome resizes the window when the keyboard is visible
	//console.log('width: ' + width + ' ' + window.innerWidth);
	if (width == window.innerWidth) return;
	width = window.innerWidth;
		
	// detect full-screen video - don't resize
	//console.log('resize: ' + window.innerWidth + 'x' + window.innerHeight + ': ' + window.fullScreen + ' ' + document.webkitFullscreenElement + ' ' + document.mozFullScreenElement);
	var fse = document.webkitFullscreenElement || document.mozFullScreenElement;
	var fsv = fse && fse.tagName == 'VIDEO';
	if (fsv) return;
 	
	opt.screenResize = demo.getSelectedScreen();
	demo = $arRunnerBuild.fullScreen(opt);
});

//keys
window.focus();
window.onkeydown = function(e) {
	switch (e.keyCode) {
	case 27: demo.doRestart(); break;		// esc
	case 37: demo.doPrevScreen(); break;	// left
	case 39: demo.doNextScreen(); break;	// right
	}
};

</script>



</body></html>`,
			/* 'cogeco-wifi-2-sim-en-a':``,
			'cogeco-wifi-sim-fr-a':``,
			'cogeco-wifi-sim-en-a':``,
			'cogeco-wifi-sim-fr-i':``,
			'cogeco-wifi-sim-en-i':``,
			'cogeco-wifi-sim-fr-a':``,
			'cogeco-wifi-sim-en-a':``, */
			 };

        // Inside onShow callback, initialize Tippy for each button
        instance.popper.querySelectorAll('.column button').forEach(button => {
            const tooltipContent = tooltips[button.id];
            if (tooltipContent) {
                tippy(button, {
                    content: tooltipContent,
                    placement: 'left', // Positioning of the tooltip
                    theme: 'light-border', // Optional theme
                    arrow: true, // Show arrow
                    trigger: 'focus', // Show tooltip on mouse hover or focus
					hideOnClick: true,
					allowHTML: true,
					maxWidth: 'none',
					flip: false,
                });
            }
        });
    }
});

    
    // Show the tooltip for App simulator
    tipApp.show();
}


			
				
});
