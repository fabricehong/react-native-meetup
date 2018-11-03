# Lancement
## IOS
Après installation, se positionner dans le répertoire ios
```
cd ios
```
Installer "Bundler" si il n'est pas sur le système: https://bundler.io/
Puis, installer les dépendances Ruby
```
bundle install
```

Lancer la commande d'installation des pods
```
bundle exec pod install
```
Paramétrer sa clé Google Maps dans le fichier ios/meetup3maps/AppDelegate.m

## Android
Paramétrer sa clé Google Maps dans le fichier android/app/src/AndroidManifest.xml

Vérifier qu'une version de Gradle 4.1 est installée sur votre poste.

# Google Maps
## Mettre sa propre clé 'dAPI maps
récupérer une clé API google map.
doc: https://github.com/react-community/react-native-maps/blob/master/docs/installation.md