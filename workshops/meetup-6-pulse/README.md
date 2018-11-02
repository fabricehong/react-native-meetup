# Consignes d'installation et de configuration
## Créer / récupérer une clé d'API Google Maps
récupérer une clé API google map.
doc: https://github.com/react-community/react-native-maps/blob/master/docs/installation.md
### Android
copier le fichier privateInfo.gradle.example en privateInfo.gradle, et y mettre sa clé google map. Le fichier privateInfo.gradle ne sera pas commité.

### iOS
Pas de facilité mis en place pour iOS, suivre la doc donnée ci-dessus. Ne pas commiter votre clé google map API.

# Lancement
## IOS
Après installation, se positionner dans le répertoire ios
```
cd ios
```
Lancer la commande de chargement des pods
```
pod init
```
Paramétrer sa clé Google Maps dans le fichier ios/meetup3maps/AppDelegate.m

## Android
Paramétrer sa clé Google Maps dans le fichier android/app/src/AndroidManifest.xml

Vérifier qu'une version de Gradle 4.1 est installée sur votre poste.
