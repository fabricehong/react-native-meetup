# Meetup 5 - Flechettes Lausannoises

## Contexte

Meetup : https://www.meetup.com/fr-FR/React-Native-enthusiasts-and-entrepreneurs/

Ce meetup a pour thème la réalisation d'un projet React Native from scratch en Mob Programming.
Ce projet porte sur le jeu des Fléchettes Lausannoises : Il doit aider un joueur à enregistrer les scores et faire le suivi des parties.

## Logique impliquée
- Gestion des joueurs : Saisie des noms des joueurs
- Gestion des scores  : Démarrage 0 points, victoire à 300 points
- Gestion du flow de partie : 3 lancers par joueur, puis passage au joueur suivant
- Calcul des points : 
    - Somme des scores des 3 lancers avec gestion des combos (Si 3x le même score, bonus x2 sur le total)
    - Rejet du score de la dernière flèche lancée si elle fait dépasser la somme de l’objectif
    - Une flèche hors cible compte pour -15 points
- Modes additionnels :
    - Mode hardcore : si écart de 100 points ou plus, le score le plus bas est éliminé

### Diagramme d'état
<img src="./doc/diagrams/game-states.svg">

## Interface utilisateur
### Saisie des joueurs
<img src="./doc/mockups/Saisie des joueurs.png">

### Jeu
<img src="./doc/mockups/Jeu.png">

### Scores
<img src="./doc/mockups/Scores.png">

### Résultats
<img src="./doc/mockups/Resultats.png">

## User Story Map
<img src="./doc/user story maps/Rn-flechettes.png">

## Gestion du travail en groupe
### tâches
Voici le tableau Trello: https://trello.com/b/rh0GRZRM/rn-workshop-flechettes
Faire une demande a Fabrice Hong pour être ajouté au tableau en écriture
### code
faire une demande a Fabrice Hong pour être ajouté au repo en écriture

## Outils utilisés pour la doc
### Diagrammes: PlantUML
Utilisation de "PlantUML" ( http://plantuml.com/ )
Conseil utiliser l'extension VSCode PlantUML en mode PlantUML-Server ( Lire doc de l'extension VSCode )
#### Installation GraphViz: Linux
```
sudo apt install python-pydot python-pydot-ng graphviz
```
### Installation GraphViz: OSX
```
brew install graphviz
```
Pour rendu rapide:
https://github.com/plantuml/plantuml-server

### Mockups
Balzamiq ( https://balsamiq.com/ )

### User Story Mapping
Utilisation du service "Story On Map" ( https://storiesonboard.com/ )

## Pré-requis 

### node 10.13 

Le gestionnaire de version de node peut-être utile [nvm](https://github.com/creationix/nvm).

Il peut également être installé avec brew `brew install nvm`

### react-native-cli

`npm install -g react-native-cli` 

### NPM vs YARN 
Dans un soucis de simplification des dépendances, choissisons un gestionnaire de dépendances commmun. 
Au hasard, npm.  

### Dépendencies 

  - [redux](https://redux.js.org)
  - [react-redux](https://react-redux.js.org): React bindings for Redux
   
## Debugging
First of all, install React Native Debugger to debug : https://github.com/jhen0409/react-native-debugger

Then start it doing (mac OSX only, for other platform, check the docs):
```
yarn debug
```

### Connecting to debug
Just these steps let you start RNDebugger out of box:

Make sure all debugger clients of React Native are closed, usually are http://localhost:<port>/debugger-ui
Make sure RNDebugger is open and wait state.
RNDebugger will try connect to debugger proxy, use port 8081 by default, you can new debugger window (macOS: Command+T, Linux/Windows: Ctrl+T) to specify the port if you want.
Enable Debug JS Remotely of developer menu on your app