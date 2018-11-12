# Meetup 5 - Flechettes Lausannoises
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

![Alt text](./doc/game-states.svg)

## Interface utilisateur
... à venir
