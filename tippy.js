
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
			'cogeco-wifi-2-sim-fr-a':`<iframe src='//www.appdemostore.com/embed?id=5731082609098752' width='383' height='780' frameborder='0'></iframe>`,
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
