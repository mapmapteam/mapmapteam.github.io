# Documentation

## Table des matières

- [Disposition](#disposition)
- [Bibliothèque](#bibliothèque)
- [Calques](#calques)
- [Inspecteur](#inspecteur)
- [Formes](#formes)
- [Mode plein écran](#mode-plein-écran)
- [Contrôles d'affichage](#contrôles-daffichage)
- [Sauvegarde et chargement](#sauvegarde-et-chargement)
- [Contrôle externe (OSC)](#contrôle-externe-osc)
- [Dépannage](#dépannage)

## Disposition

MapMap est composé de plusieurs fenêtres, icônes et options de menu. Les fenêtres principales sont la Bibliothèque, les Calques, l'Éditeur d'entrée et l'Éditeur de sortie.

![disposition](/images/layout.png)

## Bibliothèque

La Bibliothèque contient la collection de sources utilisables dans MapMap. Les sources supportées sont :

- Fichiers média tels que :
  - Vidéo (voir les formats vidéo préférés ci-dessous)
  - Images fixes (PNG, JPEG, etc.)
  - GIF animés
- Couleurs/masques
- Webcams (actuellement uniquement sur la version Linux)
- ...et d'autres à venir dans les futures versions

### Sources média

L'importation de nouveaux médias peut se faire de plusieurs façons :

- Cliquer sur Fichier > Importer un fichier média...
- Appuyer sur CTRL+I
- Cliquer sur l'icône dans la barre d'outils
- Glisser-déposer un média directement dans la fenêtre de la bibliothèque

**Formats vidéo préférés :**

- Conteneurs : .mov, .avi, .mp4, .ogg, .ogv
- Codecs vidéo : Motion-JPEG / Photo-JPEG, MPEG4, Apple Pro Res 422

![importer un fichier média](/images/import_media_file.png)

### Sources de couleur

L'ajout de couleurs à la bibliothèque peut se faire en choisissant Fichier > Ajouter une couleur ou en cliquant sur l'icône dans la barre d'outils.

![ajouter une couleur](/images/add_color_paint.png)

Une fois cliqué, le menu suivant apparaîtra. Une fois la couleur sélectionnée, cliquez sur « Ok » pour l'ajouter à la bibliothèque.

![sélection de couleur](/images/color_selection.png)

Les sources média peuvent être supprimées en les sélectionnant dans la liste de la Bibliothèque, puis en choisissant l'option Édition > Supprimer ou en faisant un clic droit sur une source et en choisissant « supprimer la source ». Puisque tous les calques utilisant cette source seront également supprimés, une boîte de dialogue vous demandera confirmation.

![supprimer une source](/images/delete_source.png)

## Calques

À droite de l'onglet bibliothèque se trouve l'onglet calques. Les calques sont des sources média affichées dans l'éditeur de sortie. Les calques sont créés lorsqu'une source de la bibliothèque est sélectionnée et transformée en quad, triangle ou ellipse. Cet onglet permet aux utilisateurs d'afficher/masquer, verrouiller, dupliquer et supprimer des calques.

![icônes de formes](/images/shape_icons.png)

Les calques peuvent être supprimés en les sélectionnant dans la liste des calques, puis en choisissant l'option « Édition > Supprimer ».

![supprimer un calque](/images/delete_layer.png)

Les calques peuvent être réorganisés en les glissant au-dessus ou en dessous les uns des autres. Cela contrôle également l'arrangement des calques dans l'éditeur de sortie. Les calques ajoutent des sommets à la source, ce qui permet de l'éditer de diverses manières.

À côté du nom de chaque calque, il y a cinq icônes :

1. **Icône Masquer :** Masque ou affiche le calque.
2. **Icône Isoler :** Isole le calque sélectionné.
3. **Icône Verrouiller :** Verrouille ou déverrouille le calque pour qu'il ne puisse pas être modifié.
4. **Icône Dupliquer :** Duplique un calque avec tous ses paramètres.
5. **Icône Supprimer :** Supprime le calque sélectionné.

![options des calques](/images/layer_options.png)

## Inspecteur

Sous les onglets Bibliothèque et Calques se trouve le menu Inspecteur. Ce menu change en fonction de ce qui est sélectionné dans l'onglet Bibliothèque ou Calques. Par le menu Inspecteur, les utilisateurs peuvent modifier la source sélectionnée de diverses manières.

### Options de l'inspecteur de calques

1. L'opacité du calque peut être modifiée sur une échelle de 0 à 100%.
2. Les sources vidéo peuvent être changées vers n'importe quelle source de la bibliothèque via le menu déroulant.
3. Pour les calques Mesh, il y a une option supplémentaire intitulée « Subdivisions ». Cette option permet à l'utilisateur d'ajouter des subdivisions supplémentaires à la forme carrée originale. Ces formes peuvent ensuite être modifiées pour créer des mappings complexes sur diverses géométries.
4. Les coordonnées X et Y de chaque point de la forme d'entrée peuvent être modifiées.
5. Les coordonnées X et Y de chaque point de la forme de sortie peuvent être modifiées.

![options de la fenêtre inspecteur](/images/inspector_window_options.png)

### Options de l'inspecteur de bibliothèque

1. L'opacité de la source peut être modifiée sur une échelle de 0 à 100%.
2. L'emplacement de la source peut être modifié en cliquant sur le bouton « ... » pour qu'une source puisse être échangée ou relocalisée.
3. La vitesse de la source peut être modifiée sur une échelle de 0 à 100%.
4. Le volume audio de la source peut être modifié sur une échelle de 0 à 100%.

![fenêtre inspecteur](/images/inspector_window.png)

## Formes

Les formes actuellement supportées sont : Quad/Mesh, Triangle et Ellipse. Lorsque les Meshes ont une dimension de deux par deux (2x2) sommets, ils sont appelés Quads. Lorsqu'ils ont plus de 2x2 sommets, ils sont appelés Mesh. Un Mesh est une grille de sommets qui permettent un mapping plus flexible pour des formes de sortie complexes.

Pour créer une nouvelle forme, choisissez une source dans la bibliothèque et cliquez sur l'icône Quad/Mesh, Triangle ou Ellipse. Une nouvelle forme sera immédiatement affichée dans l'Éditeur de sortie, où sa taille et sa forme peuvent être manipulées en cliquant et en déplaçant ses sommets. Vous pouvez également cliquer sur un sommet et utiliser les touches fléchées pour faire des micro-ajustements. Vous pouvez aussi utiliser les champs numériques dans la fenêtre inspecteur pour déplacer les sommets manuellement. Pour transformer un Quad en Mesh, changez ses dimensions en ajustant les champs de largeur et hauteur.

![édition de sommets](/images/vertex_editing.png)

### Outils de transformation

Les formes peuvent également être transformées via un ensemble de contrôles de transformation. Cliquez sur un sommet et utilisez les raccourcis clavier suivants pour activer les contrôles :

**M = Déplacer**

![outil déplacer](/images/move_tool.png)

**R = Rotation**

![outil rotation](/images/rotate_tool.png)

**S = Échelle**

![outil échelle](/images/scale_tool.png)

## Mode plein écran

Avant de projeter sur une surface, vérifiez les préférences système de votre machine pour vous assurer que votre ordinateur n'est pas en mode miroir, mais qu'il est configuré pour que votre projecteur soit un moniteur externe/supplémentaire. Utilisez ensuite l'icône Basculer en plein écran en haut du menu MapMap pour envoyer le contenu de l'éditeur de sortie vers votre projecteur ou moniteur externe.

![plein écran depuis le menu](/images/fullscreen_from_menu.png)

**Note spéciale pour les utilisateurs Apple :** Dans vos Préférences Système > Mission Control, assurez-vous que « Les écrans disposent d'espaces distincts » est coché, sinon vous aurez des problèmes de contrôle en plein écran.

![mission control](/images/mac_mission_control.png)

## Contrôles d'affichage

Les contrôles d'affichage donnent à l'utilisateur la possibilité de sélectionner et déplacer les sommets dans les menus de l'éditeur d'entrée et de sortie. Pour masquer ces contrôles, cliquez sur le menu « Affichage » puis sur « Contrôles d'affichage ». Cliquez à nouveau pour les réactiver.

![basculer les contrôles d'affichage](/images/toggle_display_controls.png)

## Sauvegarde et chargement

### Sauvegarder le projet dans un fichier

Pour sauvegarder le projet en cours, choisissez « Fichier > Enregistrer sous... » puis choisissez un nom de fichier. L'extension est « .mmp » et le format est simplement du XML.

![enregistrer sous](/images/save_as.png)

### Charger un projet depuis un fichier

Pour charger un projet depuis un fichier, choisissez « Fichier > Ouvrir... ».

![ouvrir un document](/images/open_document.png)

## Contrôle externe (OSC)

**IMPORTANT :** Cette fonctionnalité n'est actuellement pas supportée sur macOS.

MapMap supporte le protocole de communication [OpenSoundControl](http://opensoundcontrol.org/introduction-osc). Les actions actuellement supportées permettent un contrôle complet des sources et calques existants, comme changer un fichier source, ajuster l'opacité et la visibilité, modifier le volume, etc.

Le port OSC par défaut peut être modifié depuis le menu Préférences.

MapMap offre un moyen flexible de contrôler des groupes de sources et de calques en utilisant des [expressions régulières](https://fr.wikipedia.org/wiki/Expression_r%C3%A9guli%C3%A8re). Par exemple, le message OSC suivant changera l'opacité de toutes les sources dont le nom commence par « movie- » à 50% :

```
/mapmap/paint/opacity ,sf "movie-*" 0.5
```

[Lire la référence OSC de MapMap](https://github.com/mapmapteam/mapmap/wiki/OSC)

## Dépannage

### macOS

Pour afficher plus d'informations sur les erreurs qui pourraient survenir, lancez MapMap depuis la ligne de commande. Pour ce faire, ouvrez l'application Terminal (située dans /Applications/Utilitaires depuis le Finder), puis tapez :

```
/Applications/mapmap.app/Contents/MacOS/MapMap
```

Appuyez sur la touche Retour pour lancer.
