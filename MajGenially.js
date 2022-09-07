/**
 * Création d'une instance de Map contenant les informations et les selecteurs caractéristiques des  modes edition, preview, view  de génially:
 * @type {Map<string, string> | Map<information, chaine css>}
 */
let modeM = new Map([['Mode edition','#canva'], ['Mode preview ou view complet', '.container-wrapper-genially .genially-view-slide-container'], ['Mode preview ou view large','.container-wrapper-genially'], ['Mode preview ou view sérré','.genially-view-slide-container']]);

/**
 * transformation de la map en un tableau de selecteurs caractéristiques des modes genially
 * @type {array}
 */
let tabSelecteursA = Array.from(modeM,([clef, valeur]) => ([valeur]));


/**
 * tableau des selecteurs des eléments 'wrappeur' ajoutés par génially (prévoir une systématisation par type)
 * @type {string[]}
 */
let methodeInsersionGenially =['.card-iframe', '.genially-view-rich-content', '.genially-view-item genially-view-group', '.genially-view-text', '.genially-view-item', '.genially-view-item.genially-view-group'];

/**
 * Fonction générique qui teste l'existence d'un élément à partir d'un selecteur
 * @param selecteur
 * @returns {boolean}
 */
const testMode = (selecteur) => {
  if(document.querySelector(selecteur)){
    return true
  }
};

/**
 * Instanciation des variables inEditor (bool) elmtMaitre (elt caractéristique du mode)
 * @type {boolean}
 * @type {elt}
 */
let inEditor;
let elmtMaitre;

/**
 * Fonction qui detecte le mode (édition /view/preview) en allant chercher dans le tableau des selecteurs
 * s'arrete de parcourir le tableau quand il y a un match
 * fixe alors inEditor et elmtMaitre en fonction du résultat
 */
const ouSommesNous = () => {
  for (let selecteur of tabSelecteursA){
    if (testMode(selecteur)){
      if(tabSelecteursA.indexOf(selecteur) === 0){
        //console.log('Index : '+ tabSelecteursA.indexOf(selecteur)+' mode édition');
        inEditor = true;
        elmtMaitre = document.querySelector(selecteur);
      }
      else{
        //console.log('Index : '+ tabSelecteursA.indexOf(selecteur)+' mode view, view social, ou preview');
        inEditor = false;
        elmtMaitre = document.querySelector(selecteur);
      }

      break;
    }
  }
};

ouSommesNous();

//Debug
console.log('Dans l\'éditeur? : '+inEditor);
console.log('Element maitre: '+elmtMaitre.className ? elmtMaitre.className : elmtMaitre.id);


/*TESTS*/


/*Exemples d'utilisation (à améliorer encore : systematisation des "match" par catégorie suivant la méthode précédente)*/

/*1. Chercher et cacher un élément simple S'Cape comme une fonction en mode view ou preview*/
if(!inEditor){
  elmtMaitre.querySelector('#test1').closest(methodeInsersionGenially[0]).style.display = 'none';
  //ou
  //elmtMaitre.querySelector('#test').closest('div').style.display = 'none';
  //ou
  //elmtMaitre.querySelector('#test').parentNode.style.display = 'none';
}
/*2. Cacher un élement groupé avec une image*/
if(!inEditor){
  elmtMaitre.querySelector('#test2').closest(methodeInsersionGenially[2]).style.display = 'none';
}

/*3. cacher tout un groupe*/
if(!inEditor){
  elmtMaitre.querySelector('#test3').closest(methodeInsersionGenially[1]).style.display = 'none';
}



