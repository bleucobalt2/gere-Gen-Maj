# gere-Gen-Maj
Code permettant de gérer simplement et systématiquement les Maj de Genially (rajout de div, changement de noms de classe etc...) rendant les extensions inutilisables. (En attendant de trouver une méthode rendant les extensions totalement indépendante des Maj de Genially : tests prometteurs ... mais pas encore fonctionnels).
#### Principe
Le code suivant contient une instance Map (tableau ordonnée de clef/valeurs) de selecteurs caractéristiques des modes "edition", "preview", view". L'instance Map est transformée en tableau. Le reste du code parcourt ce tableau et s'arrête dès qu'il y a un "match" et fixe les valeurs inEditor et  trouve l'élement caractéristique du mode.

Si Genially fait une Maj et rajoute une div, ou change un nom de classe etc ... , il suffit de rajouter un selecteur approprié dans le tableau, ou de permutter l'ordre des selecteurs pour rendre les extensions à nouveau fonctionnelles. 

La même méthode peut s'appliquer aussi aux fonctions, images et zone de texte groupées (ou non) des extensions : il faut juste catégoriser les éléments des extensions et rajouter les selecteurs adaptés dans un tableau du même type... En cas de Maj on complète le(les) tableau(x) avec les nouveaux selecteurs.

Testé en copiant une page genially et la mettant sur un autre serveur avec simulation d'une Maj .. et sur Genially lui même sans Maj ... ça à l'air de fonctionner ...
