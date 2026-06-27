# Télécharger et installer

MapMap 1.0.0-beta.1 est sorti le 23 novembre 2026. C'est la première préversion de MapMap 1.0 : essayez-la et [signalez les problèmes que vous trouvez](https://github.com/mapmapteam/mapmap/issues/new) avant la version finale.

<p><a class="not-prose inline-block rounded bg-gray-900 px-6 py-3 font-semibold text-white no-underline hover:bg-gray-700" href="https://github.com/mapmapteam/mapmap/releases/download/1.0.0-beta.1/MapMap-1.0.0-beta.1-macos-universal.dmg">Télécharger pour macOS</a></p>

[Lire les notes de version (en anglais)](https://github.com/mapmapteam/mapmap/releases/tag/1.0.0-beta.1)

## Plateformes disponibles

- **macOS 13 ou plus récent** (puces Intel et Apple) : [image disque](https://github.com/mapmapteam/mapmap/releases/download/1.0.0-beta.1/MapMap-1.0.0-beta.1-macos-universal.dmg), 51 Mo.
- **Windows et Linux :** il n'y a pas encore d'installateur. Des fichiers pour Windows et Linux sont prévus pour la bêta 2. Pour le moment, vous pouvez [compiler MapMap à partir de son code source](https://github.com/mapmapteam/mapmap/releases/tag/1.0.0-beta.1), offert en zip et en tar.gz, en suivant les [instructions de compilation](https://github.com/mapmapteam/mapmap/blob/1.0.0-beta.1/INSTALL.md) (en anglais).

## Code source

- [Code source de MapMap 1.0.0-beta.1](https://github.com/mapmapteam/mapmap/releases/download/1.0.0-beta.1/mapmap-1.0.0-beta.1.tar.gz)
- [Code source sur GitHub](https://github.com/mapmapteam/mapmap)

## Projets faits avec une ancienne version

MapMap 1.0 ne peut pas ouvrir directement les projets de MapMap 0.4 à 0.6. Convertissez-les d'abord avec le script Python [convert-xml-project.py](https://github.com/mapmapteam/mapmap/blob/1.0.0-beta.1/scripts/convert-xml-project.py), en indiquant la taille de l'écran ou du projecteur pour lequel le projet a été fait :

```
python3 scripts/convert-xml-project.py spectacle.mmp --output-size 1920x1080
```

Le fichier d'origine n'est pas modifié. Les projets de MapMap 0.3 et des versions précédentes ne peuvent pas être convertis.

## Lancer l'application

**macOS :** Ouvrez l'image disque et glissez MapMap dans le dossier Applications. Double-cliquez ensuite sur son icône dans le Finder.
